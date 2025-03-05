import Link from "next/link";

import CloseBackground from "./closeBackground";

import Close from "/public/assets/close.svg";
import SignOut from "/public/assets/sign_out.svg";
import { useAuthStore } from "@/store/authStore";

interface ILeftNavigationBar {
  isOpen: boolean;
  sideMenuToggleHandler: () => void;
  logOutHandler: () => void;
}

function LeftNavigationBar({
  isOpen,
  sideMenuToggleHandler,
  logOutHandler,
}: ILeftNavigationBar) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <div
      className={`transition ease-in-out duration-100 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <CloseBackground sideMenuToggleHandler={sideMenuToggleHandler} />

      <nav className="bg-white absolute top-0 right-0 h-screen flex flex-col justify-between">
        <header
          onClick={sideMenuToggleHandler}
          className="p-4 flex justify-end"
        >
          <Close />
        </header>

        <div className="p-4 text-center">
          Oh, you are not a member.
          <br />
          For more feature, please <Link href="/login">login!</Link>
        </div>

        <footer className="p-4">
          {isLoggedIn && <SignOut onClick={logOutHandler} />}
        </footer>
      </nav>
    </div>
  );
}

export default LeftNavigationBar;
