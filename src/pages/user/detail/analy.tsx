import { useSelectAnalyzeFindById } from '@/features/service/select';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import 'styles@/@common/pages/index.scss';
import 'styles@/@media/pages/index.scss';

/** 일과 분석 관련 상세 페이지 */
export default function Analy() {

    const router = useRouter();
    const [_detailData, _setDetailData] = useState<any[]>([]);

    useMemo(() => {
        useSelectAnalyzeFindById(parseInt(router.query.id as string))
            .then(response => {
                _setDetailData(response!);
            })
    }, [_detailData]);

    return (
        <>
            <Head>
                <title>프리토피아 | 일과분석</title>
                <link rel='icon' href='/logo.png' />
            </Head>
            <div className='body'>
                <div className="content">

                    { _detailData && _detailData.map((data: any) => (
                        <div>
                            <h3 className='title'>사용자를 조회했어요!</h3>

                            <div className='info'>
                                <img src={data.profileurl} />
                                <div className='col'>
                                    <p>{data.name}</p>
                                    <p>{data.currentdate}</p>
                                </div>
                            </div>

                            <div className="first">
                                <p>1. 상태 조회하기</p>
                                <p>{data.status}</p>
                            </div>

                            <div className="second">
                                <p>2. 오늘의 활동 내역</p>
                                <p>{data.todayactivity}</p>
                            </div>

                            <div className='third'>
                                <p>3. 오늘 완료한 내역</p>
                                <p>{data.todaywork}</p>
                            </div>

                            <div className='four'>
                                <p>4. 내일 계획 일정</p>
                                <p>{data.tomowork}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}