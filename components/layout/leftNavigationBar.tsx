import Image from "next/image";

import CloseBackground from "./closeBackground";
import Link from "next/link";

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
          <Image
            src="/close.svg"
            alt="r together logo"
            width={30}
            height={30}
          />
        </header>

        <div className="p-4 text-center">
          Oh, you are not a member. <br />
          For more feature, please <Link href="/login">login!</Link>
        </div>

        <footer className="p-4">
          <Image
            src="/sign_out.svg"
            alt="sign out icon"
            width={30}
            height={30}
            onClick={logOutHandler}
          />
        </footer>
      </nav>
    </div>
  );
}

export default LeftNavigationBar;
