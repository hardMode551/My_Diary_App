import { configureStore } from '@reduxjs/toolkit'
import post from './slices/postSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    post,
  },
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()