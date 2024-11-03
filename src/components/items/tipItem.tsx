import { useEffect } from 'react'
import '../../app/styles/@common/items/index.scss'
import '../../app/styles/@media/items/index.scss'
import { useFetchMouseWheelResize } from '@/shared/ui-kit/resize'

type Props = {
    tipData: any
}

/** 프리터족에 관한 관련 정보 수집 아이템 */
export function TipItems({ tipData }: Props) {

    useEffect(() => {
        useFetchMouseWheelResize(document.getElementById('items'));
    })

    return (
        <div id='items' className='items'>
            { tipData.map((data: any) => (
                <div className='card'>
                    <p className='title'>{data.title.substring(0, 14)}...</p>
                    <p className='link' onClick={() => window.open(data.url, '_blank')}>링크 들어가기 👉</p>
                    <img className='img' src={data.image} />
                </div>
            ))}
        </div>
    )
}