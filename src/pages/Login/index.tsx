import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@store/store';
import { LoginForm } from '@components/LoginForm';
import styles from '@/styles/LoginPage.module.css';

export const Login = () => {
  const { currentUser } = useAppSelector(state => state.root);

  if (currentUser) return <Navigate to='/home'/>;

  return (
      <div className={styles.main}>
        <LoginForm/>
      </div>
  );
};
