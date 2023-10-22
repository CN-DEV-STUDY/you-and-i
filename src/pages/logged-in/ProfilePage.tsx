import {ProfileForm} from "@/components/ProfileForm.tsx";
import TopBar from "@/components/shared/TopBar.tsx";

const ProfilePage = () => {
  return (
    <>
      <div className="space-y-6 p-5 text-[--color__white]">
        <div>
          <h3 className="text-xl font-bold">Profile</h3>
        </div>
        <ProfileForm />
      </div>
    </>
  );
}

export default ProfilePage;

