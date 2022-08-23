import React from 'react';
import Message from '../../../models/message';
import formatDate from '../../../utils/formatDate';
import formatTime from '../../../utils/formatTime';

import s from './Message.module.scss';

type Props = {
	message: Message;
};

function MessageComponent({ message }: Props) {
	const { text, date, isYour } = message;

	const day = formatDate(date);
	const time = formatTime(date);

	return (
		<div className={isYour ? s.your_mes : s.message}>
			<div className={s.text}>{text}</div>
			<div className={s.date}>
				{day} {time}
			</div>
		</div>
	);
}

export default MessageComponent;
