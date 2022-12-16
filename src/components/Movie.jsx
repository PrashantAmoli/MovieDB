import styles from '../styles/MovieCard.module.css';

const Movie = ({ id, rating }) => {
	return (
		<div className={`${styles.movie_box}`}>
			<span className={`${styles.rating} ${styles.rating_box}`}>{rating}</span>
			<img
				src={`https://xsgames.co/randomusers/assets/avatars/male/${id}.jpg`}
				alt="Movie Poster"
				className={`${styles.movie_poster}`}
			/>
			<h3 className={`${styles.movie_title}`}>Godzilla vs. Kong </h3>
		</div>
	);
};

export default Movie;
