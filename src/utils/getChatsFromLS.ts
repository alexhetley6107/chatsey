import { initialChats } from '../redux/initialChats';

export const getChatsFromLS = () => {
	const data = localStorage.getItem('chats');
	const chats = data ? JSON.parse(data) : initialChats;
	return chats;
};
