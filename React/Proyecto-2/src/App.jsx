import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hijo from './Componentes/Hijo.jsx'

function App() {

  // const alumno1 = "Lola";
  const calificacion1 = Math.round(Math.random()*10);

  return (
    <>
    <Hijo calificacion={calificacion1}/>
    {/* <Hijo nombre={alumno2} calificacion={calificacion2} />
    <Hijo nombre={alumno3} calificacion={calificacion3} /> */}
    </>
  )
}

export default App
