import styles from "./FooterDown.module.scss"; 

const Index = () => {
  return (
    <div className={styles.footer__down}>
      <ul className={styles.footer__list}>
        <li className={styles.footer__item}>новинки</li>
        <li className={styles.footer__item}>чоловіки</li>
        <li className={styles.footer__item}>жінки</li>
        <li className={styles.footer__item}>аксесуари</li>
        <li className={styles.footer__item}>акції</li>
      </ul>
      <p className={styles.footer__rights}>© 2022 — 2023 IGNAT. Усі права захищені.</p>
    </div>
  );
};

export default Index;
