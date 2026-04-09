import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import UseStatePage from "./pages/UseStatePage";
import UseEffectPage from "./pages/UseEffectPage";
import UseContextPage from "./pages/UseContextPage";
import UseRefPage from "./pages/UseRefPage";
import UseReducerPage from "./pages/UseReducerPage";
import UseCallbackPage from "./pages/UseCallbackPage";
import UseMemoPage from "./pages/UseMemoPage";

export default function App(){
 return(
  <BrowserRouter>
   <Layout>
    <Routes>
     <Route path="/" element={<h1>Bienvenido a la guía de Hooks</h1>} />
     <Route path="/useState" element={<UseStatePage/>}/>
     <Route path="/useEffect" element={<UseEffectPage/>}/>
     <Route path="/useContext" element={<UseContextPage/>}/>
     <Route path="/useRef" element={<UseRefPage/>}/>
     <Route path="/useReducer" element={<UseReducerPage/>}/>
     <Route path="/useCallback" element={<UseCallbackPage/>}/>
     <Route path="/useMemo" element={<UseMemoPage/>}/>
    </Routes>
   </Layout>
  </BrowserRouter>
 )
}
