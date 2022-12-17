import { useState } from 'react';
import Close from '../assets/24x24.svg';
import styles from '../styles/Modal.module.css';

// todo Move all the the functions using api to a seperate js file to clean up the code

const Modal = ({ open, onClose, title, image, releaseDate, overview, rating, voteCount }) => {
	if (!open) return null;

	return (
		<div className={`${styles.overlay}`}>
			<div
				className={`${styles.modalContainer}`}
				onClick={e => e.stopPropagation()}>
				<div className={`${styles.modalHead}`}>
					<h2>{title}</h2>
					<img
						src={Close}
						alt="Close"
						onClick={onClose}
					/>
				</div>
				<div className={`${styles.modalBody}`}>
					<img
						// image url source: MovieDB API
						src={`https://image.tmdb.org/t/p/w500${image}`}
						alt="Movie Poster"
						onClick={onClose}
						className={`${styles.modalPoster}`}
					/>
					<div className={`${styles.modalInfo}`}>
						<p>
							<span className={`${styles.bold}`}>Release date:</span> <span>{releaseDate}</span>
						</p>
						<p>{overview}</p>
						<p>
							<span className={`${styles.bold}`}>{rating}</span>
							<span>/10 ({voteCount} total votes)</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
