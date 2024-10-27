import { useReducer, useState } from "react";
import { z } from "zod";

/** 작성함 데이터 
 * (job: 현재 직업, work: 현재 하고 있는 일, license: 보유하고 있는 자격증, workType: 선호하는 일자리 유형, history: 일한 경험 및 경력 사항) 
 **/
export const useFetchChangeWrite = () => {
    const [writeData, setWriteData] = useState({
        job: '',
        work: '',
        license: '',
        workType: '',
        history: ''
    })

    return ({
        writeData, setWriteData
    });
}

/** 분석함 데이터 
 * (job: 현재 직업, work: 현재 하고 있는 일, license: 보유하고 있는 자격증, workType: 선호하는 일자리 유형, history: 일한 경험 및 경력 사항) 
 **/
export const useFetchChangeAnalyze = () => {
    const [analyzeData, setAnalyzeData] = useState({
        status: '',
        todayactivity: '',
        todaywork: '',
        tomowork: '',
        takeaway: ''
    })

    return ({
        analyzeData, setAnalyzeData
    })
}

/** Body 데이터
 * (isMobile: 현재 웹이 모바일인지 아닌지 판단, writeData: 작성함에 작성한 데이터들을 조회)
 */
export const useFetchBody = () => {
    const [_data, _setData] = useReducer((prev: any, next: any) => {
        return { ...prev, ...next }
    }, {
        writeData: [], analyzeData: []
    })
    const [isMobile, setIsMobile] = useState(false);

    return ({
        isMobile, setIsMobile, _data, _setData
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