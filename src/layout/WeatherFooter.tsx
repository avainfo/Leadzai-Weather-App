import "../styles/layout/WeatherFooter.css";
import SunTiming from "../components/SunTiming";

interface weatherFooterProps {
	sunrise: string,
	sunset: string
}

export default function WeatherFooter({sunrise, sunset}: weatherFooterProps) {
	return (
		<div className="weather-footer">
			<SunTiming text="Sunrise" hour={sunrise}/>
			<SunTiming text="Sunset" hour={sunset}/>
		</div>
	);
}