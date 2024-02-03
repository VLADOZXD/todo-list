"use client";
import useAuthentication from "@/hooks/useAuthentication";
import Button from "../layouts/Button";

const AuthPageContent = () => {
  const { googleLogin } = useAuthentication();

  return (
    <div className="h-full w-48 flex flex-col justify-between">
      <span className="text-center text-base font-medium text-gray-700">
        🔐Please sign in
      </span>
      <Button onClick={googleLogin} text="Login with Google" color="red" />
    </div>
  );
};

export default AuthPageContent;
