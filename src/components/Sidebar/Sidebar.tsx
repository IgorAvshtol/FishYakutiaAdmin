import { SidebarLink } from '@components/Sidebar/SidebarLink';
import { useAppDispatch } from '@store/store';
import { logout } from '@store/reducers/rootReducer';
import styles from '@/styles/Sidebar.module.css';
import logo from '@/assets/logo.svg';
import basket from '@/assets/basket.svg';
import menu from '@/assets/menu.svg';
import settings from '@/assets/settings.svg';
import logoutLogo from '@/assets/logout.svg';

export const Sidebar = () => {
  const dispatch = useAppDispatch();

  const onLogoutBtnClick = () => {
    dispatch(logout());
  };

  return (
      <div className={styles.sidebarBlock}>
        <img src={logo} alt='logo'/>
        <div className={styles.linksBlock}>
          <SidebarLink href='/orders' text='Заказы' logoUrl={basket}/>
          <SidebarLink href='/menu' text='Меню' logoUrl={menu}/>
          <SidebarLink href='/settings' text='Настройки' logoUrl={settings}/>
        </div>
        <button className={styles.logoutBtn} onClick={onLogoutBtnClick}>
          <img src={logoutLogo} alt='logout'/>
          <p>Выйти</p>
        </button>
      </div>
  );
};
