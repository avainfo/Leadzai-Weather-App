export function Temperature(props: { isFahrenheit: boolean }) {
	return (
		<h2 style={{fontSize: "10vw", color: "white"}}>
			15{props.isFahrenheit ? "°F" : "°C"}
		</h2>
	);
}