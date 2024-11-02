export interface Database {
    public: {
        Tables: {
            fritters: {
                Row: {
                    id: number,
                    /** 프리토피아에 쓰일 닉네임 */
                    name: string,
                    /** 직장인인지 프리터족인지 학생인지 선택. */
                    job: string,
                }
                Insert: {
                    id: never,
                    name: string,
                    job: string
                }
                Update: {
                    id: never,
                    name: string,
                    job: string
                }
            }
        }
    }
}