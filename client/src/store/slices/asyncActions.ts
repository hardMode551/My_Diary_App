import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';
import { PostTypes } from './types';

export const fetchPosts = createAsyncThunk('posts/FetchPosts', async () => {
    const {data} = await axios.get(`/posts`);
    return data;
});

export const createPost = createAsyncThunk(
  'post/create',
  async (postData: PostTypes, { rejectWithValue }) => {
    try {
      const response = await axios.post('/createPost', postData);
    
      if (response.status === 200) {
        return response.data;
      }
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.errors) {

        return rejectWithValue(error.response.data.errors);
      }
      throw error;
    }
  }
);

export const fetchRemovePost = createAsyncThunk(
  'posts/removePost',
  async (postId: string) => {
    await axios.delete(`/removePost/${postId}`);
    return postId;
  }
);