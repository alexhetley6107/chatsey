import React from 'react';
import Message from '../../../models/message';

import s from './Message.module.scss';

type Props = {
	message: Message;
};

function MessageComponent({ message }: Props) {
	const { text, date, isYour } = message;
	return (
		<div className={isYour ? s.message : s.your_mes}>
			<div className={s.text}>{text}</div>
			<div className={s.date}>4/12/12, 4.10 PM</div>
		</div>
	);
}

export default MessageComponent;
