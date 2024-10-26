/** 
 * 로그인 모달 창 UI
 * 1. OAUth 로그인: 카카오 로그인, 구글 로그인
 * 2. 로그인 진행 후 간단한 정보 입력
 */

import { useDialogState } from "@/features/store/state"
import { Dialog } from "@mui/material"
import '../../app/styles/@common/dialog/index.scss'
import '../../app/styles/@media/dialog/index.scss'

type Props = {
    popup: boolean
}

export function WriteDialog({ popup }: Props) {
    return (
        <Dialog
            PaperProps={{
                style: {
                    width: "460px",
                    height: "720px"
                }
            }}
            open={popup}
            onClose={() => {
                useDialogState.getState().setWrite(false);
            }}>

            <div className="inputbody">
                <h1 className="title">현재의 일상을 개선하기</h1>
            </div>

            <div className="inputform">
                <p>1. 현재 직업이 어떻게 되신가요...? ＊</p>
                <select>
                    <option>아르바이트</option>
                    <option>직장인</option>
                    <option>취준생</option>
                </select>

                <p>2. 미래를 위해 현재 하고 있는 일이 있나요..? ＊</p>
                <input type="text" placeholder="ex) 하루동안 꾸준히 운동하기" />

                <p>3. 특정 자격증을 보유하고 계신가요..?</p>
                <input type="text" placeholder="ex) 한식조리기능사" />

                <p>4. 선호하는 일자리 유형은 어떻게 되시나요..? ＊</p>
                <select>
                    <option>단기</option>
                    <option>장기</option>
                    <option>주말 알바</option>
                    <option>재택</option>
                </select>

                <p>5. 이전에 일했던 경험 및 경력 사항이 있으신가요..?</p>
                <input type="text" placeholder="간단하게 작성해주세요!" />
            </div>

            <button className="writeBtn">
                현재의 일상을 개선하기 위해 등록하기
            </button>
        </Dialog>
    )
}