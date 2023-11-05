import {Client} from '@stomp/stompjs';
import Cookies from "js-cookie";
import {COOKIE_NAME} from "@/services/types/user/types.ts";
import {getConnectionId} from "@/services/api/chat/api.ts";
import {useQuery} from "@tanstack/react-query";
import {useCallback, useEffect, useMemo} from "react";
import {GetChatResponse} from "@/services/types/chat/types.ts";

const { VITE_BROKER_URL } = import.meta.env;

type Props = {
  setMessages: (messages: any) => void;
}

const useWebSocket = ({setMessages}: Props) => {
  // cookie
  const email = Cookies.get(COOKIE_NAME.EMAIL);

  const {data: connectionId, isSuccess} = useQuery<string>(
    {
      queryKey: ['connectionId'],
      queryFn: () => getConnectionId(email)
    });

  const client = useMemo( () => {
    return new Client({
      brokerURL: `ws://${VITE_BROKER_URL}/you-and-i-websocket`,
      connectHeaders: {
        Authorization: 'Bearer ' + Cookies.get(COOKIE_NAME.ACCESS_TOKEN),
      },
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    })
  }, [])

  useEffect(() => {
    client.onStompError = function (frame) {
      console.log('Broker reported error: ' + frame.headers['message']);
      console.log('Additional details: ' + frame.body);
    }

    if (connectionId && isSuccess) {
      console.log("connectionId", connectionId)
      client.activate();
      client.onConnect = function (frame) {
        client.subscribe(`/queue/chat/${connectionId}`, (message) => {
          const chat = JSON.parse(message.body) as GetChatResponse;
          setMessages((prev) => [...prev, {
            sender: chat.sender,
            message: chat.message,
          }])
        })
      }
    }
  }, [connectionId, isSuccess])

  const publish = (destination: string, body: string) => {
    client.publish({
      destination: destination,
      body: body
    });
  }

  return { connectionId, publish }
}

export default useWebSocket;