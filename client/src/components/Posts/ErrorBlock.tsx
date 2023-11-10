import React from 'react'

import styles from '../../styles/ErrorBlock.module.scss'

const ErrorBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>Ошибка</h1>
      <p>Что-то пошло не так, волшебные коты уже работают над этим)))</p>
      <img src="https://avatars.mds.yandex.net/i?id=b274a3ab395191b39669ab9e608610a17ea27345-4119753-images-thumbs&n=13" alt="cat" />
    </div>
  )
}

export default ErrorBlock;