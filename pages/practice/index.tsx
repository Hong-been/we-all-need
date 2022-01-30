import type { NextPage } from "next";
import styled from "styled-components";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { ColorButton } from "components/ColorButton/index";

export type Color = "red" | "blue" | "green";
const COLORS: Color[] = ["blue", "green", "red"];

const Practice: NextPage = () => {
	const [selectedColor, setSelectedColor] = useState("");
	const [changedCount, setChangedCount] = useState(-1);

	const onClick = useCallback((color: Color) => {
		switch (color) {
			case "red":
				console.log("apple");
				break;
			case "green":
				console.log("green tea");
				break;
			case "blue":
				console.log("ocean");
				break;
		}

		setSelectedColor(color);
	}, []);

	useEffect(() => {
		setChangedCount(changedCount + 1);
	}, [selectedColor]);

	const setSelectedColorLen = useMemo(
		() => selectedColor.length,
		[selectedColor.length]
	);

	return (
		<div>
			<div>My favorite color is {selectedColor}</div>
			<div>Change Count: {changedCount}</div>
			<div>Length of color: {setSelectedColorLen}</div>
			{COLORS.map((color) => (
				<ColorButton
					key={`color-button-${color}`}
					color={color}
					onClickCallback={onClick}
					isSelected={selectedColor === color}
				/>
			))}
		</div>
	);
};

export default Practice;
