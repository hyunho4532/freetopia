/** 현재 날짜를 조회한다. */
export const currentDate = () => {
    return new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    })
}