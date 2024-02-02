import { useKBar } from "kbar";
import { KbarButton, KbarContainer } from "./styles";

const KbarInit = () => {
	const kbar = useKBar();

	const handleOpenKbar = () => kbar.query.toggle();

	return (
		<KbarContainer>
			<KbarButton type="button" onClick={handleOpenKbar}>
				Press &nbsp;
				<code>ctrl</code>
				&nbsp;+&nbsp;
				<code>space</code>
				&nbsp; to start →
			</KbarButton>
		</KbarContainer>
	);
};

export { KbarInit };
