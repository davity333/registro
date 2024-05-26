import styled from "styled-components";
import React from "react";

const SpanStyled = styled.span`
    position: absolute;
    font-size: 30px;
    margin-top: 55%;
    margin-right: 70%;
`;

function Registro(props){
    return(
        
        <SpanStyled>{props.span}</SpanStyled>
    )
}
export default Registro;