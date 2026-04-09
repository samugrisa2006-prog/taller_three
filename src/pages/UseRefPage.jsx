import { useState } from "react";

export default function UseRefPage(){
 const [value,setValue]=useState(0);

 return(
  <div className="card">
   <h1>UseRef</h1>
   <p>Permite acceder directamente a elementos del DOM.</p>
   <button onClick={()=>setValue(value+1)}>Probar</button>
   <p>Resultado: {value}</p>
  </div>
 )
}