import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>Code
          <span>Lab</span>
        </div>
        <input 
          type="text"
          placeholder='Pesquisar no blog'
        >
        </input>
      </header>

      <div className={styles.main}>
        <div className={styles.box}>1</div>
        <div className={styles.box}>2</div>
        <div className={styles.box}>3</div>
      </div>

    </div>
  );
}
