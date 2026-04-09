import { NavLink } from "react-router-dom";

export default function Nav(){
 return(
  <nav className="nav">
   <NavLink to="/">Inicio</NavLink>
   <NavLink to="/useState">useState</NavLink>
   <NavLink to="/useEffect">useEffect</NavLink>
   <NavLink to="/useContext">useContext</NavLink>
   <NavLink to="/useRef">useRef</NavLink>
   <NavLink to="/useReducer">useReducer</NavLink>
   <NavLink to="/useCallback">useCallback</NavLink>
   <NavLink to="/useMemo">useMemo</NavLink>
  </nav>
 )
}
