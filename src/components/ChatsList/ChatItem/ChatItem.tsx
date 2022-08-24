import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Chat from '../../../models/chat';
import formatDate from '../../../utils/formatDate';
import s from './ChatItem.module.scss';
import friends from './../../../assets/friends/Friends';
import { useDispatch } from 'react-redux';
import { openMessage } from '../../../redux/chatSlice';
import { AppDispatch } from '../../../redux/store';

type Props = {
	chat: Chat;
};

function ChatItem({ chat }: Props) {
	const { name, messages, idx, isUpdate } = chat;

	const lastMessageText = messages[messages.length - 1]?.text;
	const lastMessageDate = formatDate(messages[messages.length - 1]?.date);

	const dispatch = useDispatch<AppDispatch>();
	const handleOpen = () => {
		const chatName = name;
		dispatch(openMessage(chatName));
	};

	return (
		<Link to={`/${name}`}>
			<div className={s.item} onClick={handleOpen}>
				<div className={s.ava}>
					<div>
						<img src={friends[idx]} alt='photo' />
					</div>
					{isUpdate && <p>1</p>}
				</div>
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
