import { createContext, useReducer, useContext } from 'react';
import moviesReducer, { initialState } from './moviesReducer';

const MoviesContext = createContext(initialState);

export const MoviesProvider = ({ children }) => {
	const [state, dispatch] = useReducer(moviesReducer, initialState);

	const updateMoviesList = movieData => {
		// * movieData = { fetchedPages, moviesList }
		dispatch({ type: 'UPDATE_MOVIES_LIST', payload: movieData });
	};

	const updateSearchQuery = queryData => {
		// * queryData = { searchQuery, totalPages, totalMovies }
		dispatch({ type: 'UPDATE_SEARCH_QUERY', payload: queryData });
	};

	// const updateTheme = theme => {
	// 	dispatch({ type: 'UPDATE_THEME', payload: theme });
	// };

	const value = {
		...state,
		updateMoviesList,
		updateSearchQuery,
	};

	return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
};

const useMovies = () => {
	const context = useContext(MoviesContext);

	if (context === undefined) {
		throw new Error('useMoviesContext must be used within a MoviesProvider');
	}

	return context;
};

export default useMovies;
