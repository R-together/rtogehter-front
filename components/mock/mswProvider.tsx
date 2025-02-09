"use client";

import { initMsw } from "@/mocks/index";
import { PropsWithChildren } from "react";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enable") {
  initMsw();
}

function MswProvider({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

export default MswProvider;
