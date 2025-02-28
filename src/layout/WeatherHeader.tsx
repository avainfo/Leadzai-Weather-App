import Selector from "../components/Selector";
import UnitSelector from "../components/UnitSelector";
import '../styles/layout/WeatherHeader.css'

export default function WeatherHeader() {
	return <div className="weather-header">
		<Selector/>
		<UnitSelector/>
	</div>;
}