import { LoginDialog } from "@/components/dialog/login"
import { AnalyzeDialog, WriteDialog } from "@/components/dialog/write"

/** dialogState에 따라, 다이얼로그를 조회함 (login: 로그인 다이얼로그 조회, write: 작성함 다이얼로그 조회) */
type Props = {
    dialogState: any
}

export function SetUpDialog({ dialogState }: Props) {

    const { write, login, analyze } = dialogState;

    const initDialog = () => {
        if (login) {
            return <LoginDialog popup={login} />
        }
        else if (write) {
            return <WriteDialog popup={write} />
        }
        else if (analyze) {
            return <AnalyzeDialog popup={analyze} />
        }
    }

    return (
        <>
            { initDialog() }
        </>
    )
}