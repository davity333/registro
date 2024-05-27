import React from "react";
import chuy from "../img/chuy.png"
import styled from "styled-components";

const ImgStyled = styled.img`
    height: 500px;
    margin-left: 79%;
   position: absolute;
   margin-top: 4px;

   
`;
function Chuy(props){
    return(
        <>
        <ImgStyled src={chuy}  logo={props.logo}></ImgStyled>
        </>
    
    )
}
export default Chuy;