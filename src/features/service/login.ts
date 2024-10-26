/**
 * 로그인 기능이나 비밀번호 일치 여부 등 유효성 검사를 작성한다.
 * 비밀번호의 작성 규칙은 영문, 숫자, 특수문자 2종류 이상을 조합하여 최소 10자리 이상 또는 3종류 이상을 조합한다.
 */

import { supabase } from "../../../supabase.config"

/** 로그인 모달 창에서 카카오 로그인, 구글 로그인을 클릭했을 때 */
export const loginClick = async () => {
    await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
    })

    supabase.auth.startAutoRefresh();
}   