import { Client } from '@stomp/stompjs';
import Cookies from "js-cookie";
import {useEffect} from "react";

const useWebSocket = () => {

  const { VITE_BROKER_URL } = import.meta.env;

  const client = new Client({
    brokerURL: `ws://${VITE_BROKER_URL}/you-and-i-websocket`,
    connectHeaders: {
      Authorization: 'Bearer ' + Cookies.get('accessToken'),
    },
    debug: function (str) {
      console.log(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
  });

  client.onStompError = function (frame) {
    console.log('Broker reported error: ' + frame.headers['message']);
    console.log('Additional details: ' + frame.body);
  }

  const activate = () => {
    client.activate();
  }

  const deactivate = () => {
    client.deactivate();
  }

  const publish = (destination: string, body: string) => {
    client.publish({
      destination: destination,
      body: body
    });
  }

  useEffect(() => {
    activate();
    return () => {
      deactivate();
    }
  }, [])

  return {client, activate, deactivate, publish}
}

export default useWebSocket;