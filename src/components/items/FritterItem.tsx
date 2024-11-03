import '../../app/styles/@common/items/index.scss'
import '../../app/styles/@media/items/index.scss'

type Props = {
    fritterData: any
}

/** 프리터족 관련 설명 아이템 */
export function FritterItems({ fritterData }: Props) {
    return (
        <div className='items'>
            { fritterData.map((data: any) => (
                <div className='card'>
                    <img className='img' src={data.title} />
                    <p className='link' onClick={() => window.open(data.url, '_blank')}>링크 들어가기 👉</p>
                </div>
            ))}
        </div>
    )
}