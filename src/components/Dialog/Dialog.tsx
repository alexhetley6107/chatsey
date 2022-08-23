import React from 'react';
import s from './Dialog.module.scss';
import send from './../../assets/send.svg';
import Message from './Message/Message';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function Dialog() {
	const { name } = useParams();

	const chats = useSelector((state: RootState) => state.chat.chats);

	const dialog = chats.find((c) => c.name === name);

	return (
		<div className={s.dialog}>
			<div className={s.head}>
				<div className={s.ava}></div>
				<div className={s.name}>{dialog?.name}</div>
			</div>

			<div className={s.messages}>
				{dialog?.messages.map((m) => (
					<Message message={m} />
				))}
			</div>

			<div className={s.bottom}>
				<div className={s.input}>
					<input type='text' placeholder='Type you message' />
					<img src={send} />
				</div>
			</div>
		</div>
	);
}

export default Dialog;
