import Chat from '../models/chat';

export const saveChatsToLS = (chats: Chat[]) => {
	const json = JSON.stringify(chats);

	localStorage.setItem('chats', json);
};
