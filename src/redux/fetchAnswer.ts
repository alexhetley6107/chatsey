import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAnswer = createAsyncThunk<any, string>(
	'chats/fetchAnswerStatus',

	async (chatName) => {
		const { data } = await axios.get('https://api.chucknorris.io/jokes/random');

		const payload = {
			chatName,
			text: data.value,
		};
		return payload;
	},
);
