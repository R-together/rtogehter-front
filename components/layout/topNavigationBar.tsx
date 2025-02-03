import Image from "next/image";
import Link from "next/link";

import { useLayoutStore } from "@/store/layoutStore";

import HamburgerMenu from "/public/assets/hamburgerMenu.svg";
import SignOut from "/public/assets/sign_out.svg";
import Profile from "/public/assets/profile.svg";
import { useAuthStore } from "@/store/authStore";

interface ITopNavigationBar {
  sideMenuToggleHandler: () => void;
  logOutHandler: () => void;
}

function TopNavigationBar({
  sideMenuToggleHandler,
  logOutHandler,
}: ITopNavigationBar) {
  const isMobile = useLayoutStore((state) => state.isMobile);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <header className="px-5 py-3 flex justify-between items-center shadow-md">
      {isMobile ? (
        <>
          <div>
            <Image
              src="/assets/logo_mobile.svg"
              alt="mobile logo"
              width={30}
              height={30}
            />
          </div>

          <div onClick={sideMenuToggleHandler}>
            <HamburgerMenu />
          </div>
        </>
      ) : (
        <>
          <div>
            <Image
              src="/assets/logo_pc.svg"
              alt="pc logo"
              width={300}
              height={100}
            />
          </div>

          {isLoggedIn && (
            <>
              <div className="flex justify-around items-center gap-8">
                <div>
                  <Link href="/my-page">
                    <Profile />
                  </Link>
                </div>

                <div onClick={logOutHandler}>
                  <SignOut />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </header>
  );
}

export default TopNavigationBar;
