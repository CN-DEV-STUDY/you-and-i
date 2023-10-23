import * as React from "react"
import {Send} from "lucide-react"

import {cn} from "@/lib/utils"
import {Avatar, AvatarFallback, AvatarImage,} from "@/components/ui/Avatar"
import {Button} from "@/components/ui/Button"
import {Card, CardContent, CardFooter, CardHeader,} from "@/components/ui/Card"
import {Input} from "@/components/ui/Input"
import useWebSocket from "@/hooks/useWebSocket.ts";
import {useEffect, useMemo, useRef} from "react";
import axios from "axios";
import {saveUserRequest} from "@/services/api/chat/api.ts";
import {useQuery} from "@tanstack/react-query";
import {GetChatResponse} from "@/services/types/chat/types.ts";
import Cookies from "js-cookie";

const users = [
  {
    name: "Olivia Martin",
    email: "m@example.com",
    avatar: "/avatars/01.png",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatar: "/avatars/03.png",
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    avatar: "/avatars/05.png",
  },
  {
    name: "Jackson Lee",
    email: "lee@example.com",
    avatar: "/avatars/02.png",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    avatar: "/avatars/04.png",
  },
] as const

type User = (typeof users)[number]

/**
 * @see https://velog.io/@rlawogks2468/React%EB%A1%9C-Stomp%EC%99%80-Socket%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%B1%84%ED%8C%85%EB%B0%A9-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
 * @constructor
 */
const ChatPage = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const {client, activate, deactivate, publish} = useMemo(() => useWebSocket(), []);
  const [messages, setMessages] = React.useState([])
  const email = Cookies.get("email");
  const chatRoomId = Cookies.get("chatRoomId");

  // 초기 데이터 불러오기
  useEffect(() => {
    saveUserRequest({chatRoomId: chatRoomId, email: email})
      .then((res) => {
        res.data.forEach((data: GetChatResponse) => {
          setMessages((prev) => [...prev, {
            sender: data.sender,
            content: data.message,
          }])
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  client.onConnect = function (frame) {
    activate();
    client.subscribe('/topic/enter', (message) => {
      const chat = JSON.parse(message.body) as GetChatResponse;
      setMessages((prev) => [...prev, {
        sender: chat.sender,
        content: chat.message,
      }])
    })
  };

  const onSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current && inputRef.current.value === "") {
      return;
    }

    publish("/app/chat", JSON.stringify({
      email: email,
      chatRoomId: chatRoomId,
      message: inputRef.current.value
    }));

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  console.log("messages", messages)
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/avatars/01.png" alt="Image" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">Sofia Davis</p>
              <p className="text-sm text-muted-foreground">m@example.com</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                  message.sender === email
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                {message.content}
              </div>

            ))}
          </div>
          <div ref={messageEndRef}></div>
        </CardContent>
        <CardFooter>
          <form
            onSubmit={(e) => onSendMessage(e)}
            className="flex w-full items-center space-x-2"
          >
            <Input
              id="message"
              placeholder="Type your message..."
              className="flex-1"
              autoComplete="off"
              ref={inputRef}
            />
            <Button size="icon">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </>
  )
}

export default ChatPage;