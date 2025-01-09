import { useState } from "react";
import "./estilos.css";

function Botones() {

const [contador, setContador] = useState(0);
const incrementar1 = () => {
    setContador(contador + 1)  
};

  return (
    <>
      <div className="counter-display">{contador}</div>
      <button className="increment-button" onClick={incrementar1}></button>
    </>
  );
}

export default Botones;
