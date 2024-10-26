/** 
 * 로그인 모달 창 UI
 * 1. OAUth 로그인: 카카오 로그인, 구글 로그인
 * 2. 로그인 진행 후 간단한 정보 입력
 */

import { useDialogState } from "@/features/store/state"
import { Dialog } from "@mui/material"
import '../../app/styles/@common/dialog/index.scss'
import '../../app/styles/@media/dialog/index.scss'
import { changeWrite, write } from "@/features/store/common/write"
import { z } from "zod"
import { writeClick } from "@/features/service/write"

type Props = {
    popup: boolean
}

export function WriteDialog({ popup }: Props) {

    const data = changeWrite();

    const handleChange = (event: any) => {

        const { name, value } = event.target;

        data.setWriteData({
            ...data.writeData,
            [name]: value
        });
    }

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
                <select name="job" onChange={handleChange}>
                    <option value="아르바이트">아르바이트</option>
                    <option value="학생">직장인</option>
                    <option value="취준생">취준생</option>
                    <option value="학생">학생</option>
                    <option value="기타">기타</option>
                </select>

                <p>2. 미래를 위해 현재 하고 있는 일이 있나요..? ＊</p>
                <input 
                    name="work" 
                    type="text"
                    placeholder="ex) 하루동안 꾸준히 운동하기"
                    onChange={handleChange} />

                <p>3. 특정 자격증을 보유하고 계신가요..?</p>
                <input
                    name="license"
                    type="text" 
                    placeholder="ex) 한식조리기능사"
                    onChange={handleChange} />

                <p>4. 선호하는 일자리 유형은 어떻게 되시나요..? ＊</p>
                <select name="workType" onChange={handleChange}>
                    <option value="단기">단기</option>
                    <option value="장기">장기</option>
                    <option value="주말 알바">주말 알바</option>
                    <option value="재택">재택</option>
                </select>

                <p>5. 이전에 일했던 경험 및 경력 사항이 있으신가요..?</p>
                <input
                    name="history"
                    type="text" 
                    placeholder="간단하게 작성해주세요!"
                    onChange={handleChange} />
            </div>

            <button className="writeBtn" onClick={() => writeClick(data.writeData)}>
                현재의 일상을 개선하기 위해 등록하기
            </button>
        </Dialog>
    )
}