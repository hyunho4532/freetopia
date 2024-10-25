import Image from 'next/image'
import '../../app/styles/@common/header/index.scss'
import '../../app/styles/@media/header/index.scss'
import { LoginPopup } from '@/features/service/dialog';
import { dialogState } from '@/features/store/state';

export function Header() {

    const loginState = dialogState((state: any) => state.login);

    return (
        <div className="parent">
            <header className="header">
                <div className="logo">
                    <Image className='img' src="/logo.png" width={50} height={50} alt={''} />
                </div>
                <div className="gnb">
                    <p onClick={() => LoginPopup(loginState)}>로그인</p>
                    <p>작성함</p>
                    <p>분석함</p>
                </div>
                <div className="profile">
                </div>
            </header>
        </div>
    )
}