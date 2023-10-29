import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/Avatar.tsx";
import {Button} from "@/components/ui/Button.tsx";
import {COOKIE_NAME, SearchUserResponse} from "@/services/types/user/types.ts";
import {useMutation} from "@tanstack/react-query";
import {relationShipRequest} from "@/services/api/user/api.ts";
import Cookies from "js-cookie";


type Props = {
  user: SearchUserResponse;
  lastUserElementRef?: any;
}

const SearchUserCard = ({user, lastUserElementRef}: Props) => {
  const {mutate, isPending} = useMutation({
    mutationFn: relationShipRequest,
    onSuccess: (data) => {
      console.log(data);
    }
  });

  const setRelation = () => {


    mutate({
      myEmail: Cookies.get(COOKIE_NAME.EMAIL),
      yourEmail: user.email
    });
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