/** 
 * 로그인 모달 창 UI
 * 1. OAUth 로그인: 카카오 로그인, 구글 로그인
 * 2. 로그인 진행 후 간단한 정보 입력
 */

import { Dialog } from "@mui/material"

type Props = {
    popup: boolean
}

export function LoginDialog({ popup }: Props) {

    console.log(popup);

    return (
        <Dialog
            open={popup}>

            

        </Dialog>
    )
}