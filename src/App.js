import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";

import { getGames } from './components/services/gameService';

import { Catalogue } from './components/Catalogue/Catalogue';
import { CreatePage } from './components/CreatePage/CreatePage';
import { DetailsPage } from './components/DetailsPage/DetailsPage';
import { EditPage } from './components/EditPage/EditPage';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';

function App() {

	const [games, setGames] = useState([]);

	useEffect(() => {
		getGames()
			.then(res => {
				setGames(res);
			});
	}, []);

	const addComment = (gameId, comment) => {
		setGames(state => {
			const game = state.find(x => x._id == gameId);
			const comments = game.comments || [];
			comments.push(comment);

			return [
				...state.filter(x => x._id !== gameId),
				{...game, comments}
			]
		})
	}


	return (
		<div id="box">

			<Header />

			{/* Main Content */}
			<main id="main-content">
				<Routes>

					<Route path='/' element={<Home games={games} />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/create' element={<CreatePage />} />
					<Route path='/edit' element={<EditPage />} />
					<Route path='/details' element={<DetailsPage />} />
					<Route path='/catalogue' element={<Catalogue games={games} />} />
					<Route path='/catalogue/:gameId' element={<DetailsPage key={games._id} games={games} addComment={addComment} />} />

				</Routes>

			</main>

		</div>
	);
}

export default App;
