import { useEffect, useRef } from 'react'
import '../../app/styles/@common/items/index.scss'
import '../../app/styles/@media/items/index.scss'
import { handleMouseOut, handleMouseOver } from '@/shared/ui-kit/hover'

type Props = {
    data: any
}

/** 사용자 수집 아이템 */
export function WriteItems({ data }: Props) {

    const jobRefs = useRef<HTMLDivElement[]>([]);

    return (
        <div className='items'>
            { data.map((data: any, index: number) => (
                <div key={index} className='card'>
                    <div
                        ref={(el: any) => (jobRefs.current[index] = el!)}
                        className='jobs' 
                        onMouseOver={() => handleMouseOver(30, 0, index, jobRefs, 1.2)}
                        onMouseOut={() => handleMouseOut(0, 0, index, jobRefs, 1)}>
                        <p
                           id='job'
                           className='job'>📚: {data.job}
                        </p>
                    </div>
                    <p className='work'>🥇: {data.work}</p>
                    <p className='license'>📄: {data.license}</p>
                </div>
            ))}
        </div>
    )
}