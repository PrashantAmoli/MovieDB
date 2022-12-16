import './App.css';
import { useEffect, useState } from 'react';
import Topbar from './components/Topbar';
import Movie from './components/Movie';
import Modal from './components/Modal';

function App() {
	const [openModal, setOpenModal] = useState(false);
	const [movies, setMovies] = useState([...sample]);

	useEffect(() => {
		const updateMovies = async () => {
			const newMovies = await getMovies();
			const IDs = new Set(movies.map(d => d.id));
			setMovies([...movies, ...newMovies.filter(d => !IDs.has(d.id))]);
		};
		updateMovies();
	}, []);

	const getMovies = async () => {
		const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`);
		const data = await response.json();
		return data.results;
	};

	return (
		<>
			<div className="App">
				<Topbar />

				<div className="line"></div>
				<header className="header">Most Recent Movies</header>

				<div className="movies-group">
					{movies.map(movie => (
						<Movie
							key={movie.id}
							id={movie.id}
							rating={movie.vote_average}
							title={movie.title}
							overview={movie.overview}
							poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							releaseDate={movie.release_date}
							voteCount={movie.vote_count}
							onClick={e => {
								console.log('clicked', e.target);
								setOpenModal(true);
							}}
						/>
					))}
				</div>

				{/* <p>{JSON.stringify(movies)}</p> */}
			</div>
		</>
	);
}

export default App;

const sample = [
	{
		adult: false,
		backdrop_path: '/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg',
		genre_ids: [28, 14, 878],
		id: 436270,
		original_language: 'en',
		original_title: 'Black Adam',
		overview:
			'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.',
		popularity: 4641.041,
		poster_path: '/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
		release_date: '2022-10-19',
		title: 'Black Adam',
		video: false,
		vote_average: 7.3,
		vote_count: 2806,
	},
	{
		adult: false,
		backdrop_path: '/53BC9F2tpZnsGno2cLhzvGprDYS.jpg',
		genre_ids: [14, 28, 12],
		id: 736526,
		original_language: 'no',
		original_title: 'Troll',
		overview:
			'Deep inside the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is fast approaching the capital of Norway. But how do you stop something you thought only existed in Norwegian folklore?',
		popularity: 3602.012,
		poster_path: '/9z4jRr43JdtU66P0iy8h18OyLql.jpg',
		release_date: '2022-12-01',
		title: 'Troll',
		video: false,
		vote_average: 6.8,
		vote_count: 611,
	},
	{
		adult: false,
		backdrop_path: '/7zQJYV02yehWrQN6NjKsBorqUUS.jpg',
		genre_ids: [28, 18, 36],
		id: 724495,
		original_language: 'en',
		original_title: 'The Woman King',
		overview:
			'The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.',
		popularity: 2451.611,
		poster_path: '/lQMJHnHxUyj8kJlC2YOKNuzuwMP.jpg',
		release_date: '2022-09-15',
		title: 'The Woman King',
		video: false,
		vote_average: 7.9,
		vote_count: 741,
	},
	{
		adult: false,
		backdrop_path: '/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg',
		genre_ids: [878, 28, 12],
		id: 76600,
		original_language: 'en',
		original_title: 'Avatar: The Way of Water',
		overview:
			'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
		popularity: 2397.84,
		poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
		release_date: '2022-12-14',
		title: 'Avatar: The Way of Water',
		video: false,
		vote_average: 8.2,
		vote_count: 203,
	},
	{
		adult: false,
		backdrop_path: '/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg',
		genre_ids: [14, 28, 35, 80],
		id: 1013860,
		original_language: 'en',
		original_title: 'R.I.P.D. 2: Rise of the Damned Trilogy',
		overview: 'When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.',
		popularity: 1936.567,
		poster_path: '/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg',
		release_date: '2022-11-15',
		title: 'R.I.P.D. 2: Rise of the Damned',
		video: false,
		vote_average: 6.7,
		vote_count: 240,
	},
];
