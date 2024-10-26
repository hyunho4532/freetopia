/**
 * 작성과 관련한 모든 것들을 여기에 작성한다.
 */

import { z } from "zod";
import { write } from "../store/common/write";
import { supabase } from "../../../supabase.config";

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
                history: writeData.history
            }); 
        }

    } catch(error) {
        if (error instanceof z.ZodError) {
            error.errors.map(error => {
                alert(error.message);
            })
        }
    }
}