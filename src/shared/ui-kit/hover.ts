import gsap from "gsap";
import { MutableRefObject } from "react";

/** 마우스 영역이 컴포넌트 안쪽에 있을 때 */
export const handleMouseOver = (
    x: number,
    y: number,
    index: number, 
    refs: MutableRefObject<HTMLDivElement[]>, 
    scale: number
) => {
    gsap.to(refs.current[index], {
        x: x,
        y: y,
        scale: scale
    })
}

/** 마우스 영역이 컴포넌트 바깥에 있을 때 */
export const handleMouseOut = (
    x: number,
    y: number,
    index: number, 
    refs: MutableRefObject<HTMLDivElement[]>, 
    scale: number
) => {
    gsap.to(refs.current[index], {
        x: x,
        y: y,
        scale: scale
    })
}