import './index.scss'

export function Header() {
    return (
        <div className="parent">
            <header className="header">
                <div className="logo">
                    <p>프리토피아</p>
                </div>
                <div className="gnb">
                    <a href="#">홈</a>
                    <a href="#">로그인</a>
                    <a href="#">작성</a>
                </div>
                <div className="profile">
                    <img src="" />
                </div>
            </header>
        </div>
    )
}