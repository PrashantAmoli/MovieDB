import styles from '../styles/MovieCard.module.css';

const Movie = ({ id, rating, poster, title, overview, releaseDate, voteCount }) => {
	return (
		<div className={`${styles.movie_box}`}>
			<span className={`${styles.rating} ${styles.rating_box}`}>{rating}</span>
			<img
				src={poster || `https://xsgames.co/randomusers/assets/avatars/male/${id}.jpg`}
				alt="Movie Poster"
				className={`${styles.movie_poster}`}
			/>
			<h3 className={`${styles.movie_title}`}>{title}</h3>
		</div>
	);
};

export default Movie;
