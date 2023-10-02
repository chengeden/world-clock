import styled from "styled-components";
import BasicPointer from "./BasicPointer";

const HourPointerStyle = styled(BasicPointer)``;

HourPointerStyle.defaultProps = {
	rotate: 0,
	size: 100,
	bg_white: "#848484",
	bg_black: "#ff6767",
	width: 7,
};

const HourPointer = (props) => {
	return (
		<HourPointerStyle rotate={props.rotate} is_white={props.is_white} />
	);
};

export default HourPointer;