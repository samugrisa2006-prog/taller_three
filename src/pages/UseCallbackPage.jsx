import { useState } from "react";

export default function UseCallbackPage(){
 const [value,setValue]=useState(0);

 return(
  <div className="card">
   <h1>UseCallback</h1>
   <p>Optimiza funciones para que no se recrean innecesariamente.</p>
   <button onClick={()=>setValue(value+1)}>Probar</button>
   <p>Resultado: {value}</p>
  </div>
 )
}