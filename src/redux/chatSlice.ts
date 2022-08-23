import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { initialChats } from './initialChats';
import Chat from './../models/chat';

export interface CounterState {
	chats: Chat[];
}

const initialState: CounterState = {
	chats: initialChats,
};

export const chatSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {
		incrementByAmount: (state, action: PayloadAction<number>) => {},
	},
});

// Action creators are generated for each case reducer function
export const {} = chatSlice.actions;

export default chatSlice.reducer;
