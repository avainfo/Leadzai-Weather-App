export function Temperature(props: { temperature: number, isFahrenheit: boolean }) {
	return (
		<h2 style={{fontSize: "10vw", color: "white", margin: "5vh 0"}}>
			{props.isFahrenheit ? (props.temperature * (9 / 5) + 32) + "°F" : props.temperature + "°C"}
		</h2>
	);
}