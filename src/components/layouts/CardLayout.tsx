"use client";
import { usePathname, useRouter } from "next/navigation";

import ArrowIcon from "../Icons/ArrowIcon";
import LogoutIcon from "../Icons/LogoutIcon";
import useFetch from "@/hooks/useFetch";
import useAuthentication from "@/hooks/useAuthentication";

interface CardLayoutProps {
  children?: JSX.Element | JSX.Element[] | string | string[];
}

const CardLayout = ({ children }: CardLayoutProps) => {
  const fetchedTasks = useFetch();
  const { logout } = useAuthentication();
  const pathname = usePathname();
  const router = useRouter();

  let redirectLink;

  const handleRedirect = () => {
    if (pathname === "/tasks/new-task") {
      router.push("/tasks");
    } else if (pathname === "/tasks") {
      logout();
    }
  };

  if (pathname === "/tasks/new-task") {
    redirectLink = <ArrowIcon className="w-6 h-6 fill-gray-600" />;
  } else if (pathname === "/tasks") {
    redirectLink = <LogoutIcon className="w-6 h-6 fill-gray-600" />;
  }

  return (
    <div className={`relative px-12 py-12 rounded-md shadow-lg bg-white`}>
      {fetchedTasks && redirectLink && (
        <div
          className="p-3 rounded-md absolute top-0 left-0 fill-gray-500 hover:bg-gray-100"
          onClick={handleRedirect}
        >
          {redirectLink}
        </div>
      )}
      {children}
    </div>
  );
};

export default CardLayout;
