import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@store/store';
import { getCreateProductError, getSettingsDataSelector } from '@store/selectors';
import { getSettingsAction, updateSettingsAction } from '@store/sagas/actions';
import { themeColors } from '@constants/themeColors';
import { Button } from '@components/Button';
import photo from '@assets/photo.jpg';
import styles from '@styles/SettingsForm.module.css';
import style from '@styles/Modal.module.css';

interface SettingsForm {
  delivery: string;
  description: string;
  email: string;
  image: File;
}

export const SettingsForm = () => {
  const dispatch = useAppDispatch();
  const settingsData = useAppSelector(getSettingsDataSelector);

  const [file, setFile] = useState<File | Blob>();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<SettingsForm>();

  const sendError = useAppSelector(getCreateProductError);

  const onSubmit: SubmitHandler<SettingsForm> = async (data) => {

    const formData = new FormData();

    formData.append('id', String(settingsData.id));
    formData.append('delivery', data.delivery);
    formData.append('description', data.description);
    formData.append('email', data.email);
    formData.append('image', file as File);

    const payload = {
      id: Number(formData.get('id')) as number,
      delivery: formData.get('delivery') as string,
      description: formData.get('description') as string,
      email: formData.get('email') as string,
      image: formData.get('image') as File,
    };

    const allowedImageTypes = ['image/jpeg', 'image/jpg'];

    if (!allowedImageTypes.includes(payload.image.type)) {
      setError('image', { message: 'Должен быть формат jpeg/jpg' });
      return;
    }

    dispatch(updateSettingsAction(payload));
  };

  const uploadPhotoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearErrors('image');
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const getImageUrl = () => {
    if (file instanceof File) {
      return URL.createObjectURL(file);
    } else if (settingsData.image && settingsData.image.path) {
      const baseUrl = import.meta.env.VITE_BASE_URL;
      return `${baseUrl}${settingsData.image.path}`;
    } else {
      return photo;
    }
  };

  useEffect(() => {
    dispatch(getSettingsAction());
  }, []);

  return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles.settingsFormBlock}>
        <div className={styles.deliveryInputBlock}>
          <p className={style.title}>Доставка и оплата</p>
          <textarea
              defaultValue={settingsData.delivery}
              {...register('delivery', { required: true })}
              className={styles.input}
          />
          {errors.delivery && <p className={style.errorMessage}>Это поле обязательно</p>}
        </div>
        <div className={styles.descriptionInputBlock}>
          <p className={style.title}>Описание и контакты</p>
          <textarea
              defaultValue={settingsData.description}
              {...register('description', { required: true })}
              className={styles.input}
          />
          {errors.description && <p className={style.errorMessage}>Это поле обязательно</p>}
        </div>
        <div className={style.addPhotoBlock}>
          <p className={style.title}>Картинка на главной</p>
          <div className={style.addPhotoInputBlock}>
            <img src={getImageUrl()} alt='фото' className={style.productPhoto}/>
            <label className={style.addPhotoInput}>
              <input
                  type='file'
                  accept='image/jpeg, image/jpg'
                  {...register('image')}
                  onChange={uploadPhotoHandler}
              />
              <span>Загрузить...</span>
            </label>
          </div>
          {errors.image && <p className={style.errorMessage}>{errors.image.message}</p>}
        </div>
        <div className={styles.emailInputBlock}>
          <p className={style.title}>Название товара</p>
          <input
              defaultValue={settingsData.email}
              type='email' {...register('email', { required: true })}
              className={style.input}
          />
          {errors.email && <p className={style.errorMessage}>Это поле обязательно</p>}
        </div>
        <Button buttonStyle={{ color: themeColors.ACTIVE, marginTop: '20px', padding: '10px 40px' }}>
          Сохранить
        </Button>
        {sendError && <p>{sendError}</p>}
      </form>
  );
};
