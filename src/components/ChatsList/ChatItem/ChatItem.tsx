import React from 'react';
import { Link } from 'react-router-dom';
import Chat from '../../../models/chat';
import formatDate from '../../../utils/formatDate';
import formatTime from '../../../utils/formatTime';
import s from './ChatItem.module.scss';

type Props = {
	chat: Chat;
};

function ChatItem({ chat }: Props) {
	const { name, messages } = chat;

	const lastMessageText = messages[messages.length - 1]?.text;
	const lastMessageDate = formatDate(messages[messages.length - 1]?.date);

	return (
		<Link to={`/${name}`}>
			<div className={s.item}>
				<div className={s.ava}></div>
				<div className={s.info}>
					<div className={s.name}>{name}</div>
					<div className={s.message}>{lastMessageText}</div>
				</div>
				<div className={s.date}>{lastMessageDate ? lastMessageDate : ''}</div>
			</div>
		</Link>
	);
}

export default ChatItem;
