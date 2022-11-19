import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../Views/Auth/Reducer';

import { createLogger } from 'redux-logger';
const loggerMiddleware = createLogger();

const reducer = {
  auth: authSlice,
}

export const store = configureStore({
  reducer: reducer,
  middleware: [loggerMiddleware],
})
