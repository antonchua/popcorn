import styles from './main.module.scss'

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.box}>box</div>
      <div className={styles.box}>
        <div className={styles.summary}>
          <h3>movies you watched</h3>
          <ul>
            <li>0 movies</li>
            <li>0</li>
            <li>0</li>
            <li>0 min</li>
          </ul>
        </div>
      </div>
    </main>
  )
}