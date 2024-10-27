import { Dispatch, SetStateAction, useEffect } from "react";

/** width에 따라 모바일에 보여지는 화면을 조회한다. */
export const useFetchResize = (setIsMobile: Dispatch<SetStateAction<boolean>>) => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 834);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
}