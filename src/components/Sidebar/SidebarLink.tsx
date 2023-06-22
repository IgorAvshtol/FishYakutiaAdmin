import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';
import { useAppSelector } from '@store/store';
import styles from '@styles/SidebarLink.module.css';

interface SidebarLink {
  text: string;
  href: string;
  Icon: IconType;
}

export const SidebarLink = ({ text, href, Icon }: SidebarLink) => {
  const { activeTab } = useAppSelector(state => state.root);

  return (
      <Link to={href} className={activeTab === href ? styles.activeLinkBlock : styles.linkBlock}>
        <Icon size={20} color={activeTab === href ? '#ffffff' : '#000000'}/>
        <p className={activeTab === href ? styles.activeLinkText : styles.linkText}>{text}</p>
      </Link>
  );
};
