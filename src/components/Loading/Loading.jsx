import styles from './Loading.module.css';

export default function Loading() {
  console.log('로딩 중...');
  return (
    <>
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p className={styles.loadingText}>로딩 중...</p>
      </div>
    </>
  );
}
