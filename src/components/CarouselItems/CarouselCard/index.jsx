import styles from "./CarouselCard.module.scss";

const Index = () => {
    return (
        <div className={styles.carousel__container}>
            <div className={styles.carousel__content}>
                <div className={styles.carousel__left}>
                    <h2 className={styles.carousel__left__title}>
                        <span>Швидше.</span>
                        <span>Вище.</span>
                        <span>Сильніше.</span>
                    </h2>
                    <p className={styles.carousel__left__subtitle}>Разом із Nike</p>
                </div>
                <div className={styles.carousel__right}>
                    <h2 className={styles.carousel__right__title}>Знижки до 40%</h2>
                    <p className={styles.carousel__right__subtitle}>
                        Залишився лише тиждень
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Index;
