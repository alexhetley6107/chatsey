import React, { useEffect, useRef, useState } from 'react';
import ChatItem from './ChatItem/ChatItem';
import s from './ChatsList.module.scss';
import searchImg from './../../assets/search.svg';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Chat from '../../models/chat';

type Props = {
	isHide: boolean;
	hide: () => void;
};

export default function ChatsList({ isHide, hide }: Props) {
	const chats = useSelector((state: RootState) => state.chat.chats);

	const inputRef = useRef<HTMLInputElement>(null);
	const [search, setSearch] = useState<string>('');
	const [searchChats, setSearchChats] = useState<Chat[]>([]);

	const handleSearch = () => {
		const value = search.trim().toLowerCase();
		value !== ''
			? setSearchChats(chats.filter((c) => c.name.trim().toLowerCase().includes(value)))
			: setSearchChats(chats);
	};

	useEffect(() => {
		handleSearch();
	}, [search, chats]);

	return (
		<div className={isHide ? s.chatlistHide : s.chatlist}>
			<div className={s.head}>
				<div className={s.ava}></div>
				<div className={s.input}>
					<img src={searchImg} />
					<input
						ref={inputRef}
						value={search}
						onChange={() => setSearch(inputRef.current?.value as string)}
						type='text'
						placeholder='search chat...'
					/>
				</div>
			</div>
			<p onClick={hide}>Chats</p>

			<div className={s.chats} onClick={hide}>
				{searchChats.length > 0 ? (
					searchChats.map((c: any) => <ChatItem chat={c} key={c.name} />)
				) : (
					<p>No chats</p>
				)}
			</div>
		</div>
	);
}
