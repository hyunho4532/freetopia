import '../../app/styles/@common/items/index.scss'

type Props = {
    writeData: any[]
}

export function WriteItems({ writeData }: Props) {
    return (
        <div className='items'>
            { writeData.map((data: any) => (
                <div className='card'>
                    <p>{data.job}</p>
                </div>
            ))}
        </div>
    )
}