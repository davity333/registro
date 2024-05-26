import styled from "styled-components";

const InputStyled = styled.input`
    width: 95%;
    height: 40px;
    border: 1px gray solid;
    border-radius: 5px;
    font-size: 20px;
    color: #0308a3;
    padding: 0 10px;
    margin-top: -20px;
`;

function Input(props) {
    return(
        <InputStyled id={props.id} onChange={props.onChange} value={props.value} type={props.type} placeholder={props.placeholder}/>
    )
}

export default Input;