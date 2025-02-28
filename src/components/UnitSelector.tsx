import '../styles/components/UnitSelector.css';
import {useEffect, useState} from "react";

export default function UnitSelector() {
	const [isChecked, setIsChecked] = useState(
		() => JSON.parse(localStorage.getItem("isChecked") as string) || false
	);

	useEffect(() => {
		localStorage.setItem("isChecked", JSON.stringify(isChecked));
	}, [isChecked]);

	const handleToggle = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div className="unit-selector">
			<p>°C</p>
			<div className="switch">
				<span className="slider" style={{
					left: "calc(30px / 4 * " + (isChecked ? "-1" : "3") + ")"
				}} onClick={handleToggle}></span>
			</div>
			<p>°F</p>
		</div>
	);
}