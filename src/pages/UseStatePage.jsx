import { useState } from "react";

export default function UseStatePage(){
 const [value,setValue]=useState(0);

 return(
  <div className="card">
   <h1>UseState</h1>
   <p>Permite guardar y actualizar datos dentro del componente.</p>
   <button onClick={()=>setValue(value+1)}>Probar</button>
   <p>Resultado: {value}</p>
  </div>
 )
}