import { MdDelete } from 'react-icons/md';
import { BiSolidEditAlt } from 'react-icons/bi';
import { Switcher } from '@components/Switcher';
import { themeColors } from '@constants/themeColors';
import styles from '@styles/Product.module.css';
import style from '@styles/MenuPage.module.css';

interface ProductProps {
  name: string;
  price: string;
  category: string;
}

export const Product = ({ name, category, price }: ProductProps) => {
  return (
      <div className={styles.productBlock}>
        <div className={styles.nameProductBlock}>
          <input type='checkbox'/>
          <p>{name}</p>
        </div>
        <div className={styles.categoryProductBlock}>
          <p>{category}</p>
        </div>
        <div className={styles.priceProductBlock}>
          <p>{price}₽</p>
        </div>
        <div className={styles.editBlock}>
          <Switcher/>
          <button className={style.editBtn}>
            <BiSolidEditAlt color={themeColors.BTN_BLUE}/>
          </button>
          <button className={style.editBtn}>
            <MdDelete color={themeColors.BTN_RED}/>
          </button>
        </div>
      </div>
  );
};
