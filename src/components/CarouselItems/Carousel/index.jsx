import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import CarouselCard from '../CarouselCard'

const ArrowNext = ({onClickHandler, label}) => (
    <button
        type="button"
        onClick={onClickHandler}
        title={label ? "Next" : undefined}
        style={{
            position: "absolute",
            zIndex: 2,
            top: "calc(50% - 15px)",
            backgroundColor: "transparent",
            border: "none",
            width: 34,
            height: 64,
            cursor: "pointer",
            right: "100px",
        }}
    >
        <img src="/images/carousel/ArrowRight.svg" alt="Arrow Right" />
    </button>
);

const ArrowPrev = ({onClickHandler, label}) => {
    return (
        <button
            type="button"
            onClick={onClickHandler}
            title={label ? "Previous" : undefined}
            style={{
                position: "absolute",
                zIndex: 2,
                top: "calc(50% - 15px)",
                backgroundColor: "transparent",
                border: "none",
                width: 34,
                height: 64,
                cursor: "pointer",
                left: "100px",
            }}
        >
            <img src="../../../src/images/carousel/ArrowLeft.svg" alt="Arrow Left" />
        </button>
    );
};


const Index = () => {
    return (
        <Carousel
            infiniteLoop={true}
            autoPlay={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            renderArrowPrev={(onClickHandler, label) => <ArrowPrev onClickHandler={onClickHandler} label={label} />}
            renderArrowNext={(onClickHandler, label) => <ArrowNext onClickHandler={onClickHandler} label={label} />}
        >
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
        </Carousel>
    );
};

export default Index;
