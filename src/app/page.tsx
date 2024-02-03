"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthentication from "@/hooks/useAuthentication";

const HomePage = () => {
  const { isLogin } = useAuthentication();
  const router = useRouter();

  useEffect(() => {
    if (isLogin === true) {
      router.push("/tasks");
    } else if (isLogin === false) {
      router.push("/authentication");
    }
  }, [isLogin]);

  return <></>;
};

export default HomePage;
