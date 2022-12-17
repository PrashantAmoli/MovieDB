import logo from '../assets/logo.svg';
import { useEffect } from 'react';
import styles from '../styles/Topbar.module.css';
import useMovies from '../context/MoviesContext';

// todo Move all the the functions using api to a seperate js file to clean up the code

const Topbar = () => {
	const { searchQuery, updateNewMoviesList } = useMovies();

	useEffect(() => {
		getPopularMovies();
	}, []);

	const URL_POPULAR_NEW = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`;

	const getPopularMovies = async e => {
		// Returns new and popular movies to context for the homepage
		try {
			const response = await fetch(URL_POPULAR_NEW);
			const searchResults = await response.json();

			const moviesData = {
				searchQuery: '',
				totalPages: searchResults.total_pages,
				totalMovies: searchResults.total_results,
				fetchedPages: searchResults.page,
				moviesList: searchResults.results,
			};

			// Create new movies list in context & discard old
			await updateNewMoviesList(moviesData);
			return searchResults.results;
		} catch (error) {
			console.log(error);
		}
	};

	const searchMovies = async e => {
		try {
			// if no value or same value
			if (!e.target.value || e.target.value === searchQuery) return null;

			const URL_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&include_adult=false&language=en-US&query=${e.target.value}&page=1`;

			const response = await fetch(URL_SEARCH);
			const searchResults = await response.json();

			const moviesData = {
				searchQuery: e.target.value, // Send current query
				totalPages: searchResults.total_pages,
				totalMovies: searchResults.total_results,
				fetchedPages: searchResults.page,
				moviesList: searchResults.results,
			};
			// Update state by discarding old values in context
			await updateNewMoviesList(moviesData);
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
					onClick={getPopularMovies}
				/>

				<input
					type="search"
					name="query"
					id="query"
					// Fetch on Enter
					onKeyDown={e => e.key === 'Enter' && searchMovies(e)}
					className={`${styles.searchBar}`}
					placeholder="Search for a movie"
					autoFocus
				/>
			</div>

			<div className={`${styles.line}`}></div>
		</>
	);
};

export default Topbar;
