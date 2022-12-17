import logo from '../assets/logo.svg';
import { useEffect, useState } from 'react';
import styles from '../styles/Topbar.module.css';
import useMovies from '../context/MoviesContext';

const Topbar = () => {
	const [query, setQuery] = useState('');
	const [movies, setMovies] = useState([]);

	const { moviesList, searchQuery, fetchedPages, totalPages, totalMovies, updateMoviesList, updateSearchQuery } = useMovies();

	const searchMovies = async () => {
		if (!query) return;

		try {
			const URL = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

			const response = await fetch(URL);
			const searchResults = await response.json();

			await updateSearchQuery({ searchQuery: query, totalPages: searchResults.total_pages, totalMovies: searchResults.total_results });
			await updateMoviesList({ fetchedPages: searchResults.page, moviesList: searchResults.results });
			return searchResults.results;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
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
			<p>{`
			${searchQuery}
			${fetchedPages}
			${totalPages}
			${totalMovies}
			${JSON.stringify(moviesList)}
			`}</p>
		</>
	);
};

export default Topbar;
