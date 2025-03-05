import {useEffect, useMemo, useState} from "react";
import WeatherData from "../types/WeatherData";

function useWeatherData(city: string, API_KEY?: string) {
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const url = useMemo(() => {
		return `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${city}&units=metric`;
	}, [city, API_KEY]);

	useEffect(() => {
		if (!API_KEY) {
			setError("Incorrect API configuration.");
			setLoading(false);
			return;
		}

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
		};

		fetchData();

		return () => {
			clearTimeout(timeout);
			controller.abort();
		};
	}, [url]);

	return {weatherData, loading, error};
}

export default useWeatherData;
