import { create } from "zustand";

/**
 * 모든 사용자와 관련된 코드는 여기에 작성한다.
**/
export const useUserState = create((set: any) => ({
    id: '',
    email: '',
    name: '',
    setUserData: (id: string, email: string, name: string) => set({
        id: id,
        email: email,
        name: name
    })
}))