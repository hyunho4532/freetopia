"use client";

import { Body } from "@/components/body";
import { LoginDialog } from "@/components/dialog/login";
import { WriteDialog } from "@/components/dialog/write";
import { Header } from "@/components/header";
import { useFetchUser, useGetUser } from "@/features/service/common";
import { useDialogState } from "@/features/store/state";
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  const dialogState = useDialogState((state: any) => state);

  /** zustand에 관리된 사용자 데이터들을 가져온다. */
  const userData = useGetUser();

  /** 페이지가 렌더링 될때마다, 사용자 정보들을 스토리지에 담는다. */
  useFetchUser();

  return (
    <div>
      <Header userData={userData} />
      <Body />
      { dialogState.login && <LoginDialog popup={dialogState.login} /> }
      { dialogState.write && <WriteDialog popup={dialogState.write} /> }
    </div>
  );
}