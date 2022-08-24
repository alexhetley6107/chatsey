type Message = {
	id: string;
	text: string;
	date: number | string;
	// date: Date | string;
	isYour: boolean;
};

export default Message;
