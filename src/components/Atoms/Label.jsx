import styled from "styled-components";

const LabelStyled = styled.label`
    font-weight: 600;
    font-size: 20px;
    margin-top: -40px;
    position: absolute;
`;

function Label(props) {
    return(
        <LabelStyled>{props.text}</LabelStyled>
    )
}

export default Label;