import '../../app/styles/@common/items/index.scss'
import '../../app/styles/@media/items/index.scss'

type Props = {
    data: any
}

export function AnalyzeItems({ data }: Props) {
    return (
        <div className='items'>
            { data.map((data: any) => (
                <div className='card'>
                    <p className='status'>상태: {data.status}</p>
                    <p className='todayactivity'>오늘 활동: {data.todayactivity}</p>
                    <p className='todaywork'>🥇: {data.todaywork}</p>
                    <p className='tomowork'>내일 해야 할 일은? {data.tomowork}</p>
                </div>
            ))}
        </div>
    )
}