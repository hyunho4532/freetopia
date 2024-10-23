import Image from 'next/image'
import './index.scss'
import '../../app/styles/@media/index.scss'

export function Header() {
    return (
        <div className="parent">
            <header className="header">
                <div className="logo">
                    <Image className='img' src="/logo.png" width={50} height={50} alt={''} />
                </div>
                <div className="gnb">
                    <a href="#">로그인</a>
                    <a href="#">작성함</a>
                    <a href="#">분석함</a>
                </div>
                <div className="profile">
                    <img src="" />
                </div>
            </header>
        </div>
    )
}