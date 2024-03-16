import styles from "./ReviewCard.module.scss";

const Index = () => {
    return (
        <div className={styles.card}>
            <div className={styles.card__left}>
                <img src="/images/reviews/Mask.svg" alt="Mask" />
                <div className={styles.card__rating}>
                    <img src="/images/reviews/rating.png" alt="rating" />
                    <p>Жора Ремінгтон</p>
                </div>
            </div>
            <div className={styles.card__right}>
                <p>
                    Дуже задоволений якістю обслуговування і самою продукцією. Купували
                    термобілизну у подарунок, друзі...
                </p>
            </div>
        </div>
    );
};

export default Index;
