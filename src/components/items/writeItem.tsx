import '../../app/styles/@common/items/index.scss'
import '../../app/styles/@media/items/index.scss'

type Props = {
    writeData: any[]
}

export function WriteItems({ writeData }: Props) {
    return (
        <div className='items'>
            { writeData.map((data: any) => (
                <div className='card'>
                    <p className='job'>📚: {data.job}</p>
                    <p className='work'>🥇: {data.work}</p>
                    <p className='license'>📄: {data.license}</p>
                </div>
            ))}
        </div>
    )
}