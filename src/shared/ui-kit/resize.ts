import { Dispatch, SetStateAction, useEffect } from "react";

/** width에 따라 모바일에 보여지는 화면을 조회한다. */
export const useFetchResize = (setIsMobile: Dispatch<SetStateAction<boolean>>) => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 834);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
}

/** 스크롤할 때, 마우스 휠로도 스크롤 할 수 있게 만든다. */
export const useFetchMouseWheelResize = (elementId: any) => {
    const onWheel = (e: WheelEvent) => {
        if (elementId.contains(e.target as Node)) {
            if (e.deltaY > 0) {
                elementId.scrollLeft += 100;
            } else {
                elementId.scrollLeft -= 100;
            }

            e.preventDefault();
        }
    }

    window.addEventListener('wheel', onWheel);

    return () => window.removeEventListener('wheel', onWheel);
}