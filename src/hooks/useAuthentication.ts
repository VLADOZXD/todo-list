import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";
import { auth, googleProvider } from "@/services/firebase";

const useAuthentication = () => {
  const [user, setUser] = useState<User>();
  const [isLogin, setIsLogin] = useState<boolean>();

  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  const googleLogin = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
      setIsLogin(true);
      router.push(`/tasks`);
    });
  };

  const logout = () => {
    signOut(auth).then(() => {
      setUser(undefined);
      setIsLogin(false);
      router.push("/authentication");
    });
  };

  return { user, isLogin, googleLogin, logout };
};

export default useAuthentication;
