export default interface WeatherData {
	main: {
		temp: number,
	},
	weather: {
		id: number,
		description: string,
		icon: string
	}[];
	sys: { country: string, sunrise: number, sunset: number };
}