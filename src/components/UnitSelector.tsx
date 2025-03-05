import '../styles/components/UnitSelector.css';
import {useEffect, useState} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function UnitSelector({onToggle}: { onToggle: (b: boolean) => void }) {
	const [isChecked, setIsChecked] = useLocalStorage<boolean>("isChecked", false);

	useEffect(() => {
		localStorage.setItem("isChecked", JSON.stringify(isChecked));
	}, [isChecked]);

	const handleToggle = () => {
		setIsChecked(!isChecked);
		onToggle(!isChecked)
	};

	return (
		<div className="unit-selector">
			<p>°C</p>
			<div className="switch">
				<span className="slider" style={{
					left: "calc(30px / 4 * " + (isChecked ? "4" : "-1") + ")"
				}} onClick={handleToggle}></span>
			</div>
			<p>°F</p>
		</div>
	);
}