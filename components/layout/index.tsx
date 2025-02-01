"use client";

import { useLayoutEffect, useState } from "react";

import TopNavigationBar from "./topNavigationBar";
import LeftNavigationBar from "./leftNavigationBar";
import { useAuthStore } from "@/store/authStore";
import { useLayoutStore } from "@/store/layoutStore";
import { pcViewMinimumWidth } from "@/constants/layout";

function Layout({ children }: { children: React.ReactNode }) {
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const setIsMobile = useLayoutStore((state) => state.setIsMobile);

  const [isOpen, setIsOpen] = useState(false);

  const sideMenuToggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const logOutHandler = () => {
    setIsLoggedIn(false);
  };

  useLayoutEffect(() => {
    function decideMobileView() {
      setIsMobile(window.innerWidth < pcViewMinimumWidth);
    }

    // initial check
    decideMobileView();

    window.addEventListener("resize", decideMobileView);

    return () => {
      removeEventListener("resize", decideMobileView);
    };
  }, []);

  return (
    <div className="relative">
      <TopNavigationBar
        sideMenuToggleHandler={sideMenuToggleHandler}
        logOutHandler={logOutHandler}
      />

      <LeftNavigationBar
        isOpen={isOpen}
        sideMenuToggleHandler={sideMenuToggleHandler}
        logOutHandler={logOutHandler}
      />

      <div className="mx-5">{children}</div>
    </div>
  );
}

export default Layout;
