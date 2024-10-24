"use client";

import { LoginDialog } from "@/components/dialog/login";
import { Header } from "@/components/header";
import { dialogState } from "@/features/store/state";

export default function Home() {

  const loginPopup = dialogState((state: any) => state.login);

  return (
    <div className="flex-col">
      <Header />
      { loginPopup && <LoginDialog popup={loginPopup} /> }
    </div>
  );
}