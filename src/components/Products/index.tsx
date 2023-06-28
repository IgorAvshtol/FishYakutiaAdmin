import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useAppDispatch, useAppSelector } from '@store/store';
import { getCreateProductLoading, getProductsSelector, getTotalProductsPagesCount } from '@store/selectors';
import { getProductsAction } from '@store/sagas/actions';
import { ProductsTableTitle } from '@components/Products/ProductsTableTitle';
import { Product } from '@components/Products/Product';
import style from '@styles/Pagination.module.css';
import styles from '@styles/Page.module.css';
import { SortField, SortOrder } from '@/interfaces';

export const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getProductsSelector);
  const totalCount = useAppSelector(getTotalProductsPagesCount);
  const loading = useAppSelector(getCreateProductLoading);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortField, setSortField] = useState<SortField>(SortField.ID);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.ASC);

  const handlePageClick = (event: any) => {
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    dispatch(getProductsAction({ page: currentPage, sortField, sortOrder }));
  }, [currentPage, sortField, sortOrder]);

  if (!products.length) return <p className={styles.notFoundMessage}>Продуктов нет</p>;
  if (loading) return <p className={styles.notFoundMessage}>Подождите</p>;

  return (
      <div>
        <ProductsTableTitle sortOrder={sortOrder} setSortField={setSortField} setSortOrder={setSortOrder}/>
        {
          products.map(product => {
                return <Product key={product.id}
                                name={product.name}
                                category={product.category.title}
                                price={product.price}
                />;
              }
          )
        }
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
