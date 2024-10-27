import { useSelectWrite } from '@/features/service/select'
import '../../app/styles/@common/body/index.scss'
import '../../app/styles/@media/body/index.scss'
import { useEffect, useState } from 'react'
import { WriteItems } from '../items/writeItem';
import tipData from '../../../schema/data.json';
import { TipItems } from '../items/tipItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import swiperData from '../../../schema/data.json';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export function Body() {

    const [isMoblie, setIsMobile] = useState<boolean>(false);
    const [writeData, setWriteData] = useState<any[]>([]);

    useEffect(() => {
        useSelectWrite()
            .then(response => {
                setWriteData(response!);
            })

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 834);
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="body">
            <div className="content">
                <div className="pagination">
                    { isMoblie ? 
                        <div className='mobile'>
                            <p>프리터족이란?</p>
                        </div> : 
                        <Swiper
                            navigation
                            pagination={true}
                            modules={[Navigation, Pagination]}>
                            <div className="swiper">
                                { swiperData.swiper.map((data: any) => (
                                    <SwiperSlide className="slide">
                                        <img onClick={() => window.open(data.url, '_blank')} src={data.title} />
                                    </SwiperSlide>
                                ))}
                            </div>
                        </Swiper>
                    }
                </div>

                <div className="first">
                    <p>관련 정보 수집</p>
                    <TipItems tipData={tipData} />
                </div>

                <div className="second">
                    <p>현재의 일상을 개선하기 - 사용자 수집</p>
                    <WriteItems writeData={writeData} />
                </div>
            </div>
        </div>
    )
}