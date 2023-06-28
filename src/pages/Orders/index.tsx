import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useAppDispatch, useAppSelector } from '@store/store';
import { getOrders } from '@store/sagas/actions';
import { getOrdersSelector, getTotalOrdersPagesCount } from '@store/selectors';
import { Orders } from '@components/Orders';
import style from '@styles/Pagination.module.css';
import styles from '@styles/Page.module.css';

export const OrdersPage = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(getOrdersSelector);
  const totalCount = useAppSelector(getTotalOrdersPagesCount);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageClick = (event: any) => {
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    dispatch(getOrders(currentPage));
  }, [currentPage]);

  if (!orders.length) return <p className={styles.notFoundMessage}>Заказов нет</p>;

  return (
      <div className={styles.mainBlock}>
        <p className={styles.title}>Заказы</p>
        <Orders orders={orders}/>
        <div className={style.paginationBlock}>
          <ReactPaginate
              onPageChange={handlePageClick}
              activeClassName={style.item && style.active}
              breakClassName={style.item}
              breakLabel={'...'}
              containerClassName={style.pagination}
              disabledClassName={style.disabledPage}
              marginPagesDisplayed={2}
              nextClassName={style.item}
              nextLabel='далее'
              pageCount={totalCount}
              pageClassName={style.item}
              pageRangeDisplayed={2}
              previousClassName={style.item}
              previousLabel='назад'
          />
        </div>
      </div>
  );
};
