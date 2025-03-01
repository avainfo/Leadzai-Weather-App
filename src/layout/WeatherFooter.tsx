import "../styles/layout/WeatherFooter.css";
import SunTiming from "../components/SunTiming";

interface weatherFooterProps {
	sunrise: number,
	sunset: number
}

function formatTime(timestamp: number) {
	return new Date(timestamp * 1000).toLocaleTimeString("fr-FR", {
		hour: "2-digit",
		minute: "2-digit",
		timeZone: "UTC",
	});
}

export default function WeatherFooter({sunrise, sunset}: weatherFooterProps) {

	return (
		<div className="weather-footer">
			<SunTiming text="Sunrise" hour={formatTime(sunrise)}/>
			<SunTiming text="Sunset" hour={formatTime(sunset)}/>
		</div>
	);
}