import Field from "../Molecules/Field"
import Button from "../Atoms/Button";
import Logo from "../Atoms/logo";
import './SectionLogin.css';
import Text from "../Atoms/Text";
import Taza from "../Atoms/Taza";
import Chuy from "../Atoms/Chuy";
import usuarios from "../data/usuarios";
import React from "react";
import Registro from "../Atoms/Registro";
import Davity from "../Atoms/Davity";
import Diseño from "../Molecules/Diseño";
//CUADRO COMPLETO
function SectionLogin() {
    const { usuary, password, email, texto, setUsuary, setPassword, setEmail, Click } = usuarios();
    return (
        <>
        
        <div id="login_section">
            
            <Logo></Logo>
            
            <Field value={usuary} type="text"   placeholder="Usuario" text="Usuario" onChange={(e) => setUsuary(e.target.value)}/>
            <Field value={password} type="password"  placeholder="Contraseña" text="Contraseña" onChange={(e) => setPassword(e.target.value)}/>
            <Field value={email} type="text"  placeholder="Correo electronico" text="Email" onChange={(e) => setEmail(e.target.value)}/>
            <Button onClick={Click}></Button>
        </div>  

        
        <Diseño></Diseño>
        <Registro span={texto}></Registro>

            
        </>
        
     );
}

export default SectionLogin;

