import styled from "styled-components";
import BasicPointer from "./BasicPointer";

const SecondPointerStyle = styled(BasicPointer)``;

SecondPointerStyle.defaultProps = {
	rotate: 60,
	size: 150,
	tail: 20,
	bg_white: "#ff6767",
	bg_black: "#69c0ff",
	width: 2,
};

const SecondPointer = (props) => {
	return (
		<SecondPointerStyle rotate={props.rotate} is_white={props.is_white} />
	);
};

export default SecondPointer;