import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { initialChats } from './initialChats';
import Chat from './../models/chat';
import { nanoid } from 'nanoid';
import Message from '../models/message';
import { fetchAnswer } from './fetchAnswer';

export interface ChatsState {
	chats: Chat[];
	isTyping: boolean;
}

export type MessageInfo = {
	text: string;
	chatName: string;
};

const initialState: ChatsState = {
	chats: initialChats,
	isTyping: false,
};

export const chatSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {
		sendMessage: (state, action: PayloadAction<MessageInfo>) => {
			const { text, chatName } = action.payload;
			const date = new Date();

			const message: Message = { id: nanoid(8), text, date, isYour: true };

			state.chats.find((c) => c.name === chatName)?.messages.push(message);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAnswer.pending, (state, action) => {
			state.isTyping = true;
		});
		builder.addCase(fetchAnswer.fulfilled, (state, action) => {
			const { chatName, text } = action.payload;
			console.log(action.payload);

			const message: Message = { id: nanoid(8), text, date: new Date(), isYour: false };

			state.isTyping = false;
			state.chats.find((c) => c.name === chatName)?.messages.push(message);
		});
		builder.addCase(fetchAnswer.rejected, (state, action) => {
			state.isTyping = false;
		});
	},
});

export const { sendMessage } = chatSlice.actions;

export default chatSlice.reducer;
