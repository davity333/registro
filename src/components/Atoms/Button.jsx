import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 80%;
    height: 50px;
    background-color: #3e3672;
    border-radius: 5px;
    color: white;
    font-size: 18px;

    margin-top: -10px;

    &:hover {
        background-color: #1f2154;
        cursor: pointer;
    }
`;

function Button(props){
    return(
        <ButtonStyled id={props.id} onClick={props.onClick}>Registrarse</ButtonStyled>
    )
}

export default Button;