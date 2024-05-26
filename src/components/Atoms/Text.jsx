import styled from "styled-components";

const TextStyled = styled.p`
    font-size: 29px;
    position: absolute;
    color: #0000009f;
    
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    left: 50%;
  transform: translateX(-50%);
  text-align: center;
    margin-bottom: 43%;
`;

function Text(props){ 
    return(
        
        <TextStyled>{props.p}</TextStyled>  
    )
}

export default Text;