import { Route, Routes } from 'react-router-dom';
import s from './App.module.scss';
import ChatsList from './ChatsList/ChatsList';
import ChooseChat from './Dialog/ChooseChat/ChooseChat';
import Dialog from './Dialog/Dialog';
import Header from './Header/Header';

function App() {
	return (
		<div className={s.app}>
			<Header />
			<div className={s.window}>
				<ChatsList />
				<Routes>
					<Route path='/' element={<ChooseChat />} />
					<Route path='/:name' element={<Dialog />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
