import styled from "styled-components";

const ClockCenterStyle = styled.div`
	width: ${(props) => props.size};
	height: ${(props) => props.size};
	background: ${(props) => props.bg};
	border: ${(props) => props.border};
	border-radius: 50%;
	z-index: 999;
`;

ClockCenterStyle.defaultProps = {
	size: "15px",
	bg: "#848484",
	border: "2px solid #fff"
};

const ClockCenter = () => {
	return (
		<ClockCenterStyle />
	);
};

export default ClockCenter;