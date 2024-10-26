import { useSelectWrite } from '@/features/service/select'
import '../../app/styles/@common/body/index.scss'
import '../../app/styles/@media/body/index.scss'
import { useEffect, useState } from 'react'
import { WriteItems } from '../items/writeItem';
import tipData from '../../../schema/data.json';
import { TipItems } from '../items/tipItem';

export function Body() {

    const [writeData, setWriteData] = useState<any[]>([]);

    useEffect(() => {
        useSelectWrite()
            .then(response => {
                setWriteData(response!);
            })
    })

    return (
        <div className="body">
            <div className="content">
                <div className="first">
                    <p>관련 정보 수집 - 분석</p>
                    <TipItems tipData={tipData} />
                </div>

                <div className="second">
                    <p>프리터 족으로 살아가는 방법</p>
                    <WriteItems writeData={writeData} />
                </div>
            </div>
        </div>
    )
}