import { create } from "zustand";

/**
 * 모든 상태와 관련된 코드는 여기에 작성한다.
 * 1. Dialog State (1-1. 팝업이 되어 있는가? 1-2. 팝업이 안되어 있는가?)
 */
export const useDialogState = create((set: any) => ({
    /** 1-3. 로그인 관련 팝업 창, 헤더에서 로그인 버튼을 클릭했을 때 */
    login: false,

    /** 1-4. 작성함 관련 팝업 창, 헤더에서 작성함 버튼을 클릭했을 때 */
    write: false,

    /** 1-5. 분석함 관련 팝업 창, 헤더에서 분석함 버튼을 클릭했을 때 */
    analyze: false,

    setLogin: (isLogin: boolean) => set({ login: isLogin }),
    setWrite: (isWrite: boolean) => set({ write: isWrite }),
    setAnalyze: (isAnalyze: boolean) => set({ analyze: isAnalyze })
}))