import Image from 'next/image'
import '../../app/styles/@common/header/index.scss'
import '../../app/styles/@media/header/index.scss'
import { LoginPopup, WritePopup } from '@/features/service/dialog';
import { useDialogState } from '@/features/store/state';
import { writeClick } from '@/features/service/write';

type Props = {
    userData: {
        id: string;
        email: string;
        name: string;
    }
}

export function Header({ userData }: Props) {

    const dialogState = useDialogState((state: any) => state);

    return (
        <div className="parent">
            <header className="header">
                <div className="logo">
                    <Image className='img' src="/logo.png" width={50} height={50} alt={''} />
                </div>
                <div className="gnb">
                    { userData.id != '' ? <p>사용자</p> : <p onClick={() => LoginPopup(dialogState.login)}>로그인</p> }
                    <p onClick={() => WritePopup(dialogState.write)}>작성함</p>
                    <p>분석함</p>
                </div>
                <div className="profile">
                </div>
            </header>
        </div>
    )
}