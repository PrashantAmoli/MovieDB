import logo from '../assets/logo.svg';
import { useState } from 'react';

const Topbar = () => {
	const [query, setQuery] = useState('');

	const searchQuery = () => {
		console.log('Searching for', query);
	};

	return (
		<div className="navbar">
			<img
				src={logo}
				alt="App Logo"
			/>
			<input
				type="search"
				name="query"
				id="query"
				value={query}
				onChange={e => setQuery(e.target.value)}
				onKeyDown={e => e.key === 'Enter' && searchQuery()}
				className="search-bar"
				placeholder="Search for a movie"
			/>
		</div>
	);
};

export default Topbar;
