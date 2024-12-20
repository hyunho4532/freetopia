"use client";

import { Body } from "components@/body";
import { Header } from "components@/header";
import { useFetchUser, useGetUser } from "@/features/service/common";
import { useDialogState } from "@/features/store/state";
import { SetUpDialog } from "@/shared/ui-kit/dialog";
import 'swiper/css';
import 'swiper/css/pagination'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const dialogState = useDialogState((state: any) => state);

  /** zustand에 관리된 사용자 데이터들을 가져온다. */
  const userData = useGetUser();

  /** 페이지가 렌더링 될때마다, 사용자 정보들을 스토리지에 담는다. */
  useFetchUser();

  return (
    <div>
      <ToastContainer />
      <Header userData={userData} />
      <Body />
      <SetUpDialog dialogState={dialogState} />
    </div>
  );
}