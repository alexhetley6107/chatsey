import { nanoid } from 'nanoid';
import Chat from '../models/chat';

export const initialChats: Chat[] = [
	{
		idx: 0,
		isUpdate: false,
		name: 'Phibie Bufeur',
		messages: [
			{
				id: '00',
				text: 'Hello, i proud of u. You are great IT Specialist',
				date: 1661355875719,
				isYour: false,
			},
			{ id: '11', text: 'Oh, thanks', date: 1661355875719, isYour: true },
			{
				id: '22',
				text: 'And also, tou are good friend',
				date: 1661355875719,
				isYour: false,
			},
			{
				id: '33',
				text: 'Thanks, Phibs. I also appreciate u ',
				date: 1661355875719,
				isYour: true,
			},
			{
				id: '44',
				text: 'Actually, i love you long time...',
				date: 1661355875719,
				isYour: false,
			},
		],
	},
	{
		idx: 1,
		isUpdate: false,

		name: 'Monika Galer',
		messages: [
			{ id: '55', text: 'Hey, whats up?', date: 1661355875719, isYour: false },
			{ id: '66', text: 'Hi, good, u?', date: 1661355875719, isYour: true },
			{
				id: '77',
				text: 'What are u think about my new car?',
				date: 1661355875719,
				isYour: false,
			},
			{
				id: '88',
				text: 'Too big for me, but imnt spec',
				date: 1661355875719,
				isYour: true,
			},
			{
				id: '99',
				text: 'Would you ride with me?',
				date: 1661355875719,
				isYour: false,
			},
		],
	},
	{
		idx: 2,
		isUpdate: false,
		name: 'Joey Tribiani',
		messages: [
			{
				id: '1010',
				text: 'Hi, what are u think about my new girl?',
				date: 1661355875719,
				isYour: false,
			},
			{ id: '1111', text: 'She is hot)', date: 1661355875719, isYour: true },
			{
				id: '1212',
				text: 'She is very hot',
				date: 1661355875719,
				isYour: false,
			},
			{
				id: '1313',
				text: 'What did Chandler say?)',
				date: 1661355875719,
				isYour: true,
			},
			{
				id: '1414',
				text: 'Chandler v ahue',
				date: 1661355875719,
				isYour: false,
			},
			{ id: '1515', text: 'Ha ah ha', date: 1661355875719, isYour: true },
		],
	},
	{
		idx: 3,
		isUpdate: false,
		name: 'Ros Galer',
		messages: [
			{
				id: '1616',
				text: 'Never call me again',
				date: 1661355875719,
				isYour: false,
			},
		],
	},
	{
		idx: 4,
		isUpdate: false,

		name: 'Raychell Green',
		messages: [
			{
				id: '1717',
				text: 'Call me, please',
				date: 1661355875719,
				isYour: false,
			},
			{
				id: '1818',
				text: 'Call me, please',
				date: 1661355875719,
				isYour: false,
			},
			{
				id: '1919',
				text: 'Call me, please',
				date: 1661355875719,
				isYour: false,
			},
		],
	},
	{
		idx: 5,
		isUpdate: false,

		name: 'Chendler Bing',
		messages: [
			{
				id: '3030',
				text: 'Hey, man. Hou are you?',
				date: 1661355875719,
				isYour: false,
			},
			{ id: '3131', text: 'Hey, whats up?', date: 1661355875719, isYour: false },
			{ id: '3232', text: 'Hey, whats up?', date: 1661355875719, isYour: false },
			{ id: '3333', text: 'Hey, whats up?', date: 1661355875719, isYour: false },
			{ id: '3939', text: 'Hey, whats up?', date: 1661355875719, isYour: false },
		],
	},
	{
		idx: 6,
		isUpdate: false,
		name: 'Matiew Perry',
		messages: [
			{ id: '4040', text: 'Hey, whats up?', date: 1661355875719, isYour: false },
			{ id: '4141', text: 'Hi, man', date: 1661355875719, isYour: true },
			{
				id: '4242',
				text: 'Did my character write you again?',
				date: 1661355875719,
				isYour: false,
			},
			{ id: '4343', text: 'Yap', date: 1661355875719, isYour: true },
			{ id: '4444', text: 'Oh, I hate him', date: 1661355875719, isYour: false },
		],
	},
	{
		idx: 7,
		isUpdate: false,

		name: 'David Shwimmer',
		messages: [
			{
				id: '4545',
				text: 'check connection',
				date: 1661355875719,
				isYour: true,
			},
			{
				id: '5959',
				text: 'check connection',
				date: 1661355875719,
				isYour: true,
			},
			{
				id: '6363',
				text: 'check connection',
				date: 1661355875719,
				isYour: true,
			},
			{
				id: '6464',
				text: 'check connection',
				date: 1661355875719,
				isYour: true,
			},
			{
				id: '6565',
				text: 'check connection',
				date: 1661355875719,
				isYour: true,
			},
		],
	},

	{
		idx: 8,
		isUpdate: false,

		name: 'Jennifer Aniston',
		messages: [
			{
				id: '6666S',
				text: 'Oh, I so miss u',
				date: 1661355875719,
				isYour: false,
			},
		],
	},
	{
		isUpdate: false,
		idx: 9,
		name: 'Lisa Cudrow',
		messages: [],
	},
	{
		idx: 10,
		isUpdate: false,
		name: 'Courtny Cox Arcet',
		messages: [],
	},

	{
		idx: 11,
		isUpdate: false,
		name: 'Mat LeBlan',
		messages: [],
	},
];

