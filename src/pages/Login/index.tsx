import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@store/store';
import { getCurrentUser } from '@store/selectors';
import { LoginForm } from '@components/LoginForm';
import styles from '@/styles/LoginPage.module.css';

export const Login = () => {
  const currentUser = useAppSelector(getCurrentUser);

  if (currentUser) return <Navigate to='/orders'/>;

  return (
      <div className={styles.main}>
        <LoginForm/>
      </div>
  );
};
