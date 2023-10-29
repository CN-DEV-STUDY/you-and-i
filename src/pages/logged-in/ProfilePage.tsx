import {ProfileForm} from "@/components/domain/profile/ProfileForm.tsx";
import TopBar from "@/components/shared/TopBar.tsx";
import FindYouForm from "@/components/domain/profile/FindYouForm.tsx";

const ProfilePage = () => {
  return (
    <>
      <div className="space-y-6 p-5">
        <FindYouForm />
        <div className="pt-12">
          <h3 className="text-xl font-bold text-[--color__white]">Profile</h3>
        </div>
        <ProfileForm />
      </div>
    </>
  );
}

export default ProfilePage;

