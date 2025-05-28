import Perfil from "./components/Perfil";
import CabeceraCV from "./components/CabeceraCV";
import Educacion from "./components/Educacion";
import Experiencia from "./components/Experiencia";
import StackTecnologias from "./components/StackTecnologias.jsx";

function App() {
  return (
    <>
      <div>
        <CabeceraCV />
        <Perfil />
        <Educacion />
        <Experiencia />
        <StackTecnologias />
      </div>
    </>
  );
}

export default App