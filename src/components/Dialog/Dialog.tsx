import React, { KeyboardEvent, useEffect, useState } from 'react';
import s from './Dialog.module.scss';
import send from './../../assets/send.svg';
import Message from './Message/Message';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { openMessage, sendMessage } from '../../redux/chatSlice';
import { fetchAnswer } from '../../redux/fetchAnswer';
import friends from './../../assets/friends/Friends';
import Chat from '../../models/chat';
import arrow from './../../assets/arrow.svg';

type Props = {
	openMenu: () => void;
};

function Dialog({ openMenu }: Props) {
	const params = useParams();
	const { name } = params;

	const [value, setValue] = useState<string>('');
	const [isTyping, setTyping] = useState<boolean>(false);

	const chats = useSelector((state: RootState) => state.chat.chats);
	const sentTo = useSelector((state: RootState) => state.chat.sentTo);

	const { idx, messages, isUpdate } = chats.find((c) => c.name === name) as Chat;

	const dispatch = useDispatch<AppDispatch>();

	const handleSend = () => {
		const text = value.trim() as string;

		if (!text) return;

		const chatName = name as string;
		dispatch(sendMessage({ text, chatName }));
		setValue('');
		setTimeout(() => {
			dispatch(fetchAnswer());
		}, 8000);
	};

	const onPressEnter = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleSend();
		}
	};

	useEffect(() => {
		if (sentTo === name) {
			setTyping(true);
		} else {
			setTyping(false);
		}

		if (params.name === name) {
			const chatName = name;
			dispatch(openMessage(chatName as string));
		}
	}, [params, sentTo, isUpdate]);

	return (
		<div className={s.dialog}>
			<div className={s.head}>
				<Link to='/'>
					<div className={s.arrow} onClick={openMenu}>
						<img src={arrow} alt='arrow' />
					</div>
				</Link>
				<div className={s.ava}>
					<img src={friends[idx]} alt='photo' />
				</div>
				<div className={s.info}>
					<p className={s.name}>{name}</p>
					<p className={s.do}>{isTyping ? 'Typing...' : 'Online'}</p>
				</div>
			</div>

			<div className={s.messages}>
				<div className={s.buffer}></div>
				{messages.length === 0 ? (
					<div className={s.no_messages}>
						<p>Write something...</p>
					</div>
				) : (
					messages.map((m) => <Message message={m} key={m.id} />)
				)}
			</div>

			<div className={s.bottom}>
				<div className={s.input}>
					<input
						value={value}
						onChange={(e) => setValue(e.target.value)}
						onKeyUp={onPressEnter}
						type='text'
						placeholder='Type you message'
					/>
					<img src={send} onClick={handleSend} />
				</div>
			</div>
		</div>
	);
}

export default Dialog;
