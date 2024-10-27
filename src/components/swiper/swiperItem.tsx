import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
    data: any
}

export function SwiperItems({ data }: Props) {
    return (
        <Swiper
            navigation
            pagination={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            modules={[Navigation, Pagination, Autoplay]}>
            <div className="swiper">
                { data.map((data: any) => (
                    <SwiperSlide className="slide">
                        <img onClick={() => window.open(data.url, '_blank')} src={data.title} />
                    </SwiperSlide>
                ))}
            </div>
        </Swiper>
    )
}