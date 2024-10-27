import { LoginDialog } from "@/components/dialog/login"
import { WriteDialog } from "@/components/dialog/write"

type Props = {
    login: boolean,
    write: boolean
}

export function SetUpDialog({ login, write }: Props) {

    const initDialog = () => {
        if (login) {
            return <LoginDialog popup={login} />
        }
        else if (write) {
            return <WriteDialog popup={write} />
        }
    }

    return (
        <>
            { initDialog() }
        </>
    )
}