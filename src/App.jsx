import './App.css';
import logo from './assets/logo.svg';
import Movie from './components/Movie';
import { useEffect } from 'react';

function App() {
	return (
		<div className="App">
			<div className="navbar">
				<img
					src={logo}
					alt="App Logo"
				/>
				<div className="line"></div>
				<header className="header">Most Recent Movies</header>
			</div>

			<div className="movies-group">
				<Movie
					id="44"
					rating="9.7"
				/>
				<Movie
					id="45"
					rating="8.8"
				/>
				<Movie
					id="46"
					rating="8.7"
				/>
				<Movie
					id="47"
					rating="9.7"
				/>
				<Movie
					id="48"
					rating="8.8"
				/>
				<Movie
					id="49"
					rating="9.7"
				/>
				<Movie
					id="34"
					rating="8.7"
				/>
				<Movie
					id="14"
					rating="9.7"
				/>
				<Movie
					id="24"
					rating="9.7"
				/>
			</div>
		</div>
	);
}

export default App;
