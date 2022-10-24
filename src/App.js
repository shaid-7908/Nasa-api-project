import { Route, Routes } from "react-router-dom";
import Topbar from "./Component/Topbar";
import Aboutpage from "./Pages/Aboutpage";
import Earthimagepage from "./Pages/Earthimagepage";
import Homepage from "./Pages/Homepage";
import Marshimagepage from "./Pages/Marshimagepage";


function App() {
  return (
    <>
    <Topbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/earthimage' element={<Earthimagepage/>}/>
      <Route path='/marshimage' element={<Marshimagepage/>}/>
      <Route path='/about' element={<Aboutpage/>}/>

    </Routes>
    
    </>
  );
}

export default App;
