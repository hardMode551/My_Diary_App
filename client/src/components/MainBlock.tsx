import React from 'react';

import Post from './Posts/Post';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import styles from '../styles/MainBlock.module.scss';

const MainBlock: React.FC = () => {
  const [limit, setLimit] = React.useState<number>(6);
  const [showMore, setShowMore] = React.useState(false);
  const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc'>('asc');

  const { data } = useSelector((state: RootState) => state.post);

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 6);
    setShowMore(true);
  };

  const handleSortAsc = () => {
    setSortOrder('asc');
  };

  const handleSortDesc = () => {
    setSortOrder('desc');
  };

  const sortedData = data.slice().sort(() => {
    if (sortOrder === 'asc') {
      return 1;
    } else {
      return -1;
    }
  });

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <div>
          <h1>
            Мой <br /> дневничок
          </h1>
        </div>
        <div className={styles.Navbuttons}>
          <button className={sortOrder === 'asc' ? styles.active : ''} onClick={handleSortAsc}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 6H20M4 12H14M4 18H8"
                stroke="#050F28"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 16L18 20M18 20L22 16M18 20L18 4"
                stroke={sortOrder === 'asc' ? "white" : "#88A1DE"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>{' '}
            Сначала новые
          </button>
          <button className={sortOrder === 'desc' ? styles.active : ''} onClick={handleSortDesc}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 6H20M4 12H14M4 18H8"
                stroke="#050F28"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 8L18 4M18 4L22 8M18 4L18 20"
                stroke={sortOrder === 'asc' ? "#88A1DE" : "white"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>{' '}
            Сначала старые
          </button>
        </div>
      </div>

      <div className={styles.posts}>
        {showMore
          ? (
            <Post limit={limit} data={sortedData} />
          )
          : (
            <Post limit={6} data={sortedData} />
          )
        }
      </div>






      {data.length > limit && (
        <button className={styles.loadMore} onClick={handleLoadMore}>Показать еще</button>
      )}
    </div>
  );
};

export default MainBlock;
