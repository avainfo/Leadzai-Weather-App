interface SunTimingProps {
	text: string,
	hour: string
}

export default function SunTiming({text, hour}: SunTimingProps) {
	return (
		<h3 style={{textAlign: "center", color: "white", fontSize: "25px", fontWeight: "normal"}}>
			{text}: {hour}
		</h3>
	);
}