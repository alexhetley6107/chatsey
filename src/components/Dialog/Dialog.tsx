import React, { useRef, useState } from 'react';
import s from './Dialog.module.scss';
import send from './../../assets/send.svg';
import Message from './Message/Message';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { sendMessage } from '../../redux/chatSlice';
import { fetchAnswer } from '../../redux/fetchAnswer';
import axios from 'axios';

function Dialog() {
	const { name } = useParams();
	const inputRef = useRef<HTMLInputElement>(null);
	const [value, setValue] = useState<string>('');

	const chats = useSelector((state: RootState) => state.chat.chats);

	const dialog = chats.find((c) => c.name === name);

	const dispatch = useDispatch<AppDispatch>();

	const handleSend = () => {
		const text = value.trim() as string;

		if (!text) return;

		const chatName = name as string;
		dispatch(sendMessage({ text, chatName }));
		setValue('');
		setTimeout(() => {
			dispatch(fetchAnswer(name as string));
		}, 5000);
	};

	return (
		<div className={s.dialog}>
			<div className={s.head}>
				<div className={s.ava}></div>
				<div className={s.name}>{dialog?.name}</div>
			</div>

			<div className={s.messages}>
				<div className={s.buffer}></div>
				{dialog?.messages.length === 0 ? (
					<div className={s.no_messages}>
						<p>Write something...</p>
					</div>
				) : (
					dialog?.messages.map((m) => <Message message={m} key={m.id} />)
				)}
			</div>

			<div className={s.bottom}>
				<div className={s.input}>
					<input
						ref={inputRef}
						value={value}
						onChange={() => setValue(inputRef.current?.value as string)}
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
