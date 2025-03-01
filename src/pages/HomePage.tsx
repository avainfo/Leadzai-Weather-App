import '../styles/App.css';
import Header from "../components/Header";
import {useEffect, useMemo, useState} from "react";
import Temperature from "../components/Temperature";
import TemperatureIcon from "../components/TemperatureIcon";
import WeatherFooter from "../layout/WeatherFooter";
import WeatherData from "../types/WeatherData";
import WeatherHeader from "../layout/WeatherHeader";

function HomePage() {
	const [isFahrenheit, setIsFahrenheit] = useState<boolean>(() => {
		return localStorage.getItem("isChecked") ? JSON.parse(localStorage.getItem("isChecked") as string) : false;
	});

	const [city, setCity] = useState<string>(() => {
		return localStorage.getItem("city") ? JSON.parse(localStorage.getItem("city") as string) : "Viana do Castelo";
	});

	useEffect(() => {
		localStorage.setItem("isChecked", JSON.stringify(isFahrenheit));
		localStorage.setItem("city", JSON.stringify(city));
	}, [isFahrenheit, city]);

	const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);


	const API_KEY = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		if (!API_KEY) {
			console.error("OpenWeatherMap API KEY missing in environment !");
			setError("Incorrect API configuration.");
			return;
		}
	}, []);

	const url = useMemo(() => {
		return `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${city}&units=metric`;
	}, [city]);

	useEffect(() => {
		if (!API_KEY) return;

		const controller = new AbortController();
		const timeout = setTimeout(() => controller.abort(), 7500);
		const signal = controller.signal;

		const fetchData = async () => {
			try {
				setLoading(true);
				setError(null);

				const response = await fetch(url, {signal});

				if (response.status === 404) {
					setError("City not found!");
					return;
				}

				if (!response.ok) {
					throw new Error("Failed to fetch weather data");
				}

				const data: WeatherData = await response.json();

				if (!data.main || !data.weather) {
					setError("Weather Data error!");
					return;
				}

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
		return () => {
			clearTimeout(timeout);
			controller.abort();
		};
	}, [city]);

	return (
		<div className="app">
			<Header/>
			{loading && <h1>Loading...</h1>}
			{error && <p style={{color: "red"}}>Error: {error}</p>}

			{weatherData && (
				<section className="body">
					<WeatherHeader
						onToggle={setIsFahrenheit}
						onSelectCity={(selectedCity) => setCity(selectedCity)}
						selectedCity={city}/>
					<Temperature
						temperature={weatherData.main.temp}
						isFahrenheit={isFahrenheit}/>
					<TemperatureIcon iconKey={weatherData.weather[0].icon}/>
					<WeatherFooter
						sunrise={weatherData.sys.sunrise}
						sunset={weatherData.sys.sunset}/>
				</section>
			)}
		</div>
	);
}

export default HomePage;
