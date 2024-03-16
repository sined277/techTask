import styles from './Contacts.module.scss';

const Index = () => {
  return (
    <div className={styles.contacts}>
      <h2 className={styles.contacts__title}>Спіймай всі акції!</h2>
      <p className={styles.contacts__subtitle}>Підписуйся на Email розсилку і отримуй інформацію про всі акції, які будуть з`влятись у нашому магазині. А у нас їх багато :D</p>
      <div className={styles.contacts__send}>
        <input type="text" placeholder="введіть" />
        <button className={styles.contacts__button}>Підписатись</button>
      </div>
    </div>
  );
}

export default Index;
