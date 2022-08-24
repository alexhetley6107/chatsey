import { configureStore } from '@reduxjs/toolkit';
import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import chatReducer from './chatSlice';

export const store = configureStore({
	reducer: {
		chat: chatReducer,
		// middleware: (getDefaultMiddleware) => curryGetDefaultMiddleware(),
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
