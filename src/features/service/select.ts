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

// analyze 테이블에 있는 상세 데이터 조회
export const useSelectAnalyzeFindById = async (id: number) => {
    const { data } = await supabase.from('analyze').select().eq('id', id);
    return data;
}