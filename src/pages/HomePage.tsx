import '../styles/App.css';
import Header from "../components/Header";
import {useEffect, useState} from "react";
import {Temperature} from "../components/Temperature";
import {TemperatureIcon} from "../components/TemperatureIcon";
import WeatherFooter from "../layout/WeatherFooter";
import {WeatherData} from "../types/WeatherData";
import WeatherHeader from "../layout/WeatherHeader";

function HomePage() {
	const [isFahrenheit, setIsFahrenheit] = useState(
		(): boolean => JSON.parse(localStorage.getItem("isChecked") as string) || false
	);
	const [city, setCity] = useState(
		(): boolean => JSON.parse(localStorage.getItem("city") as string) || "Viana do Castelo"
	);

	const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const API_KEY = process.env.REACT_APP_API_KEY;
	const url = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${city}&units=metric`;

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		const fetchData = async () => {
			try {
				setLoading(true);
				setError(null);

				const response = await fetch(url, {signal});

				if (!response.ok) {
					throw new Error("Failed to fetch weather data");
				}

				const data: WeatherData = await response.json();

				setWeatherData(data);
			} catch (e) {
				if (e instanceof Error && e.name !== "AbortError") {
					setError(e.message);
				}
			} finally {
				setLoading(false);
			}
		}

		fetchData();
		return () => controller.abort();
	}, []);

	return (
		<div className="app">
			<Header/>
			{loading && <h1>Loading...</h1>}
			{error && <p style={{color: "red"}}>Error: {error}</p>}

			{weatherData && (
				<section className="body">
					<WeatherHeader onToggle={setIsFahrenheit}/>
					<Temperature
						temperature={weatherData.main.temp}
						isFahrenheit={isFahrenheit}/>
					<TemperatureIcon/>
					<WeatherFooter
						sunrise={weatherData.sys.sunrise}
						sunset={weatherData.sys.sunset}/>
				</section>
			)}
		</div>
	);
}

export default HomePage;
