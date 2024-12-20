/** 
 * 로그인 모달 창 UI
 * 1. OAUth 로그인: 카카오 로그인, 구글 로그인
 * 2. 로그인 진행 후 간단한 정보 입력
 */

import { useDialogState } from "@/features/store/state"
import { Dialog } from "@mui/material"
import '../../app/styles/@common/dialog/index.scss'
import '../../app/styles/@media/dialog/index.scss'
import Image from "next/image"
import { loginClick } from "@/features/service/login"

type Props = {
    popup: boolean
}

export function LoginDialog({ popup }: Props) {
    return (
        <Dialog
            PaperProps={{
                style: {
                    width: "460px",
                    height: "420px"
                }
            }}
            open={popup}
            onClose={() => {
                useDialogState.getState().setLogin(false);
            }}>

            <div className="loginbody">
                <h1 className="title">프리토피아 로그인</h1>
                <p className="subtitle">로그인을 진행하여 소식을 알려주세요...</p>
            </div>

            <div className="loginform">
                <Image 
                    className="img" 
                    width={60} 
                    height={60} 
                    src="/google.png" 
                    alt="구글 로그인"
                    onClick={() => loginClick()} />
                <Image className="img" width={60} height={60} src="/kakao.svg" alt="카카오 로그인" />
            </div>

            <button className="loginbtn">직접 회원가입</button>

        </Dialog>
    )
}