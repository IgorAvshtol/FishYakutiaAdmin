import { FaSort } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { SortField, SortOrder } from '@/interfaces';
import styles from '@styles/Products.module.css';

interface ProductsTableTitle {
  sortOrder: SortOrder;
  setSortField: (value: SortField) => void;
  setSortOrder: (value: SortOrder) => void;
}

export const ProductsTableTitle = ({ sortOrder, setSortField, setSortOrder }: ProductsTableTitle) => {

  const onSortBtnClick = (sortField: SortField) => {
    setSortField(sortField);
    setSortOrder(sortOrder === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC);
  };

  return (
      <div className={styles.productsTableTitleBlock}>
        <div className={styles.nameProductBlock}>
          <input type='checkbox'/>
          <p>Наименование</p>
          <FaSort onClick={() => onSortBtnClick(SortField.NAME)}/>
        </div>
        <div className={styles.categoryProductBlock}>
          <p>Категория</p>
          <FaSort onClick={() => onSortBtnClick(SortField.CATEGORYID)}/>
        </div>
        <div className={styles.priceProductBlock}>
          <p>Цена</p>
          <FaSort onClick={() => onSortBtnClick(SortField.PRICE)}/>
        </div>
        <div className={styles.editBlock}>
          <MdDelete className={styles.deleteIcon}/>
        </div>
      </div>
  );
};
