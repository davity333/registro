import styled from "styled-components";
import logo from "../img/login.png"


const ImgStyled = styled.img`
    height: 100px;
    margin-left: 25px;
`;
function Logo(props){
    return(
        <>
        <ImgStyled src={logo}  logo={props.logo}></ImgStyled>
        </>
    
    )
}

export default Logo;