import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Adminboard from "./Pages/Adminboard";
import Jobsheet from "./Pages/Jobsheet";


function App() {
  
  return (
    <BrowserRouter >
     <Routes >
     <Route path="/" element={<Landing />} />
     <Route path="/adminboard" element={<Adminboard/>} />
     <Route path="/jobsheet"  element={<Jobsheet/>}/>
     </Routes>
     </BrowserRouter>
  
  )
}

export default App
