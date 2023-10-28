import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/Avatar.tsx";
import {Button} from "@/components/ui/Button.tsx";
import {SearchUserResponse} from "@/services/types/user/types.ts";

type Props = {
  user: SearchUserResponse;
  lastUserElementRef?: any;
}

const SearchUserCard = ({user, lastUserElementRef}: Props) => {
  return (
    <div
      className="flex items-center justify-between space-x-4"
      ref={lastUserElementRef}
      key={user.email}
    >
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="/avatars/03.png"/>
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium leading-none">
            {user.nickname}
          </p>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
      </div>
      <Button className="ml-auto w-[80px]">선택</Button>
    </div>
  )
}

export default SearchUserCard;