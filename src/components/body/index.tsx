import { useSelectWrite } from '@/features/service/select'
import '../../app/styles/@common/body/index.scss'
import '../../app/styles/@media/body/index.scss'
import { useEffect, useState } from 'react'
import { WriteItems } from '../items/writeItem';
import { TipItems } from '../items/tipItem';
import data from '../../../schema/data.json';
import { FritterItems } from '../items/FritterItem';
import { useFetchResize } from '@/shared/ui-kit/resize';
import { SwiperItems } from '../swiper/SwiperItem';

export function Body() {

    const [isMoblie, setIsMobile] = useState<boolean>(false);
    const [writeData, setWriteData] = useState<any[]>([]);

    useEffect(() => {
        useSelectWrite()
            .then(response => {
                setWriteData(response!);
            })

        useFetchResize(setIsMobile);
    }, []);

    return (
        <div className="body">
            <div className="content">
                <div className="pagination">
                    { isMoblie ? 
                        <div className='mobile'>
                            <p>프리터족이란?</p>
                            <FritterItems fritterData={data.swiper} />
                        </div> :
                        <SwiperItems data={data.swiper} />
                    }
                </div>

                <div className="first">
                    <p>관련 정보 수집</p>
                    <TipItems tipData={data.tip} />
                </div>

                <div className="second">
                    <p>현재의 일상을 개선하기 - 사용자 수집</p>
                    <WriteItems writeData={writeData} />
                </div>
            </div>
        </div>
    )
}