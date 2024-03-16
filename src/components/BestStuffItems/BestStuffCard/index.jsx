import styles from './BestStuffCard.module.scss';

const Index = () => {
  return (
    <div className={styles.card}>
      <img className={styles.card__image} src="/images/bestStuff/stuffCardImage.png" alt="best stuff image" /><div></div>
      <h2 className={styles.card__title}>Майка для бодібілдерів</h2>
      <p className={styles.card__for}>Для жінок</p>
      <h3 className={styles.card__colors}>6 кольорів</h3>
      <span className={styles.card__price}>1100 грн.</span>
    </div>
  );
};

export default Index;
