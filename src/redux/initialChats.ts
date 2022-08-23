import Chat from '../models/chat';

export const initialChats: Chat[] = [
	{
		name: 'Joey Tribiani',
		messages: [
			{ text: 'Hi, what are u think about my new car?', date: new Date(1999), isYour: false },
			{ text: 'Hi, what are u think about my new car?', date: new Date(1999), isYour: true },
			{ text: 'Hi, what are u think about my new car?', date: new Date(1999), isYour: false },
			{ text: 'Hi, what are u think about my new car?', date: new Date(1999), isYour: true },
			{ text: 'Hi, what are u think about my new car?', date: new Date(1999), isYour: false },
		],
	},
	{
		name: 'Phiby Bufeur',
		messages: [
			{ text: 'Hi, what are u think about my new car?', date: new Date(1999), isYour: false },
			{ text: 'Hi, what are u think about my new car?', date: new Date(1999), isYour: true },
			{ text: 'Hi, what are u think about my new car?', date: new Date(1999), isYour: false },
			{ text: 'Hi, what are u think about my new car?', date: new Date(1999), isYour: true },
			{ text: 'Hi, what are u think about my new car?', date: new Date(1999), isYour: false },
		],
	},
	{
		name: 'Monika Galer',
		messages: [
			{ text: 'Hi, what are u think about my new car?', date: new Date(1999), isYour: false },
			{ text: 'Hi, what are u think about my new car?', date: new Date(1999), isYour: true },
			{ text: 'Hi, what are u think about my new car?', date: new Date(1999), isYour: false },
			{ text: 'Hi, what are u think about my new car?', date: new Date(1999), isYour: true },
			{ text: 'Hi, what are u think about my new car?', date: new Date(1999), isYour: false },
		],
	},
	{ name: 'Ros Galer', messages: [] },
	{ name: 'Raychell Green', messages: [] },
	{ name: 'Chendler Bing', messages: [] },
	{ name: 'Mat LeBlan', messages: [] },
	{ name: 'Matiew Perry', messages: [] },
	{ name: 'David Shwimmer', messages: [] },
	{ name: 'Lisa Cudrow', messages: [] },
	{ name: 'Courtny Cox Arcet', messages: [] },
	{ name: 'Jennifer Aniston', messages: [] },
];
