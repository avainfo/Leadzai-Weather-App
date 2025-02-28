import '../styles/App.css';
import Header from "../components/Header";
import WeatherHeader from "../layout/WeatherHeader";
import {useState} from "react";
import {Temperature} from "../components/Temperature";

function HomePage() {
	const [isFahrenheit, setIsFahrenheit] = useState(
		(): boolean => JSON.parse(localStorage.getItem("isChecked") as string) || false
	);
	return (
		<div className="app">
			<Header/>
			<section className="body">
				<WeatherHeader onToggle={setIsFahrenheit}/>
				<Temperature isFahrenheit={isFahrenheit}/>
			</section>
		</div>
	);
}

export default HomePage;
