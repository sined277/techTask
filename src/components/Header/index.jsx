import styles from './Header.module.scss';

const Index = () => {
    return (
        <div className={styles.header__container}>
            <div className={styles.header__top}>
                <div className={styles.header__top__left}>
                    <span className={styles.header__top__left__phone}>098 900 09 09</span>
                    <h2 className={styles.header__top__left__help}>Допомога</h2>
                </div>
                <div className={styles.header__top__right}>
                    <h2 className={styles.header__top__right__signup}>Увійти / Зареєструватися</h2>
                </div>
            </div>
            <div className={styles.header__down}>
                <div className={styles.header__down__left}>
                    <img src="/images/header/LogoHeader.svg" alt="Logo Header" />
                    <nav>
                        <ul>
                            <li className={styles.active}>новинки</li>
                            <li className={styles.default}>чоловіки</li>
                            <li className={styles.default}>жінки</li>
                            <li className={styles.default}>аксесуари</li>
                            <li className={styles.default}>акції</li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.header__down__right}>
                    <div className={styles.header__down__right__search}>
                        <img src="/images/header/searchHeader.svg" alt="search" />
                        <input type="text" />
                    </div>
                    <div className={styles.header__down__right__buttons}>
                        <img src="/images/header/heart.svg" alt="" />
                        <img src="/images/header/bag.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
