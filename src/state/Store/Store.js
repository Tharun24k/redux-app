import { configureStore } from '@reduxjs/toolkit';
import abc from '../Counter/CounterSlice'

export const store = configureStore({
  reducer: {
    counter: abc,
  },
})