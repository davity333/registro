import Davity from "../Atoms/Davity";
import Text from "../Atoms/Text";
import Taza from "../Atoms/Taza";
import Chuy from "../Atoms/Chuy";
import Registro from "../Atoms/Registro";

function Diseño(){
    return(
        <>
        <Davity></Davity>
        <Text p="Registrate para acceder a la tienda y recibir notificaciones de nuevos episodios"/>

        <Taza></Taza>
        <Chuy></Chuy>
        </>
    )
}
export default Diseño;