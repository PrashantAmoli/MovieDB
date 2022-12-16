import styles from '../styles/MovieCard.module.css';
import Modal from './Modal';
import { useState } from 'react';

const Movie = ({ id, rating, poster, title, overview, releaseDate, voteCount }) => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<div
				className={`${styles.movieBox}`}
				onClick={() => setOpenModal(true)}>
				<span className={`${styles.rating} ${styles.ratingBox}`}>{rating}</span>
				<img
					src={poster || `https://xsgames.co/randomusers/assets/avatars/male/${id}.jpg`}
					alt="Movie Poster"
					className={`${styles.moviePoster}`}
				/>
				<div className={`${styles.titleBox}`}>
					<p className={`${styles.movieTitle}`}>{title}</p>
				</div>
			</div>
			<Modal
				open={openModal}
				key={id + 1}
				title={title}
				image={poster}
				rating={rating}
				overview={overview}
				voteCount={voteCount}
				releaseDate={releaseDate}
				onClose={() => setOpenModal(false)}
			/>
		</>
	);
};

export default Movie;
