import React from 'react';
import { Link } from 'react-router-dom';
import Chat from '../../../models/chat';
import s from './ChatItem.module.scss';

type Props = {
	chat: Chat;
};

function ChatItem({ chat }: Props) {
	const { name } = chat;

	return (
		<Link to={`/${name}`}>
			<div className={s.item}>
				<div className={s.ava}></div>
				<div className={s.info}>
					<div className={s.name}>{name}</div>
					<div className={s.message}>Hello there my verifing </div>
				</div>
				<div className={s.date}>Jun 12.2022</div>
			</div>
		</Link>
	);
}

export default ChatItem;
