import styles from "./Review.module.scss";
import ReviewCard from "../ReviewCard";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Index = () => {
    const arrowLeftIcon = "/images/bestStuff/arrowLeft.svg";
    const arrowRightIcon = "/images/bestStuff/arrowRight.svg";
    const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(1);

    const nextSlideHandler = () => {
        if (currentSlide > 1) {
            setCurrentSlide((prevState) => prevState - 1);
            swiperRef.current.slidePrev();
        }
    };

    const prevSlideHandler = () => {
        if (currentSlide < 3) {
            setCurrentSlide((prevState) => prevState + 1);
            swiperRef.current.slideNext();
        }
    };
    return (
        <div className={styles.review}>
            <div className={styles.review__left}>
                <h2>Відгуги наших клієнтів</h2>
                <div className={styles.review__actions}>
                    <span>0{currentSlide}/03</span>
                    <div className={styles.review__buttons}>
                        <img
                            onClick={nextSlideHandler}
                            src={arrowLeftIcon}
                            alt="arrow Left"
                        />
                        <img
                            onClick={prevSlideHandler}
                            src={arrowRightIcon}
                            alt="arrow Right"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.review__right}>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 1000 }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className="mySwiper"
                    breakpoints={{
                        1400: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 3, 
                        },
                        320: {
                            slidesPerView: 1, 
                        },
                    }}
                >
                    <SwiperSlide>
                        <ReviewCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCard />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Index;
