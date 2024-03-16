import styles from "./Footer.module.scss";
import FooterDown from '../FooterDown'

const Index = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__top}>
                <ul className={styles.footer__list}>
                    <li className={styles.footer__title}>Контакт - центр</li>
                    <li className={styles.footer__item}>098 900 09 09</li>
                    <li className={styles.footer__item}>Пн - Пт 09:00 - 21:00</li>
                    <li className={styles.footer__item}>Пн - Пт 09:00 - 21:00</li>
                </ul>
                <ul className={styles.footer__list}>
                    <li className={styles.footer__item}>
                        <img src="/images/footer/insta.svg" alt="insta" />
                    </li>
                    <li className={styles.footer__item}>
                        <img src="/images/footer/viber.svg" alt="viber" />
                    </li>
                    <li className={styles.footer__item}>
                        <img src="/images/footer/telegram.svg" alt="telegram" />
                    </li>
                </ul>
                <ul className={styles.footer__list}>
                    <li className={styles.footer__title}>Покупцям</li>
                    <li className={styles.footer__item}>Оплата і доставка</li>
                    <li className={styles.footer__item}>Повернення</li>
                    <li className={styles.footer__item}>Питання та відповіді</li>
                </ul>
                <ul className={styles.footer__list}>
                    <li className={styles.footer__title}>Особистий кабінет</li>
                    <li className={styles.footer__item}>Мої дані</li>
                    <li className={styles.footer__item}>Історія замовлень</li>
                    <li className={styles.footer__item}>Улюблені</li>
                    <li className={styles.footer__item}>Розсилки</li>
                </ul>
                <ul className={styles.footer__list}>
                    <li className={styles.footer__title}>Про компанію</li>
                    <li className={styles.footer__item}>Про нас</li>
                    <li className={styles.footer__item}>Новини</li>
                    <li className={styles.footer__item}>Стати партнером</li>
                    <li className={styles.footer__item}>Угода користувача</li>
                </ul>
            </div>
            <FooterDown />
        </div>
    );
};

export default Index;
