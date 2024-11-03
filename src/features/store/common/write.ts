import { useReducer } from "react";
import { z } from "zod";

/** 작성함 데이터 
 * (job: 현재 직업, work: 현재 하고 있는 일, license: 보유하고 있는 자격증, workType: 선호하는 일자리 유형, history: 일한 경험 및 경력 사항) 
 **/
export const useFetchChangeWrite = () => {
    const [writeData, setWriteData] = useReducer((prev: any, next: any) => {
        return { ...prev, ...next }
    }, {
        job: '', work: '', license: '', workType: '', history: ''
    })

    return ({
        writeData, setWriteData
    });
}

/** 분석함 데이터 
 * (status: 오늘 하루 상태, todayactivity: 오늘 사건, 활동 정리, todaywork: 오늘 해야 할 일을 완료 했는지, tomowork: 내일 계획, takeaway: 느낀 점) 
 **/
export const useFetchChangeAnalyze = () => {
    const [analyzeData, setAnalyzeData] = useReducer((prev: any, next: any) => {
        return { ...prev, ...next }
    }, {
        status: '', todayactivity: '', todaywork: '', tomowork: '', takeaway: ''
    })

    return ({
        analyzeData, setAnalyzeData
    })
}

/** Body 데이터
 * (isMobile: 현재 웹이 모바일인지 아닌지 판단, writeData: 작성함에 작성한 데이터들을 조회, analyzeData: 분석함에 작성한 데이터들을 조회)
 */
export const useFetchBody = () => {
    const [_data, _setData] = useReducer((prev: any, next: any) => {
        return { ...prev, ...next }
    }, {
        writeData: [], analyzeData: [], isMobile: false
    })

    return ({
        _data, _setData
    })
}

/** 작성함과 관련된 유효성 검사 데이터  */
export const write = z.object({
    job: z.string().refine((job) => job.length > 0, {
        message: "현재 직업을 선택해주세요!"
    }),
    work: z.string().refine((work) => work.length > 0, {
        message: "현재 하고 있는 일을 입력해주세요!"
    }),
    workType: z.string().refine((type) => type.length > 0, {
        message: "일자리 유형을 선택해주세요!"
    }),
})

/** 분석함과 관련된 유효성 검사 데이터  */
export const analyze = z.object({
    status: z.string().refine((status) => status.length > 0, {
        message: "오늘의 감정을 선택해주세요!"
    }),
    todayactivity: z.string().refine((activity) => activity.length > 0, {
        message: "오늘 있었던 사건이나 활동을 입력해주세요!"
    }),
    todaywork: z.string().refine((work) => work.length > 0, {
        message: "오늘 해야 할 일을 완료하셨나요?"
    })
})