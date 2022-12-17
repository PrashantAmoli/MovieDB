export const initialState = {
	moviesList: [],
	searchQuery: '300',
	fetchedPages: 0,
	totalPages: 2,
	totalMovies: 30,
}; // * API returns <=20 videos per page

const moviesReducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE_THEME':
			return {
				...state,
				transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
			};

		case 'UPDATE_SEARCH_QUERY':
			// { searchQuery, totalPages, totalMovies }
			return {
				...state,
				...action.payload,
			};

		case 'UPDATE_MOVIES_LIST':
			// { fetchedPages, moviesList[] }
			const { fetchedPages, moviesList } = action.payload;
			const IDs = new Set(state.moviesList.map(movie => movie.id));
			const newMovies = [...moviesList.filter(movie => !IDs.has(movie.id))];
			return {
				...state,
				fetchedPages,
				// moviesList: [...state.moviesList, ...action.payload.moviesList.filter(movie => movie.id !== IDs.has(movie.id))],
				moviesList: [...state.moviesList, ...newMovies],
			};

		default:
			return state;
	}
};

export default moviesReducer;
