import styled from "styled-components";

const TimeStyle = styled.div`
	margin-top: ${(props) => props.margin_top};
	font-size: ${(props) => props.font_size};
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
`;

TimeStyle.defaultProps = {
	margin_top: "15px",
	font_size: "2rem"
};

const Time = (props) => {
	return (
		<TimeStyle>{props.children}</TimeStyle>
	);
};

export default Time;