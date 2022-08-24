import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './App.module.scss';
import ChatsList from './ChatsList/ChatsList';
import ChooseChat from './Dialog/ChooseChat/ChooseChat';
import Dialog from './Dialog/Dialog';
import Header from './Header/Header';

function App() {
	const [isHide, setHide] = useState(false);

	const hide = () => {
		setHide(true);
	};
	const open = () => {
		setHide(false);
	};
	return (
		<div className={s.app}>
			<Header />
			<div className={s.window}>
				<ChatsList isHide={isHide} hide={hide} />
				<Routes>
					<Route path='/' element={<ChooseChat />} />
					<Route path='/:name' element={<Dialog openMenu={open} />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
