import { Route, Routes } from 'react-router-dom';
import s from './App.module.scss';
import ChatsList from './ChatsList/ChatsList';
import Dialog from './Dialog/Dialog';
import Header from './Header/Header';

function App() {
	return (
		<div className={s.app}>
			<Header />
			<div className={s.window}>
				<ChatsList />
				<Routes>
					<Route path='/' element={<h2>Choose chat</h2>} />
					<Route path='/:name' element={<Dialog />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
