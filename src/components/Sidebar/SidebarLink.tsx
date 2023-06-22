import { Link } from 'react-router-dom';
import styles from '@styles/SidebarLink.module.css';

interface SidebarLink {
  text: string;
  href: string;
  logoUrl: string;
}

export const SidebarLink = ({ text, href, logoUrl }: SidebarLink) => {
  return (
      <Link to={href} className={styles.linkBlock}>
        <img src={logoUrl} alt='icon'/>
        <p className={styles.linkText}>{text}</p>
      </Link>
  );
};
