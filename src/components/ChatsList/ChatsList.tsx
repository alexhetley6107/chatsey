import React from 'react';
import ChatItem from './ChatItem/ChatItem';
import s from './ChatsList.module.scss';
import search from './../../assets/search.svg';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

type Props = {};

export default function ChatsList({}: Props) {
	const chats = useSelector((state: RootState) => state.chat.chats);

	console.log(chats);

	return (
		<div className={s.chatlist}>
			<div className={s.head}>
				<div className={s.ava}></div>
				<div className={s.input}>
					<img src={search} />
					<input type='text' placeholder='search chat...' />
				</div>
			</div>
			<p>Chats</p>

			<div className={s.chats}>
				{chats.map((c: any) => (
					<ChatItem chat={c} key={c.name} />
				))}
			</div>
		</div>
	);
}
