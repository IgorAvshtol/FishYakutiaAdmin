import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@store/store';
import { getCategories, getCreateProductError } from '@store/selectors';
import { createProductAction } from '@store/sagas/actions';
import { themeColors } from '@constants/themeColors';
import { Button } from '@components/Button';
import { Select } from '@components/Select';
import photo from '@assets/photo.jpg';
import styles from '@styles/Modal.module.css';

interface AddProductModal {
  name: string;
  categoryId: string;
  price: string;
  priceUnit: string;
  image: File;
}

const priceUnit = [
  { id: 1, title: 'Цена за 1 кг' }
];

const response = await fetch(photo);
const blob = await response.blob();
const defaultImageFile = new File([blob], 'photo.jpg', { type: 'image/jpg' });

export const AddProductModal = () => {
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<File | Blob>();

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<AddProductModal>();

  const categories = useAppSelector(getCategories);
  const sendError = useAppSelector(getCreateProductError);

  const onSubmit: SubmitHandler<AddProductModal> = async (data) => {
    const { priceUnit, ...addProductData } = data;

    const formData = new FormData();

    formData.append('name', addProductData.name);
    formData.append('price', addProductData.price);
    formData.append('categoryId', addProductData.categoryId);

    if (file) {
      formData.append('image', file as File);
    } else {
      formData.append('image', defaultImageFile);
    }

    const payload = {
      name: formData.get('name') as string,
      price: formData.get('price') as string,
      categoryId: formData.get('categoryId') as string,
      image: formData.get('image') as File,
    };

    if (file) {
      formData.append('image', file as File);
    } else {
      formData.append('image', defaultImageFile);
    }

    const allowedImageTypes = ['image/jpeg', 'image/jpg'];

    if (!allowedImageTypes.includes(payload.image.type)) {
      setError('image', { message: 'Должен быть формат jpeg/jpg' });
      return;
    }

    dispatch(createProductAction(payload));
  };

  const uploadPhotoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearErrors('image');
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles.addCategoryInputBlock}>
        <div className={styles.addProductNameInput}>
          <p className={styles.title}>Название товара</p>
          <input {...register('name', { required: true })} className={styles.input}/>
          {errors.name && <p className={styles.errorMessage}>Это поле обязательно</p>}
        </div>
        <div className={styles.addProductInputBlock}>
          <p className={styles.title}>Категория</p>
          <Select options={categories} setValue={setValue} type='categoryId' clearErrors={clearErrors}/>
          {errors.categoryId && <p className={styles.errorMessage}>Это поле обязательно</p>}
        </div>
        <div className={styles.addProductInputBlock}>
          <p className={styles.title}>Цена</p>
          <div className={styles.addProductInputPriceBlock}>
            <div className={styles.inputPriceBlock}>
              <input {...register('price', {
                required: true, pattern: {
                  value: /^[0-9]+$/,
                  message: 'Поле содержит только числа',
                },
              })} className={styles.input}/>
              {errors.price && <p className={styles.errorMessage}>Должно быть числовое значение</p>}
            </div>
            <div className={styles.selectPriceBlock}>
              <Select options={priceUnit} setValue={setValue} type='priceUnit' clearErrors={clearErrors}/>
            </div>
          </div>
        </div>
        <div className={styles.addPhotoBlock}>
          <p className={styles.title}>Фотография</p>
          <div className={styles.addPhotoInputBlock}>
            <img src={file ? URL.createObjectURL(file) : photo} alt='фото' className={styles.productPhoto}/>
            <label className={styles.addPhotoInput}>
              <input type='file' accept='image/jpeg, image/jpg' {...register('image')} onChange={uploadPhotoHandler}/>
              <span>Загрузить...</span>
            </label>
          </div>
          {errors.image && <p className={styles.errorMessage}>{errors.image.message}</p>}
        </div>
        <Button buttonStyle={{ color: themeColors.ACTIVE, marginTop: '20px', padding: '10px 40px' }}>
          Сохранить
        </Button>
        {sendError && <p>{sendError}</p>}
      </form>
  );
};
