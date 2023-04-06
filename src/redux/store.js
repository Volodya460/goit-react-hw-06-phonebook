import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'usersStorage',
  storage,
  whitelist: ['contacts'],
};

const persistStoreUsers = persistReducer(persistConfig, contactSlice.reducer);

export const store = configureStore({
  reducer: {
    user: persistStoreUsers,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
