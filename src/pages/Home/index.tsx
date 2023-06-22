import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@store/store';
import { Sidebar } from '@components/Sidebar/Sidebar';
import styles from '@/styles/Home.module.css';

export const Home = () => {
  const { currentUser } = useAppSelector(state => state.root);

  if (!currentUser) return <Navigate to='/'/>;

  return (
      <div className={styles.homeBlock}>
        <Sidebar/>
        <div>home</div>
      </div>
  );
};
