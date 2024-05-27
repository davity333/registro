import React from "react";
import davity from "../img/davity.png"
import styled from "styled-components";

const ImgStyled = styled.img`
    height: 630px;
    margin-right: 81%;
   position: absolute;
   margin-top: 100px;

   
`;
function Davity(props){
    return(
        <>
        <ImgStyled src={davity}  logo={props.logo}></ImgStyled>
        </>
    
    )
}
export default Davity;