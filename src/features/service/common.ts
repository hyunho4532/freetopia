import { useMemo } from "react";
import { supabase } from "../../../supabase.config";

export const useFetchUser = () => {
    const init = useMemo(async () => {
        const { data, error } = await supabase.auth.getUser();

        if (error) {
            console.log("현재 등록되지 않는 사용자입니다.");
        } else {
            localStorage.setItem('user', JSON.stringify({
                id: data.user.id,
                email: data.user.email,
                name: data.user.user_metadata.name
            }))
            return data.user
        }
    }, []);

    return init;
}