/** 
 * 작성과 관련된 모달 창은 여기에 작성한다.
 * 로그인 모달 창 UI
 * 1. OAUth 로그인: 카카오 로그인, 구글 로그인
 * 2. 로그인 진행 후 간단한 정보 입력
 */

import { useDialogState } from "@/features/store/state"
import { Dialog } from "@mui/material"
import 'styles@/@common/dialog/index.scss'
import 'styles@/@media/dialog/index.scss'
import { useFetchChangeAnalyze, useFetchChangeWrite } from "@/features/store/common/write"
import { analyzeClick, writeClick } from "@/features/service/write"
import json from '../../../schema/data.json'

type writeProps = {
    popup: boolean
}

type analyzeProps = {
    popup: boolean
}

export function WriteDialog({ popup }: writeProps) {

    const data = useFetchChangeWrite();

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
                <h1 className="title">현재의 일상 개선하기</h1>
            </div>

            <div className="inputform">
                <p>1. 현재 직업이 어떻게 되신가요...? ＊</p>
                <select name="job" onChange={handleChange}>
                    { json.job.map((data: any) => (
                        <option value={data.title}>{data.title}</option>
                    )) }
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
                    { json.jobType.map((data: any) => (
                        <option value={data.title}>{data.title}</option>
                    ))}
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

export function AnalyzeDialog({ popup }: analyzeProps) {

    const data = useFetchChangeAnalyze();

    const handleChange = (event: any) => {
        const { name, value } = event.target;

        data.setAnalyzeData({
            ...data.analyzeData,
            [name]: value
        });
    }


    return (
        <Dialog
            PaperProps={{
                style: {
                    width: "460px",
                    height: "780px"
                }
            }}
            open={popup}
            onClose={() => {
                useDialogState.getState().setAnalyze(false);
            }}>

            <div className="inputbody">
                <h1 className="title">오늘 하루 분석하기</h1>
            </div>

            <div className="inputform">
                <p>1. 오늘 하루는 어떠셨나요? *</p>                
                <select name="status" onChange={handleChange}>
                    { json.status.map((data: any) => (
                        <option value={data.title}>{data.title}</option>
                    ))}
                </select>
                
                <p>2. 오늘 있었던 사건이나 활동을 입력해주세요! *</p>
                <input 
                    name="todayactivity"
                    type="text"
                    placeholder="ex) 3시에 운동하기"
                    onChange={handleChange} />

                <p>3. 오늘 해야 할 일을 완료하셨나요? *</p>
                <input
                    name="todaywork"
                    type="text" 
                    placeholder="ex) 자격증 필기 시험 접수하기"
                    onChange={handleChange} />

                <p>4. 내일 계획은 무엇인가요?</p>
                <input
                    name="tomowork"
                    type="text" 
                    placeholder="ex) 토익 공부"
                    onChange={handleChange} />

                <p>5. 느낀 점을 입력해주세요!</p>
                <textarea
                    name="takeaway"
                    placeholder="ex) 보람찬 일들을 하여 재미있는 하루가 되었습니다"
                    onChange={handleChange} />
            </div>

            <button className="analyzeBtn" onClick={() => analyzeClick(data.analyzeData)}>
                오늘의 하루를 정리하며 마무리..
            </button>
        </Dialog>
    )
}