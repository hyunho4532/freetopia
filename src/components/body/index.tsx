import { useSelectAnalyze, useSelectWrite } from '@/features/service/select'
import 'styles@/@common/body/index.scss'
import 'styles@/@media/body/index.scss'
import { useEffect, useState } from 'react'
import { WriteItems } from '../items/writeItem';
import { TipItems } from '../items/tipItem';
import data from '../../../schema/data.json';
import { FritterItems } from '../items/fritterItem';
import { useFetchResize } from '@/shared/ui-kit/resize';
import { Swipers } from '../swiper';
import { useFetchBody } from '@/features/store/common/write';
import { AnalyzeItems } from 'components@/items/analyzeItem';

export function Body() {

    const {  _data, _setData } = useFetchBody();

    useEffect(() => {
        useSelectWrite()
            .then(response => {
                _setData({ writeData: response! });
            })

        useSelectAnalyze()
            .then(response => {
                _setData({ analyzeData: response! });
            })

        useFetchResize(_setData);
    }, []);

    return (
        <div className="body">
            <div className="content">
                <div className="pagination">
                    { _data.isMobile ? 
                        <div className='mobile'>
                            <p>프리터족이란?</p>
                            <FritterItems fritterData={data.swiper} />
                        </div> :
                        <Swipers data={data.swiper} />
                    }
                </div>

                <div className="first">
                    <p>관련 정보 수집</p>
                    <TipItems tipData={data.tip} />
                </div>

                <div className="second">
                    <p>현재의 일상을 개선하기 - 사용자 수집</p>
                    <WriteItems data={_data.writeData} />
                </div>

                <div className='third'>
                    <p>사용자들의 하루 일과들을 분석했어요!</p>
                    <AnalyzeItems data={_data.analyzeData} />
                </div>
            </div>
        </div>
    )
}