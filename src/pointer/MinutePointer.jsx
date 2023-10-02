import styled from "styled-components";
import BasicPointer from "./BasicPointer";

const MinutePointerStyle = styled(BasicPointer)``;

MinutePointerStyle.defaultProps = {
	rotate: 30,
	size: 130,
	bg_white: "#848484",
	bg_black: "#fff",
	width: 4,
};

const MinutePointer = (props) => {
	return (
		<MinutePointerStyle rotate={props.rotate} is_white={props.is_white} />
	);
};

export default MinutePointer;