import Navbar from "./Components/Navbar";
import{Routes,Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
function App() {
  return (
    <> 
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details" element={<Detail/>}/>
       </Routes>

    </>
  )
}
export default App;