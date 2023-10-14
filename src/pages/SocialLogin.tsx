import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import HomePage from "@/pages/logged-in/HomePage";

const SocialLogin = () => {
  return (
    <>
      <SignedIn>
        <HomePage />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default SocialLogin;
