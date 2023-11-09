import {ProfileForm} from "@/components/domain/profile/ProfileForm.tsx";
import {Button} from "@/components/ui/Button.tsx";
import {Link} from "react-router-dom";

const ProfilePage = () => {
  return (

      <div className="max-w-sm mx-auto space-y-6 p-5 bg-[--color__primary]">
        {/*<FindYouForm />*/}
        <p className="text-[--color__white]">상대방을 등록하고 you and i를 시작해보세요.</p>
        <Button variant="outline" asChild>
          <Link to="/find-you">상대방 등록하기</Link>
        </Button>
        <div className="pt-12">
          <h3 className="text-xl font-bold text-[--color__white]">Profile</h3>
        </div>
        <ProfileForm />
      </div>

  );
}

export default ProfilePage;

