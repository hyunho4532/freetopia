
export default function Home() {
  return (
    <header>
      <div className="flex justify-around">
        <h3 className="pl-4 pt-4">프리토피아</h3>
        <ul className="flex pl-4 pt-4">
          <a href="#">로그인</a>
          <a href="#" className="pl-16">글쓰기</a>
        </ul>
      </div>
    </header>
  );
}