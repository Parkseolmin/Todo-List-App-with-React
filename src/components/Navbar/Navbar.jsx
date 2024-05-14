import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FcReddit, FcSurvey } from 'react-icons/fc';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to={'/'} className={styles.navLink}>
        <FcSurvey />
        TODO
      </Link>
      <Link to={'/gpt'} className={styles.navLink}>
        <FcReddit />
        일기작성
      </Link>
    </nav>
  );
}
