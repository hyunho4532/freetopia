import '../../app/styles/@common/items/index.scss'
import '../../app/styles/@media/items/index.scss'

type Props = {
    tipData: any
}

export function TipItems({ tipData }: Props) {
    return (
        <div className='items'>
            { tipData.tip.map((data: any) => (
                <div className='card'>
                    <p className='title'>{data.title}</p>
                    <a href={data.url} target='_blank'>링크 들어가기</a>
                </div>
            ))}
    </div>
    )
}