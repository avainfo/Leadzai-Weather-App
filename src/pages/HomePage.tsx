import '../styles/App.css';
import Header from "../components/Header";
import WeatherHeader from "../layout/WeatherHeader";
import {useState} from "react";
import {Temperature} from "../components/Temperature";
import {TemperatureIcon} from "../components/TemperatureIcon";
import WeatherFooter from "../layout/WeatherFooter";

function HomePage() {
	const [isFahrenheit, setIsFahrenheit] = useState(
		(): boolean => JSON.parse(localStorage.getItem("isChecked") as string) || false
	);
	return (
		<div className="app">
			<Header/>
			<section className="body">
				<WeatherHeader onToggle={setIsFahrenheit}/>
				<Temperature temperature={15} isFahrenheit={isFahrenheit}/>
				<TemperatureIcon/>
				<WeatherFooter sunrise={"7:47"} sunset={"18:42"}/>
			</section>
		</div>
	);
}

export default HomePage;
