import Selector from "../components/Selector";
import UnitSelector from "../components/UnitSelector";
import '../styles/layout/WeatherHeader.css'

interface WeatherHeaderProps {
	onToggle: (b: boolean) => void,
	onSelectCity: (city: string) => void,
	selectedCity: string
}

export default function WeatherHeader({onToggle, onSelectCity, selectedCity}: WeatherHeaderProps) {
	return <div className="weather-header">
		<Selector onSelectCity={onSelectCity} selectedCity={selectedCity}/>
		<UnitSelector onToggle={onToggle}/>
	</div>;
}