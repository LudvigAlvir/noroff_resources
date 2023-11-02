import styled from "styled-components";

export const BaseButton = styled.button`
	background-color: white;
	border: 2px solid black;
	border-radius: 6px;
	padding: 10px 20px;
	cursor: pointer;
	transition: background-color linear 800ms, color linear 2000ms;

	:hover {
		background-color: black;
		color: white;
	}
`;

export const PrimaryButton = styled(BaseButton)`
	background-color: red;
`;

export const SecondaryButton = styled(BaseButton)`
	background-color: yellow;
`;

export const TertiaryButton = styled(BaseButton)`
	background-color: black;
	color: white;
	:hover {
		background-color: white;
		color: black;
	}
`;
