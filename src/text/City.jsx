import styled from "styled-components";

const CityStyle = styled.div`
	margin-bottom: ${(props) => props.margin_bottom};
	font-size: ${(props) => props.font_size};
	font-weight: ${(props) => props.font_weight};
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
`;

CityStyle.defaultProps = {
	margin_bottom: "15px",
	font_size: "2rem",
	font_weight: "600"
};

const City = (props) => {
	return (
		<CityStyle>{props.children}</CityStyle>
	);
};

export default City;