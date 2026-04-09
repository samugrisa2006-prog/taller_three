import { useState } from "react";

export default function UseContextPage(){
 const [value,setValue]=useState(0);

 return(
  <div className="card">
   <h1>UseContext</h1>
   <p>Sirve para compartir datos entre componentes sin props.</p>
   <button onClick={()=>setValue(value+1)}>Probar</button>
   <p>Resultado: {value}</p>
  </div>
 )
}