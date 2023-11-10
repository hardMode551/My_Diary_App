import React from 'react';

import { setActiveForm, setError } from '../store/slices/postSlice';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';

import { createPost } from '../store/slices/asyncActions';

import styles from '../styles/NewPostForm.module.scss';

const NewPostForm: React.FC = () => {
  const { activeForm, error } = useSelector((state: RootState) => state.post)
  const dispatch = useAppDispatch()

  const [_id] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [date, setDate] = React.useState('');


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const postData = {
      _id,
      title,
      content,
      date,
    };

    try {
      const response = await dispatch(createPost(postData));
      // Проверяем, был ли успешно создан пост
      if (createPost.fulfilled.match(response)) {
        alert('Запись успешно создана!');

        // Обновляем страницу
        window.location.reload();
      }
    } catch (err: any) {
      dispatch(setError(err));
      alert('Ошибка при создании записи: ' + err.message);
      console.log(err);
    }
  };

  const closePopup = () => {
    dispatch(setActiveForm(false))
  }

  if (!activeForm) {
    return null
  }

  return (
    <div className={styles.root}>
      <div className={styles.form}>
        <h1>Новая запись</h1>
        <svg
          onClick={closePopup}
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
        >
          <path
            d="M11.0834 11.0835L26.9167 26.9168M11.0834 26.9168L26.9167 11.0835"
            stroke="#050F28"
            strokeWidth="3.16667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <form onSubmit={handleSubmit}>
          <div className={styles.input}>
            <div className={styles.inputField} >
              <label htmlFor="">Заголовок
                {Array.isArray(error) &&
                  error.map((err, index) => {
                    if (err.path === "title" && err.location === "body") {
                      return <p className={styles.error} key={index}>{err.msg}</p>;
                    }

                  }).find(Boolean)}
              </label>

              <input type="text" name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />

            </div>
            <div className={styles.inputField}>
              <label htmlFor="">Дата
                {Array.isArray(error) &&
                  error.map((err, index) => {
                    if (err.path === "date" && err.location === "body") {
                      return <p className={styles.error} key={index}>{err.msg}</p>;
                    }
                    return null;
                  }).find(Boolean)}
              </label>

              <input type="text" name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>


          <div className={styles.textElement}>
            <label htmlFor="">Заметка
              {Array.isArray(error) &&
                error.map((err, index) => {
                  if (err.path === "content" && err.location === "body") {
                    return <p className={styles.error} key={index}>{err.msg}</p>;
                  }
                }).find(Boolean)}
            </label>

            <textarea value={content}
              onChange={(e) => setContent(e.target.value)} />
          </div>

          <button>Поделиться наболевшим</button>
        </form>

      </div >
    </div >
  );
};

export default NewPostForm;
