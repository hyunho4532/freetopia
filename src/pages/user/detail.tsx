import { useRouter } from 'next/router';
import 'styles@/@common/pages/index.scss';
import 'styles@/@media/pages/index.scss';

export default function Detail() {

    const router = useRouter();
    const { status, activity, work, tomowork } = router.query;

    return (
        <div className='body'>
            <div className="content">
                <div className="first">
                    <p>1. 상태 조회하기</p>
                    <p>{status}</p>
                </div>

                <div className="second">
                    <p>2. 오늘의 활동 내역</p>
                    <p>{activity}</p>
                </div>

                <div className='third'>
                    <p>3. 오늘 완료한 내역</p>
                    <p>{work}</p>
                </div>

                <div className='four'>
                    <p>4. 내일 계획 일정</p>
                    <p>{tomowork}</p>
                </div>
            </div>
        </div>
    )
}