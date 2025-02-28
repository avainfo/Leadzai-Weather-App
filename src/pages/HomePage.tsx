import '../styles/App.css';
import Header from "../components/Header";
import Selector from "../components/Selector";

function HomePage() {
	return (
		<div className="app">
			<Header/>
			<section className="body">
				<Selector/>
			</section>
		</div>
	);
}

export default HomePage;
