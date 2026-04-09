import { useState } from "react";

export default function UseReducerPage(){
 const [value,setValue]=useState(0);

 return(
  <div className="card">
   <h1>UseReducer</h1>
   <p>Maneja estados más complejos con lógica estructurada.</p>
   <button onClick={()=>setValue(value+1)}>Probar</button>
   <p>Resultado: {value}</p>
  </div>
 )
}