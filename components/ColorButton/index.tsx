import type { NextPage } from "next";
import styled from "styled-components";
import React, { FunctionComponent, useCallback } from "react";
import { Color } from "pages/practice/index";

const PracticeButton = styled.button<{ isSelected: boolean }>`
	border: ${(props) => (props.isSelected ? "2px solid blue" : "")};
`;

export type ColorButtonProps = {
	color: Color;
	onClickCallback: (value: Color) => void;
	isSelected: boolean;
};

export const ColorButton: FunctionComponent<ColorButtonProps> = ({
	color,
	onClickCallback,
	isSelected,
}) => {
	return (
		<PracticeButton
			onClick={() => onClickCallback(color)}
			isSelected={isSelected}
		>
			{color}
		</PracticeButton>
	);
};
