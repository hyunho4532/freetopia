import { dialogState } from "../store/state"

/**
 * 다이얼로그 팝업창을 띄우기 위해 여기에 작성한다.
 */
export function LoginPopup(loginState: any) {
    dialogState.getState().setLogin(!loginState);
}