/**
 * 작성과 관련한 모든 것들을 여기에 작성한다.
 */

import { z } from "zod";
import { analyze, write } from "../store/common/write";
import { supabase } from "../../../supabase.config";
import { toast } from "react-toastify";
import { currentDate } from "@/shared/util/date";

// 헤더에 작성함 클릭했을 때
export const writeClick = async (writeData: any) => {
    try {
        const validate = write.parse(writeData);
        
        if (validate) {
            await supabase.from('freetopia').insert({
                job: writeData.job,
                work: writeData.work,
                license: writeData.license,
                worktype: writeData.workType,
                history: writeData.history,
                name: JSON.parse(localStorage.getItem('user')!).name,
                profileurl: JSON.parse(localStorage.getItem('user')!).profileurl,
                currentdate: currentDate()
            }); 
        }

    } catch (error) {
        if (error instanceof z.ZodError) {
            error.errors.map(error => {
                toast.error(error.message);
            })
        }
    }
}

// 헤더에 분석함 클릭했을 때
export const analyzeClick = async (analyzeData: any) => {

    console.log(currentDate());

    try {
        await supabase.from('analyze').insert({
            status: analyzeData.status,
            todayactivity: analyzeData.todayactivity,
            todaywork: analyzeData.todaywork,
            tomowork: analyzeData.tomowork,
            takeaway: analyzeData.takeaway,
            name: JSON.parse(localStorage.getItem('user')!).name,
            profileurl: JSON.parse(localStorage.getItem('user')!).profileurl,
            currentdate: currentDate()
        })
    } catch (error) {
        console.error(error);
    }
}