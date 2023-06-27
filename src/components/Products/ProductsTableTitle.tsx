import styles from '@styles/Products.module.css';
import { FaSort } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

export const ProductsTableTitle = () => {
  return (
      <div className={styles.productsTableTitleBlock}>
        <div className={styles.nameProductBlock}>
          <input type='checkbox'/>
          <p>Наименование</p>
          <FaSort/>
        </div>
        <div className={styles.categoryProductBlock}>
          <p>Категория</p>
          <FaSort/>
        </div>
        <div className={styles.priceProductBlock}>
          <p>Цена</p>
          <FaSort/>
        </div>
        <div className={styles.editBlock}>
          <MdDelete className={styles.deleteIcon}/>
        </div>
      </div>
  );
};
