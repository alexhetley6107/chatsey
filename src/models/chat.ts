import Message from './message';

type Chat = {
	idx: number;
	name: string;
	isUpdate: boolean;
	messages: Message[];
};

export default Chat;
