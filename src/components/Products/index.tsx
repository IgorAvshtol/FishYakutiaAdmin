import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useAppDispatch, useAppSelector } from '@store/store';
import { getProductsSelector, getTotalProductsPagesCount } from '@store/selectors';
import { getProductsAction } from '@store/sagas/actions';
import { ProductsTableTitle } from '@components/Products/ProductsTableTitle';
import { Product } from '@components/Products/Product';
import style from '@styles/Pagination.module.css';
import styles from '@styles/Page.module.css';

export const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getProductsSelector);
  const totalCount = useAppSelector(getTotalProductsPagesCount);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageClick = (event: any) => {
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    dispatch(getProductsAction(currentPage));
  }, [currentPage]);

  if (!products.length) return <p className={styles.notFoundMessage}>Продуктов нет</p>;

  return (
      <div>
        <ProductsTableTitle/>
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
