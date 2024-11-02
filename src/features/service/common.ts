import { useMemo } from "react";
import { supabase } from "../../../supabase.config";
import { useUserState } from "../store/user";

export const useFetchUser = () => {
    useMemo(async () => {
        const { data, error } = await supabase.auth.getUser();

        if (error) {
            console.log("현재 등록되지 않는 사용자입니다.");
        } else {
            /** zustand 라이브러리를 이용하여 사용자를 상태 관리한다. */
            useUserState.setState({
                id: data.user.id,
                email: data.user.email,
                name: data.user.user_metadata.name
            });

            /** 상태 관리 등록 후, 스토리지에 사용자를 담는다. */
            localStorage.setItem('user', JSON.stringify({
                id: data.user.id,
                email: data.user.email,
                name: data.user.user_metadata.name
            }));
        }
    }, []);

    return useUserState.getState();
};

export const useGetUser = () => {
    const userState = useUserState((state) => state);
    return userState;
};