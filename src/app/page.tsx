"use client";

import { Body } from "@/components/body";
import { LoginDialog } from "@/components/dialog/login";
import { Header } from "@/components/header";
import { useFetchUser } from "@/features/service/common";
import { useDialogState } from "@/features/store/state";

export default function Home() {

  const loginPopup = useDialogState((state: any) => state.login);

  const userData = useFetchUser()
    .then(response => {
      console.log(response);
    });

  return (
    <div>
      <Header userData={userData} />
      <Body />
      { loginPopup && <LoginDialog popup={loginPopup} /> }
    </div>
  );
}