/* export const initialChats: Chat[] = [
	{
		idx: 0,
		isUpdate: false,
		name: 'Phibie Bufeur',
		messages: [
			{
				id: '00',
				text: 'Hello, i proud of u. You are great IT Specialist',
				date: new Date(1994, 4, 18, 16, 45),
				isYour: false,
			},
			{ id: '11', text: 'Oh, thanks', date: new Date(1994, 4, 20, 10, 45), isYour: true },
			{
				id: '22',
				text: 'And also, tou are good friend',
				date: new Date(1994, 4, 20, 13, 45),
				isYour: false,
			},
			{
				id: '33',
				text: 'Thanks, Phibs. I also appreciate u ',
				date: new Date(1994, 4, 20, 13, 45),
				isYour: true,
			},
			{
				id: '44',
				text: 'Actually, i love you long time...',
				date: new Date(1994, 4, 20, 16, 45),
				isYour: false,
			},
		],
	},
	{
		idx: 1,
		isUpdate: false,

		name: 'Monika Galer',
		messages: [
			{ id: '55', text: 'Hey, whats up?', date: new Date(1994, 4, 20, 16, 45), isYour: false },
			{ id: '66', text: 'Hi, good, u?', date: new Date(1994, 4, 20, 16, 45), isYour: true },
			{
				id: '77',
				text: 'What are u think about my new car?',
				date: new Date(1994, 4, 20, 16, 45),
				isYour: false,
			},
			{
				id: '88',
				text: 'Too big for me, but imnt spec',
				date: new Date(1994, 4, 20, 16, 45),
				isYour: true,
			},
			{
				id: '99',
				text: 'Would you ride with me?',
				date: new Date(1994, 4, 20, 16, 45),
				isYour: false,
			},
		],
	},
	{
		idx: 2,
		isUpdate: false,
		name: 'Joey Tribiani',
		messages: [
			{
				id: '1010',
				text: 'Hi, what are u think about my new girl?',
				date: new Date(1994, 4, 20, 16, 45),
				isYour: false,
			},
			{ id: '1111', text: 'She is hot)', date: new Date(1994, 4, 20, 16, 45), isYour: true },
			{
				id: '1212',
				text: 'She is very hot',
				date: new Date(1994, 4, 20, 16, 45),
				isYour: false,
			},
			{
				id: '1313',
				text: 'What did Chandler say?)',
				date: new Date(1994, 4, 20, 16, 45),
				isYour: true,
			},
			{
				id: '1414',
				text: 'Chandler v ahue',
				date: new Date(1994, 4, 20, 16, 45),
				isYour: false,
			},
			{ id: '1515', text: 'Ha ah ha', date: new Date(1994, 4, 20, 16, 45), isYour: true },
		],
	},
	{
		idx: 3,
		isUpdate: false,
		name: 'Ros Galer',
		messages: [
			{
				id: '1616',
				text: 'Never call me again',
				date: new Date(1994, 4, 20, 16, 45),
				isYour: false,
			},
		],
	},
	{
		idx: 4,
		isUpdate: false,

		name: 'Raychell Green',
		messages: [
			{
				id: '1717',
				text: 'Call me, please',
				date: new Date(1994, 4, 20, 16, 45),
				isYour: false,
			},
			{
				id: '1818',
				text: 'Call me, please',
				date: new Date(1994, 4, 20, 16, 45),
				isYour: false,
			},
			{
				id: '1919',
				text: 'Call me, please',
				date: new Date(1994, 4, 20, 16, 45),
				isYour: false,
			},
		],
	},
	{
		idx: 5,
		isUpdate: false,

		name: 'Chendler Bing',
		messages: [
			{
				id: '3030',
				text: 'Hey, man. Hou are you?',
				date: new Date(1994, 4, 20, 16, 45),
				isYour: false,
			},
			{ id: '3131', text: 'Hey, whats up?', date: new Date(1994, 4, 20, 16, 45), isYour: false },
			{ id: '3232', text: 'Hey, whats up?', date: new Date(1994, 4, 20, 16, 45), isYour: false },
			{ id: '3333', text: 'Hey, whats up?', date: new Date(1994, 4, 20, 16, 45), isYour: false },
			{ id: '3939', text: 'Hey, whats up?', date: new Date(1994, 4, 20, 16, 45), isYour: false },
		],
	},
	{
		idx: 6,
		isUpdate: false,
		name: 'Matiew Perry',
		messages: [
			{ id: '4040', text: 'Hey, whats up?', date: new Date(1994, 4, 20, 16, 45), isYour: false },
			{ id: '4141', text: 'Hi, man', date: new Date(1994, 4, 20, 16, 45), isYour: true },
			{
				id: '4242',
				text: 'Did my character write you again?',
				date: new Date(1994, 4, 20, 16, 45),
				isYour: false,
			},
			{ id: '4343', text: 'Yap', date: new Date(1994, 4, 20, 16, 45), isYour: true },
			{ id: '4444', text: 'Oh, I hate him', date: new Date(1994, 4, 20, 16, 45), isYour: false },
		],
	},
	{
		idx: 7,
		isUpdate: false,

		name: 'David Shwimmer',
		messages: [
			{
				id: '4545',
				text: 'check connection',
				date: new Date(1994, 4, 20, 16, 45),
				isYour: true,
			},
			{
				id: '5959',
				text: 'check connection',
				date: new Date(1994, 4, 20, 16, 45),
				isYour: true,
			},
			{
				id: '6363',
				text: 'check connection',
				date: new Date(1994, 4, 20, 16, 45),
				isYour: true,
			},
			{
				id: '6464',
				text: 'check connection',
				date: new Date(1994, 4, 20, 16, 45),
				isYour: true,
			},
			{
				id: '6565',
				text: 'check connection',
				date: new Date(1994, 4, 20, 16, 45),
				isYour: true,
			},
		],
	},

	{
		idx: 8,
		isUpdate: false,

		name: 'Jennifer Aniston',
		messages: [
			{
				id: '6666S',
				text: 'Oh, I so miss u',
				date: new Date(1994, 4, 20, 16, 5),
				isYour: false,
			},
		],
	},
	{
		isUpdate: false,
		idx: 9,
		name: 'Lisa Cudrow',
		messages: [],
	},
	{
		idx: 10,
		isUpdate: false,
		name: 'Courtny Cox Arcet',
		messages: [],
	},

	{
		idx: 11,
		isUpdate: false,
		name: 'Mat LeBlan',
		messages: [],
	},
];
 */
