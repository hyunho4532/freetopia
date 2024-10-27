import '../../app/styles/@common/items/index.scss'
import '../../app/styles/@media/items/index.scss'

type Props = {
    analyzeData: any
}

export function AnalyzeItems({ analyzeData }: Props) {
    return (
        <div className='items'>
            { analyzeData.map((data: any) => (
                <div className='card'>
                    <p>{data.status}</p>
                </div>
            ))}
        </div>
    )
}