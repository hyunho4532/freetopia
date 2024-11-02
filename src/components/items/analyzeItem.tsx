import { useRef } from 'react'
import '../../app/styles/@common/items/index.scss'
import '../../app/styles/@media/items/index.scss'
import { handleMouseOut, handleMouseOver } from '@/shared/ui-kit/hover'

type Props = {
    data: any
}

export function AnalyzeItems({ data }: Props) {

    const statusRef = useRef<HTMLDivElement[]>([]);

    return (
        <div className='items'>
            { data.map((data: any, index: number) => (
                <div className='card'>
                    <div
                        ref={(el: any) => (statusRef.current[index] = el!)}
                        onMouseOver={() => handleMouseOver(15, index, statusRef, 1.15)}
                        onMouseLeave={() => handleMouseOut(0, index, statusRef, 1)}>
                        <p className='status'>상태: {data.status}</p>
                    </div>
                    <p className='todayactivity'>오늘 활동: {data.todayactivity}</p>
                    <p className='todaywork'>🥇: {data.todaywork}</p>
                    <p className='tomowork'>내일 해야 할 일은? {data.tomowork}</p>
                </div>
            ))}
        </div>
    )
}