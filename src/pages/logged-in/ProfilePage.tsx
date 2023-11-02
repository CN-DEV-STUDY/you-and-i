import {ProfileForm} from "@/components/domain/profile/ProfileForm.tsx";
import TopBar from "@/components/shared/TopBar.tsx";
import FindYouForm from "@/components/domain/profile/FindYouForm.tsx";
import {Button} from "@/components/ui/Button.tsx";
import {Link} from "react-router-dom";

const ProfilePage = () => {
  return (
    <>
      <div className="space-y-6 p-5">
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
    </>
  );
}

export default ProfilePage;

