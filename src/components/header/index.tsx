import Image from 'next/image'
import '../../app/styles/@common/header/index.scss'
import '../../app/styles/@media/header/index.scss'
import { LoginPopup } from '@/features/service/dialog';
import { useDialogState } from '@/features/store/state';
import { useUserState } from '@/features/store/user';
import { useGetUser } from '@/features/service/common';

type Props = {
    userData: {
        id: string;
        email: string;
        name: string;
    }
}

export function Header({ userData }: Props) {

    const loginState = useDialogState((state: any) => state.login);

    return (
        <div className="parent">
            <header className="header">
                <div className="logo">
                    <Image className='img' src="/logo.png" width={50} height={50} alt={''} />
                </div>
                <div className="gnb">
                    { userData.id != '' ? <p>사용자</p> : <p onClick={() => LoginPopup(loginState)}>로그인</p> }
                    <p>작성함</p>
                    <p>분석함</p>
                </div>
                <div className="profile">
                </div>
            </header>
        </div>
    )
}