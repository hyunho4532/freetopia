import { useEffect, useMemo } from "react"
import { supabase } from "../../../supabase.config"

// freetopia 테이블에 있는 데이터들 조회
export const useSelectWrite = async () => {
    const { data } = await supabase.from('freetopia').select();
    return data;
}

// analyze 테이블에 있는 데이터들 조회
export const useSelectAnalyze = async () => {
    const { data } = await supabase.from('analyze').select();
    return data;
}