import styled from "styled-components";
import Clock from "./clock/Clock";

const ClockGroup = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		max-width: 1200px;
`;

function App() {
	return (
		<ClockGroup>
			<Clock city={"Sydney"} timezone={11} />
			<Clock city={"Beijing"} timezone={8} />
			<Clock city={"London"} timezone={1} />
			<Clock city={"New York"} timezone={-4} />
		</ClockGroup>
	);
}

export default App;
