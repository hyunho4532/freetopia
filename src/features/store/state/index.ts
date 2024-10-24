import { create } from "zustand";

/**
 * 모든 상태와 관련한 코드는 여기다가 작성한다.
 * 1. Dialog State (1-1. 팝업이 되어 있는가? 1-2. 팝업이 안되어 있는가?)
 */
export const dialogState = create((set: any) => ({
    /** 1-3. 로그인 관련 팝업 창, 헤더에서 로그인 버튼을 클릭했을 때 */
    login: false,
    setLogin: (isOpen: boolean) => set({ login: isOpen })
}))