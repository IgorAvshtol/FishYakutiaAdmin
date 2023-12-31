import styles from '@styles/Orders.module.css';

interface OrderOtherInformation {
  userAddress: string;
  paymentMethod: string;
  comment: string;
}

export const OrderOtherInformation = ({ userAddress, comment, paymentMethod }: OrderOtherInformation) => {
  return (
      <div className={styles.otherInformation}>
        <div>
          <p className={styles.addressTitle}>Адрес доставки:</p>
          <p className={styles.address}>{userAddress}</p>
        </div>
        <div>
          <p className={styles.addressTitle}>Оплата:</p>
          <p className={styles.address}>{paymentMethod}</p>
        </div>
        <div>
          <p className={styles.addressTitle}>Примечание:</p>
          <p className={styles.address}>{comment}</p>
        </div>
      </div>
  );
};
