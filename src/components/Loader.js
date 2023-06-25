import styles from '@/styles/slug.module.css';

function Loader() {
  return (
    <div className={styles.loading}>
      <div className={styles.opposites}>
        <div className={`${styles.opposite} ${styles.bl}`} />
        <div className={`${styles.opposite} ${styles.tr}`} />
        <div className={`${styles.opposite} ${styles.br}`} />
        <div className={`${styles.opposite} ${styles.tl}`} />
      </div>
    </div>
  );
}
export default Loader;
