import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/Avatar.tsx";
import {Button} from "@/components/ui/Button.tsx";
import {COOKIE_NAME, SearchUserResponse} from "@/services/types/user/types.ts";
import {useMutation} from "@tanstack/react-query";
import {sendRelationsNotice} from "@/services/api/notification/api";
import Cookies from "js-cookie";
import {useDispatch} from "react-redux";
import {openConfirmPopup} from "@/slices/popup/confirmPopupSlice.ts";
import {openAlertPopup} from "@/slices/popup/alertPopupSlice.ts";
import {useNavigate} from "react-router-dom";

type Props = {
  user: SearchUserResponse;
  lastUserElementRef?: any;
}

const SearchUserCard = ({user, lastUserElementRef}: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {mutate, isPending} = useMutation({
    mutationFn: sendRelationsNotice,
    onSuccess: () => {
      dispatch(openAlertPopup({title: "유앤아이 신청", content: "유앤아이 신청을 보냈습니다.", onClose: () => navigate("/")}))
    }
  });

  const setRelation = () => {
    dispatch(
      openConfirmPopup({
          title: "상대방을 등록하시겠습니까?",
          content: "상대방에게 알림을 보냅니다.",
          onConfirm: () => mutate({sender: Cookies.get(COOKIE_NAME.EMAIL), receiver: user.email})
        }
      )
    );
  }

  return (
    <div className="flex items-center justify-between space-x-4" ref={lastUserElementRef}>
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src=""/>
          <AvatarFallback>{user.email.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium leading-none">
            {user.nickname}
          </p>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
      </div>
      <Button onClick={setRelation} className="ml-auto w-[80px]">선택</Button>
    </div>
  )
}

export default SearchUserCard;