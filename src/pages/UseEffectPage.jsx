import { useState } from "react";

export default function UseEffectPage(){
 const [value,setValue]=useState(0);

 return(
  <div className="card">
   <h1>UseEffect</h1>
   <p>Se usa para ejecutar acciones cuando pasa algo en el componente.</p>
   <button onClick={()=>setValue(value+1)}>Probar</button>
   <p>Resultado: {value}</p>
  </div>
 )
}