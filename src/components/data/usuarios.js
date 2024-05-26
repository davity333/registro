
import { useState } from "react";
import Swal from 'sweetalert2';
function usuarios() {

    const [usuary, setUsuary] = useState ("");
    const [password, setPassword] = useState ("");
    const [email, setEmail] = useState ("");
    const [pila, setPila] = useState([]);
    const [texto, setTexto] = useState("");

    const handleButtonClick = () => {
        if (usuary === "" || password === "" || email === "") {
            
            Swal.fire({
                title: "Datos incompletos!",
                text: "Por favor complete todos los campos",
                icon: "question"
              });

          return;
        }else if(!/\S+@\S+\.\S+/.test(email)){
            Swal.fire({
                title: "Correo invalido",
                text: "Por favor añade un correo valido",
                icon: "question"
              });

          return;
        }
      

      let registro = { usuario: usuary, Contraseña: password, Email: email };

      setPila(prevPila => [...prevPila, registro]);
      setTexto(`Usuario: ${usuary}, Contraseña: ${password}, Email: ${email}`);

        console.log([...pila, registro]);
      
      Swal.fire({
        title: "Registro exitoso",
        text: "Datos guardados en el sistema",
        icon: "success"
      });

    };
      return {
        usuary,
        password,
        email,
        texto,
        setUsuary,
        setPassword,
        setEmail,
        handleButtonClick,
      };
}
export default usuarios;
