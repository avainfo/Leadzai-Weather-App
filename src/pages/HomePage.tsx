import '../styles/App.css';
import Header from "../components/Header";
import Temperature from "../components/Temperature";
import TemperatureIcon from "../components/TemperatureIcon";
import WeatherFooter from "../layout/WeatherFooter";
import WeatherHeader from "../layout/WeatherHeader";
import useLocalStorage from "../hooks/useLocalStorage";
import useWeatherData from "../hooks/useWeatherData";

function HomePage() {
	const [isFahrenheit, setIsFahrenheit] = useLocalStorage<boolean>("isChecked", false);
	const [city, setCity] = useLocalStorage<string>("city", "Viana do Castelo");

	const {weatherData, loading, error} = useWeatherData(city, process.env.REACT_APP_API_KEY);

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
