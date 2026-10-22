import styles from "./IntroLoader.module.scss";

export function IntroLoader() {
  return (
    <div className={styles.introLoader} aria-hidden="true">
      <div className={styles.inner}>
        <span className={styles.label}>Beyond the interface</span>
        <span className={styles.track}><span /></span>
        <span className={styles.index}>01 / 07</span>
      </div>
    </div>
  );
}
