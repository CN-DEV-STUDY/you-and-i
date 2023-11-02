import {Avatar, AvatarFallback, AvatarImage,} from "@/components/ui/Avatar"
import {Button} from "@/components/ui/Button"
import {Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/Card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/Collapsible"
import {ChevronsUpDown} from "lucide-react";
import {useEffect, useState} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import {acceptRelations, getNotifications} from "@/services/api/notification/api.ts";
import {GetNoticesResponse} from "@/services/types/notice/types.ts";
import {useDispatch} from "react-redux";
import {openConfirmPopup} from "@/slices/popup/confirmPopupSlice.ts";
import {openAlertPopup} from "@/slices/popup/alertPopupSlice.ts";

const NotificationPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notices, setNotices] = useState<GetNoticesResponse[]>([]);
  const dispatch = useDispatch();

  const { data, isSuccess, isRefetching, refetch } = useQuery({
    queryKey: ["notifications", notices.length],
    queryFn: getNotifications
  })

  const { mutate } = useMutation({
    mutationFn: acceptRelations,
    onSuccess: () => {
      dispatch(openAlertPopup({title:"유앤아이 신청 수락", content: "유앤아이 신청을 수락하였습니다."}));
    }
  })

  useEffect(() => {
    if (isSuccess) {
      setNotices(data?.data);
    }
  }, [isSuccess]);

  const onAcceptButtonClick = (noticeId: number) => {
    dispatch(
      openConfirmPopup(
        {
          title: "유앤아이 신청 수락",
          content: "유앤아이 신청을 수락하시겠습니까?",
          onConfirm: () => {
            mutate(noticeId);
            setNotices(notices.filter((notice) => notice.noticeId !== noticeId))
          }
        }
      )
    )
  }

  return (
    <Card className="rounded-none bg-[--color__primary] text-[--color__white] h-screen">
      <CardHeader className="pb-0">
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-[350px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4 py-4">
            <h4 className="text-md font-semibold">
              유앤아이 신청({notices.length})
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0 bg-[--color__secondary]">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="space-y-4">
              <div className="grid gap-6">
                {notices.map((notice, index) => (
                  <div className="flex items-center justify-between space-x-4" key={notice.noticeId}>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback className="text-black">{notice.senderEmail.substring(0,2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">
                          {notice.senderNickname}
                        </p>
                        <p className="text-sm text-muted-foreground">{notice.senderEmail}</p>
                      </div>
                    </div>
                    <Button
                      onClick={() => onAcceptButtonClick(notice.noticeId)}
                      className="ml-auto w-[110px] bg-[--color__secondary] outline"
                    >
                      수락
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

      </CardContent>
    </Card>
  )
}

export default NotificationPage;