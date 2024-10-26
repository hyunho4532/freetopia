import { useSelectWrite } from '@/features/service/select'
import '../../app/styles/@common/body/index.scss'
import '../../app/styles/@media/body/index.scss'
import { useEffect, useState } from 'react'
import { WriteItems } from '../items/writeItem';

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
                </div>

                <div className="second">
                    <p>프리터 족으로 살아가는 방법</p>
                    <WriteItems writeData={writeData} />
                </div>
            </div>
        </div>
    )
}