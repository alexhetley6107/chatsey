import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Chat from './../models/chat';
import { nanoid } from 'nanoid';
import Message from '../models/message';
import { fetchAnswer } from './fetchAnswer';
import { saveChatsToLS } from '../utils/saveChatsToLS';
import { getChatsFromLS } from '../utils/getChatsFromLS';

export interface ChatsState {
	chats: Chat[];
	sentTo: string;
}

export type MessageInfo = {
	text: string;
	chatName: string;
};

const initialState: ChatsState = {
	chats: getChatsFromLS(),
	sentTo: '',
};

export const chatSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {
		sendMessage: (state, action: PayloadAction<MessageInfo>) => {
			const { text, chatName } = action.payload;
			const date = new Date().getTime();

			const message: Message = { id: nanoid(8), text, date, isYour: true };

			state.chats.find((c) => c.name === chatName)?.messages.push(message);

			state.sentTo = chatName;

			saveChatsToLS(state.chats);
		},
		openMessage: (state, action: PayloadAction<string>) => {
			const chatName = action.payload;

			const chat = state.chats.find((c) => c.name === chatName) as Chat;
			chat.isUpdate = false;

			saveChatsToLS(state.chats);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAnswer.pending, (state, action) => {});
		builder.addCase(fetchAnswer.fulfilled, (state, action) => {
			const text = action.payload;
			const chatName = state.sentTo;
			const date = new Date().getTime();

			const message: Message = { id: nanoid(8), text, date, isYour: false };

			const chat = state.chats.find((c) => c.name === chatName) as Chat;
			chat.messages.push(message);
			chat.isUpdate = true;

			state.chats = state.chats.filter((c) => c.name !== chatName);
			state.chats.unshift(chat);

			state.sentTo = '';

			saveChatsToLS(state.chats);
		});
		builder.addCase(fetchAnswer.rejected, (state, action) => {
			const chatName = state.sentTo;
			const text = "I'm busy";
			const message: Message = { id: nanoid(8), text, date: new Date().getTime(), isYour: false };

			const chat = state.chats.find((c) => c.name === chatName) as Chat;
			chat.messages.push(message);
			chat.isUpdate = true;

			state.chats = state.chats.filter((c) => c.name !== chatName);
			state.chats.unshift(chat);

			state.sentTo = '';

			saveChatsToLS(state.chats);
		});
	},
});

export const { sendMessage, openMessage } = chatSlice.actions;

export default chatSlice.reducer;
