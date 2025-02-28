import '../styles/App.css';
import Header from "../components/Header";
import Selector from "../components/Selector";
import UnitSelector from "../components/UnitSelector";

function HomePage() {
	return (
		<div className="app">
			<Header/>
			<section className="body">
				<Selector/>
				<UnitSelector/>
			</section>
		</div>
	);
}

export default HomePage;
