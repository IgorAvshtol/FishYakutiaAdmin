import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store/store';
import { toggleTab } from '@store/reducers/rootReducer';
import { Sidebar } from '@components/Sidebar/Sidebar';
import { Orders } from '@pages/Orders';
import { Menu } from '@pages/Menu';
import { Settings } from '@pages/Settings';
import { Tabs } from '@/interfaces';
import styles from '@/styles/Home.module.css';

export const Home = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { currentUser, activeTab } = useAppSelector(state => state.root);

  useEffect(() => {
    dispatch(toggleTab(pathname as Tabs));
  }, [dispatch, pathname]);

  if (!currentUser) return <Navigate to='/login'/>;

  return (
      <div className={styles.homeBlock}>
        <Sidebar/>
        {activeTab === Tabs.ORDERS && <Orders/>}
        {activeTab === Tabs.MENU && <Menu/>}
        {activeTab === Tabs.SETTINGS && <Settings/>}
      </div>
  );
};
