import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/store';
import { getOrders } from '@store/reducers/ordersReducer';
import { getOrdersSelector } from '@store/selectors';
import styles from '@styles/Orders.module.css';
import { Order } from '@components/Order';

export const Orders = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(getOrdersSelector);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  if (!orders.length) return <p>Loading...</p>

  return (
      <div className={styles.ordersBlock}>
        <p className={styles.title}>Заказы</p>
        <Order orders={orders}/>
      </div>
  );
};
