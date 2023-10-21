import * as React from "react"
import {Send} from "lucide-react"

import {cn} from "@/lib/utils"
import {Avatar, AvatarFallback, AvatarImage,} from "@/components/ui/Avatar"
import {Button} from "@/components/ui/Button"
import {Card, CardContent, CardFooter, CardHeader,} from "@/components/ui/Card"
import {Input} from "@/components/ui/Input"
import useWebSocket from "@/hooks/useWebSocket.ts";

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

interface Chat {
  id: string;
  chat: string;
  sender: string;
}

/**
 * @see https://velog.io/@rlawogks2468/React%EB%A1%9C-Stomp%EC%99%80-Socket%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%B1%84%ED%8C%85%EB%B0%A9-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
 * @constructor
 */
const ChatPage = () => {
  const {client, activate, deactivate, publish} = useWebSocket();
  const [message, setMessage] = React.useState<Chat[]>([])

  client.onConnect = function (frame) {
    client.subscribe('/topic/enter', function (message) {
      console.log("message", message.body);

    });
  };
  const onSendMessage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    activate();

    publish("/app/chat", JSON.stringify({
      email: "nohyunha95@gmail.com",
      chatRoomId: "chatRoom:f41719ca-c816-42f1-9044-10cb21a36a2f",
      message: input
    }));

    setInput("")
  }


  const [messages, setMessages] = React.useState([
    {
      role: "agent",
      content: "Hi, how can I help you today?",
    },
    {
      role: "user",
      content: "Hey, I'm having trouble with my account.",
    },
    {
      role: "agent",
      content: "What seems to be the problem?",
    },
    {
      role: "user",
      content: "I can't log in.",
    },
  ])
  const [input, setInput] = React.useState("")
  const inputLength = input.trim().length

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
                  message.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                {message.content}
              </div>
            ))}
            {message.toString()}
          </div>
        </CardContent>
        <CardFooter>
          <form
            // onSubmit={(event) => {
            //   event.preventDefault()
            //   if (inputLength === 0) return
            //   setMessages([
            //     ...messages,
            //     {
            //       role: "user",
            //       content: input,
            //     },
            //   ])
            //   setInput("")
            //}
            className="flex w-full items-center space-x-2"
          >
            <Input
              id="message"
              placeholder="Type your message..."
              className="flex-1"
              autoComplete="off"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button onClick={(e) => onSendMessage(e)} size="icon" disabled={inputLength === 0}>
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