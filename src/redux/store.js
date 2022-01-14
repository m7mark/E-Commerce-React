import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';

import cartSlice from './cartSlice';
import userSlice from './userSlice';
import initializeSlice from './initializeSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['init']
}

const rootReducer = combineReducers({
  cart: cartSlice,
  user: userSlice,
  init: initializeSlice,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)