import Movie from '../components/Movie';
import useMovies from '../context/MoviesContext';

const App = () => {
	const { searchQuery, moviesList, fetchedPages, totalPages, updateMoviesList } = useMovies();

	// For results for search query
	const URL_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&include_adult=false&language=en-US&query=${searchQuery}&page=${
		fetchedPages + 1 || 1
	}`;
	// For new popular content on homepage
	const URL_POPULAR_NEW = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${fetchedPages + 1 || 1}`;

	const showMoreMovies = async () => {
		try {
			// * This will be help full in implementing pagination in the future
			if (fetchedPages >= totalPages) return null;
			// Check if we have to load more for home or the searchQuery
			const URL = searchQuery ? URL_SEARCH : URL_POPULAR_NEW;
			const response = await fetch(URL);
			const searchResults = await response.json();

			// Append to moviesList in state
			await updateMoviesList({ fetchedPages: searchResults.page, moviesList: searchResults.results });
			return searchResults.results;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<h2 className="header">{searchQuery ? `Showing results for '${searchQuery}'` : `Most Recent Movies`}</h2>

			<div className="movies-group">
				{moviesList.map(movie => (
					<Movie
						key={movie.id}
						id={movie.id}
						rating={movie.vote_average}
						title={movie.title}
						overview={movie.overview}
						// * Use this url to fetch image src: MovieDB Docs
						poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						releaseDate={movie.release_date}
						voteCount={movie.vote_count} // rating
					/>
				))}
			</div>
			<div className="movies-group">
				{totalPages > fetchedPages && (
					<button
						className="btn"
						onClick={showMoreMovies}>
						Show More
					</button>
				)}
			</div>
		</>
	);
};

export default App;
