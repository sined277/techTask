import styles from './Catalog.module.scss';

const Index = () => {
  return (
    <div className={styles.catalog}>
      <div className={styles.catalog__left}>
        <h2 className={styles.catalog__title}>Ми знаємо, що сподобається вашим “великим” друзям!</h2>
        <p className={styles.catalog__subtitle}>Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію термобілизни “Big warm”</p>
        <button className={styles.catalog__button}>До каталогу</button>
      </div>
      <div className={styles.catalog__right}>
        <img src="/images/catalog/catalogImage.png" alt="catalog image" />
      </div>
    </div>
  );
};

export default Index;
