import BestStuffCard from "../BestStuffCard";
import styles from "./BestStuff.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useRef, useState } from "react";

const Index = () => {
    const arrowLeftIcon = "/images/bestStuff/arrowLeft.svg";
    const arrowRightIcon = "/images/bestStuff/arrowRight.svg";
    const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(1)

    const nextSlideHandler = () => {
        if (currentSlide > 1) {
            setCurrentSlide((prevState) => prevState - 1)
            swiperRef.current.slidePrev()
        }

    }

    const prevSlideHandler = () => {
        if (currentSlide < 3) {
            setCurrentSlide((prevState) => prevState + 1);
            swiperRef.current.slideNext();
        }
    }

    return (
        <div className={styles.stuff}>
            <div className={styles.stuff__left}>
                <h2>Найгарячіші товари</h2>
                <div className={styles.stuff__actions}>
                    <span>0{currentSlide}/03</span>
                    <div className={styles.stuff__buttons}>
                        <img onClick={nextSlideHandler} src={arrowLeftIcon} alt="arrow Left" />
                        <img onClick={prevSlideHandler} src={arrowRightIcon} alt="arrow Right" />
                    </div>
                </div>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 1000 }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                        1400: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 3, 
                        },
                        1000: {
                            slidesPerView: 2, 
                        },
                    }}
                className="mySwiper"
            >
                <SwiperSlide><BestStuffCard /></SwiperSlide>
                <SwiperSlide><BestStuffCard /></SwiperSlide>
                <SwiperSlide><BestStuffCard /></SwiperSlide>
                <SwiperSlide><BestStuffCard /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Index;
