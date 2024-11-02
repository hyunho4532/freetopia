import { useDialogState } from "../store/state"

/**
 * 다이얼로그 팝업창을 띄우기 위해 여기에 작성한다.
 */
// 헤더에 로그인을 클릭했을 때
export function LoginPopup(loginState: any) {
    useDialogState.getState().setLogin(!loginState);
}

// 헤더에 작성함을 클릭했을 때
export function WritePopup(writeState: any) {
    useDialogState.getState().setWrite(!writeState);
}

// 헤더에 분석함을 클릭했을 때
export function AnalyzePopup(analyzeState: any) {
    useDialogState.getState().setAnalyze(!analyzeState);
}