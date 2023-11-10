import { createSlice } from '@reduxjs/toolkit'
import { createPost, fetchPosts, fetchRemovePost } from './asyncActions';
import { PostTypes } from './types';

interface PostState {
  data: PostTypes[];
  status: 'loading' | 'success' | 'error';
  activeForm: boolean;
  error: string | null;
}

const initialState: PostState = {
  data: [],
  status: 'loading', // loading | success | error
  activeForm: false,
  error: null,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setData(state, action){
      state.data = action.payload;
    },
    setActiveForm(state, action) {
      state.activeForm = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = 'loading';
      state.data = [];
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchPosts.rejected, (state, error) => {
      state.status = 'error';
      state.data = [];
      state.error = 'Something went wrong' + error.error.message;
    });
    //fetchRemovePost
    builder.addCase(fetchRemovePost.rejected, (state, action) => {
      state.status = 'error';
      state.error = 'Failed to create a post: ' + action.error.message;
    });

    
    //Удаление поста
    builder.addCase(fetchRemovePost.pending, (state, action) => {
      state.data = state.data.filter((post) => post._id !== action.meta.arg);
    });

    //обработка ошибки при создании поста
    builder.addCase(createPost.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.payload as string;
    });
    
  }
  
})

export const { setData, setActiveForm, setError } = postSlice.actions

export default postSlice.reducer