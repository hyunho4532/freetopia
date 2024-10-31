import gsap from "gsap";
import { MutableRefObject } from "react";

/** 마우스 영역이 컴포넌트 안쪽에 있을 때 */
export const handleMouseOver = (index: number, refs: MutableRefObject<HTMLDivElement[]>) => {
    gsap.to(refs.current[index], {
        opacity: 0
    })
}

/** 마우스 영역이 컴포넌트 바깥에 있을 때 */
export const handleMouseOut = (index: number, refs: MutableRefObject<HTMLDivElement[]>) => {
    gsap.to(refs.current[index], {
        opacity: 1
    })
}