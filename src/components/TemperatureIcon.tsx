export default function TemperatureIcon({iconKey}: { iconKey: string }) {
	return (
		<img src={`https://openweathermap.org/img/wn/${iconKey}@2x.png`} style={{height: "10vw"}} alt=""/>
	);
}