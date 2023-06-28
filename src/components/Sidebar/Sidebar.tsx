import { SlBasket } from 'react-icons/sl';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { RiSettingsLine } from 'react-icons/ri';
import { SidebarLink } from '@components/Sidebar/SidebarLink';
import { useAppDispatch } from '@store/store';
import { logout } from '@store/sagas/actions';
import styles from '@/styles/Sidebar.module.css';
import logo from '@/assets/logo.svg';
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
          <SidebarLink href='/orders' text='Заказы' Icon={SlBasket}/>
          <SidebarLink href='/menu' text='Меню' Icon={HiOutlineClipboardList}/>
          <SidebarLink href='/settings' text='Настройки' Icon={RiSettingsLine}/>
        </div>
        <button className={styles.logoutBtn} onClick={onLogoutBtnClick}>
          <img src={logoutLogo} alt='logout'/>
          <p>Выйти</p>
        </button>
      </div>
  );
};
