import type { NextPage } from "next";
import styled from "styled-components";
import React, { useState, useEffect, useMemo, useCallback } from "react";
// useEffect: Similar to componentDidMount and componentDidUpdate

const PracticeButton = styled.button<{ isSelected: boolean }>`
	border: ${(props) => (props.isSelected ? "2px solid blue" : "")};
`;

const Practice: NextPage = () => {
	const [selectedColor, setSelectedColor] = useState("");
	const [changedCount, setChangedCount] = useState(-1);

	const onClick = useCallback((e: Event) => {
		e.preventDefault();

		const newColor = e.target.value;
		console.log(`${newColor} button clicked`);

		setSelectedColor(newColor);
	}, []);

	useEffect(() => {
		setChangedCount(changedCount + 1);
	}, [selectedColor]);

	// useMemo? useCallbak?
	// useCallback도 주어진 인자가 변경될때 실행되는 것 아닌가? 뭐가다르지
	const setSelectedColorLen = useMemo(
		() => selectedColor.length,
		[selectedColor.length]
	);

	return (
		<div>
			<div>My favorite color is {selectedColor}</div>
			<div>Change Count: {changedCount}</div>
			<div>Length of color: {setSelectedColorLen}</div>
			<PracticeButton
				value="blue"
				onClick={onClick}
				isSelected={selectedColor === "blue"}
			>
				blue
			</PracticeButton>
			<PracticeButton
				value="red"
				onClick={onClick}
				isSelected={selectedColor === "red"}
			>
				red
			</PracticeButton>
			<PracticeButton
				value="green"
				onClick={onClick}
				isSelected={selectedColor === "green"}
			>
				green
			</PracticeButton>
		</div>
	);
};

export default Practice;
