import Chat from '../models/chat';

export const saveChatsToLS = (key: string, chats: Chat[]) => {
	const json = JSON.stringify(chats);

	localStorage.setItem('chats', json);
};
