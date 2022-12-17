export const initialState = {
	moviesList: [],
	searchQuery: '', // last executed searchQuery '' means Homepage/new & popular movies
	fetchedPages: 0, // to keep count of pages fetched
	totalPages: 0,
	totalMovies: 0,
}; // * API returns <=20 videos per page

const moviesReducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE_MOVIES_LIST':
			// { fetchedPages, moviesList[] }
			const { moviesList: newMoviesList } = action.payload; // Obj. Destructuring with alias
			const IDs = new Set(state.moviesList.map(movie => movie.id));
			// filtering out movies without poster (better UI) and create a union without duplicates
			const newMovies = [...newMoviesList.filter(movie => !IDs.has(movie.id) && movie.poster_path)];
			// todo implement some solution for movies without poster
			return {
				...state,
				fetchedPages: action.payload.fetchedPages,
				moviesList: [...state.moviesList, ...newMovies],
			};

		case 'NEW_MOVIES_LIST':
			// { fetchedPages, moviesList[] }
			const { fetchedPages, searchQuery, totalMovies, totalPages, moviesList } = action.payload;
			// Remove old movies and add new movies only
			return {
				...state,
				searchQuery,
				fetchedPages,
				totalPages,
				totalMovies,
				// filtering out movies without poster
				moviesList: [...moviesList.filter(movie => movie.poster_path)],
			};

		default:
			return state;
	}
};

export default moviesReducer;
