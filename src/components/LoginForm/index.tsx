import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@store/store';
import { login } from '@store/sagas/actions';
import { getLoginError } from '@store/selectors';
import styles from '@/styles/LoginForm.module.css';
import { FormData } from '@/interfaces';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(getLoginError);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // @ts-ignore
    dispatch(login(data));
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formBlock}>
        <h2 className={styles.title}>Вход</h2>
        <input {...register('email', { required: true })} className={styles.input}/>
        {errors.email && <span>This field is required</span>}
        <input {...register('password', { required: true })} className={styles.input}/>
        {errors.password && <span>This field is required</span>}
        <button type='submit' className={styles.loginBtn}>Войти</button>
        <p className={styles.errorMessage}>{error}</p>
      </form>
  );
};
