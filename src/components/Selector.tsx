import '../styles/components/Selector.css';

interface SelectorProps {
	onSelectCity: (city: string) => void
}

export default function Selector({onSelectCity}: SelectorProps) {
	return (
		<select name="city" id="city" onChange={(e) => onSelectCity(e.target.value)}>
			<option value="porto">Porto</option>
			<option value="paris">Paris</option>
			<option value="los angeles">Los Angeles</option>
		</select>
	);
}