import React from "react";
import * as S from "./App.styles";
function App() {
	return (
		<div>
			<S.BaseButton>Base button</S.BaseButton>
			<S.PrimaryButton>Primary button</S.PrimaryButton>
			<S.SecondaryButton>Secondary button</S.SecondaryButton>
			<S.TertiaryButton>Tertiary button</S.TertiaryButton>
		</div>
	);
}

export default App;
