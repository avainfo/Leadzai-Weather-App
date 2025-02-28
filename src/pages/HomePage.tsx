import '../styles/App.css';
import Header from "../components/Header";
import WeatherHeader from "../layout/WeatherHeader";

function HomePage() {
	return (
		<div className="app">
			<Header/>
			<section className="body">
				<WeatherHeader/>
			</section>
		</div>
	);
}

export default HomePage;
