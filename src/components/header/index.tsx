import Image from 'next/image'
import '../../app/styles/@common/header/index.scss'
import '../../app/styles/@media/header/index.scss'
import { AnalyzePopup, LoginPopup, WritePopup } from '@/features/service/dialog';
import { useDialogState } from '@/features/store/state';
import item from 'schema@/items.json'
import { handleMouseOut, handleMouseOver } from '@/shared/ui-kit/hover';
import { useRef } from 'react';

type Props = {
    userData: {
        id: string;
        email: string;
        name: string;
    }
}

export function Header({ userData }: Props) {

    const dialogState = useDialogState((state: any) => state);
    const headersRef = useRef<HTMLDivElement[]>([]);

    const handleItemClick = (title: any) => {
        if (title === "로그인") {
            LoginPopup(dialogState.login);
        }
        else if (title === "작성함") {
            WritePopup(dialogState.write);
        }
        else if (title === "분석함") {
            AnalyzePopup(dialogState.analyze);
        }
    }

    return (
        <div className="parent">
            <header className="header">
                <div className="logo">
                    <Image className='img' src="/logo.png" width={50} height={50} alt={''} />
                </div>
                <div className="gnb">
                    { item.header.map((data: any, index: number) => (
                        <div
                            ref={(el: any) => (headersRef.current[index] = el!)}
                            onMouseOver={() => handleMouseOver(0, 14, index, headersRef, 1.2)}
                            onMouseLeave={() => handleMouseOut(0, 0, index, headersRef, 1)}>
                            { data.title === "사용자" ? (
                                userData.id != '' ? 
                                    <p key={data.key}>{data.title}</p> :
                                    <p key={data.key}>로그인</p>
                            ) : (
                                <p 
                                    key={data.key}
                                    onClick={() => handleItemClick(data.title)}>{data.title}</p>
                                )}
                        </div>
                    ))}
                </div>
                <div className="profile">
                </div>
            </header>
        </div>
    )
}