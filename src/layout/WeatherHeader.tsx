import Selector from "../components/Selector";
import UnitSelector from "../components/UnitSelector";
import '../styles/layout/WeatherHeader.css'

interface WeatherHeaderProps {
	onToggle: (b: boolean) => void,
	onSelectCity: (city: string) => void
}

export default function WeatherHeader({onToggle, onSelectCity}: WeatherHeaderProps) {
	return <div className="weather-header">
		<Selector onSelectCity={onSelectCity}/>
		<UnitSelector onToggle={onToggle}/>
	</div>;
}