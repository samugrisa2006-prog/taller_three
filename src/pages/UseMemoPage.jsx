import { useState } from "react";

export default function UseMemoPage(){
 const [value,setValue]=useState(0);

 return(
  <div className="card">
   <h1>UseMemo</h1>
   <p>Memoriza valores para mejorar rendimiento.</p>
   <button onClick={()=>setValue(value+1)}>Probar</button>
   <p>Resultado: {value}</p>
  </div>
 )
}