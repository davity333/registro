import Input from "../Atoms/Input";
import Label from "../Atoms/Label";

//CAMPOS DE TEXTO CON NOMBRES
function Field(props,id,value,type,onChange,placeholder) {
    return (
        
        <div style={{width:"80%"}}>

            <div>
                <Label text={props.text}/>
            </div>

            <div>
                <Input onChange={props.onChange} value={props.value} type={props.type} placeholder={props.placeholder}/>
            </div>
            
        </div>
      );
}

export default Field;