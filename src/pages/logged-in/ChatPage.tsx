import * as React from "react"
import {useEffect, useRef} from "react"
import {Send} from "lucide-react"

import {cn} from "@/lib/utils"
import {Avatar, AvatarFallback, AvatarImage,} from "@/components/ui/Avatar"
import {Button} from "@/components/ui/Button"
import {Card, CardContent, CardFooter, CardHeader,} from "@/components/ui/Card"
import {Input} from "@/components/ui/Input"
import useWebSocket from "@/hooks/useWebSocket.ts";
import {getChats} from "@/services/api/chat/api.ts";
import Cookies from "js-cookie";
import {COOKIE_NAME} from "@/services/types/user/types.ts";
import {ScrollArea} from "@/components/ui/ScrollArea.tsx";
import {useQuery} from "@tanstack/react-query";
import {Skeleton} from "@/components/ui/Skeleton.tsx";

/**
 * @see https://velog.io/@rlawogks2468/React%EB%A1%9C-Stomp%EC%99%80-Socket%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%B1%84%ED%8C%85%EB%B0%A9-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
 * @constructor
 */
type Message = {
  chatId: string;
  message: string;
  sender: string;
  hasRead: boolean;
  createdAt: string;
}

const ChatPage = () => {

  // ref
  const inputRef = useRef<HTMLInputElement>(null)
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  // state
  const [messages, setMessages] = React.useState<Message[]>([])
  const {connectionId, publish} = useWebSocket({ setMessages });

  // cookie
  const email = Cookies.get(COOKIE_NAME.EMAIL);

  // query
  const {data, isSuccess} = useQuery<Message[]>({
      queryKey: ['chats'],
      queryFn: () => getChats({email: email}),
  })

  useEffect(() => {
    if (isSuccess) {
      setMessages(data);
    }
  }, [data]);

  // 스크롤 자동 이동
  useEffect(() => {
    messageEndRef.current.scrollIntoView({behavior: 'smooth'});
  }, [messages]);


  // publish
  const onSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current && inputRef.current.value === "") {
      return;
    }

    publish(`/publish/chat/${connectionId}`, JSON.stringify({
      email: email,
      message: inputRef.current.value
    }));

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <>
      <Card className="rounded-none h-screen max-w-sm mx-auto shadow-lg">
        <CardHeader className="flex flex-row items-center">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/avatars/01.png" alt="Image"/>
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">Nickname</p>
              <p className="text-sm text-muted-foreground">{Cookies.get(COOKIE_NAME.EMAIL)}</p>
            </div>
          </div>
        </CardHeader>
        <ScrollArea className="h-4/5">
          <CardContent>
            {!isSuccess && (
              <>
                <Skeleton className="w-[100px] h-[36px] rounded-xl ml-auto bg-primary" />
                <Skeleton className="w-[100px] h-[36px] rounded-xl" />
                <Skeleton className="w-[100px] h-[36px] rounded-xl ml-auto bg-primary" />
                <Skeleton className="w-[100px] h-[36px] rounded-xl" />
              </>
            )}
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
                  {message.message}
                </div>

              ))}
            </div>
            <div ref={messageEndRef}></div>
          </CardContent>
        </ScrollArea>
        <CardFooter className="mt-auto mb-0">
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
              <Send className="h-4 w-4"/>
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </>
  )
}

export default ChatPage;