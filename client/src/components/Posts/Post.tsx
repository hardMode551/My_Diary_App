import React from 'react';

import { RootState, useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { fetchPosts, fetchRemovePost } from '../../store/slices/asyncActions';

import Skeleton from './Skeleton';
import ErrorBlock from './ErrorBlock';
import { PostTypes } from '../../store/slices/types';

import styles from '../../styles/Post.module.scss';

interface PostProps {
  data: PostTypes[];
  limit: number;
}

const Post: React.FC<PostProps> = ({ data, limit }) => {
  const { status, error } = useSelector((state: RootState) => state.post)
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const deletePost = async (postId: string) => {
    if (window.confirm('Вы действительно хотите удалить статью?')) {
      console.log(postId)
      await dispatch(fetchRemovePost(postId));
      dispatch(fetchPosts());
    }
  };

  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  if (error) {
    return <ErrorBlock />
  }

  if (status === 'loading') {
    return skeleton;
  }

  return (
    <>
      {
        data.slice(0, limit).map((post) => (

          < div
            className={styles.post}
            key={post._id}
          >
            <button className={styles.deleteBtn} onClick={() => deletePost(post._id)}>Удалить пост</button>
            <h2>{post.title}</h2>
            <p>{post.content}</p>

            <div className={styles.dateAndTime}>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity="0.16"
                    d="M4 8H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V8Z"
                    fill="#88A1DE"
                  />
                  <path
                    d="M4 4H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V4Z"
                    stroke="#88A1DE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 8H20"
                    stroke="#88A1DE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3V5"
                    stroke="#88A1DE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 3V5"
                    stroke="#88A1DE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{' '}
                {post.date}
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle opacity="0.16" cx="12" cy="12" r="9" fill="#88A1DE" />
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#88A1DE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 8V13H16"
                    stroke="#88A1DE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{' '}
                10:00
              </p>
            </div>
          </div >
        ))
      }
    </>


  );
};

export default Post;
