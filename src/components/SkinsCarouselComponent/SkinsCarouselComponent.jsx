import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

const SkinsCarousel = ({ carouselChamp }) => {
    return (
        <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true}
            modules={[Pagination, EffectCards]}
            pagination={true}
        >
            {
                carouselChamp.skins.map(skin => {
                    return (
                        <SwiperSlide key={skin}>
                            <img className="d-block w-100" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${carouselChamp.id}_${skin}.jpg`} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default SkinsCarousel