import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAnswer = createAsyncThunk(
	'chats/fetchAnswerStatus',

	async (chatName) => {
		const res = await axios.get('https://api.chucknorris.io/jokes/random');

		return res.data.value;
	},
);
