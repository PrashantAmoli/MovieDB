import './App.css';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import { MoviesProvider } from './context/MoviesContext';

function App() {
	return (
		<MoviesProvider>
			<Topbar />
			<Home />
		</MoviesProvider>
	);
}

export default App;
