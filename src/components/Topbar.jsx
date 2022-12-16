import logo from '../assets/logo.svg';
import { useState } from 'react';
import styles from '../styles/Topbar.module.css';

const Topbar = () => {
	const [query, setQuery] = useState('');
	const [movies, setMovies] = useState([]);

	const searchMovies = async () => {
		if (!query) return;

		const URL = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

		const response = await fetch(URL);

		const searchResults = await response.json();
		const IDs = new Set(movies.map(d => d.id));
		setMovies([...movies, ...searchResults.filter(d => !IDs.has(d.id))]);
		return data.results;
	};

	return (
		<div className={`${styles.navbar}`}>
			<img
				src={logo}
				alt="App Logo"
			/>

			<input
				type="search"
				name="query"
				id="query"
				value={query}
				onChange={e => setQuery(e.target.value)}
				onKeyDown={e => e.key === 'Enter' && searchMovies()}
				className={`${styles.searchBar}`}
				placeholder="Search for a movie"
			/>
		</div>
	);
};

export default Topbar;
