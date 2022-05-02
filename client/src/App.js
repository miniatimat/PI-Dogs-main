import './App.css';
import  {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import NotFound from "./components/Not Found/NotFound";
import Create from "./components/Create/Create";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/dogs" element={<Home/>}/>
        <Route path="/dogs/:name" element={<Details/>}/>
        <Route path="/dogs/create" element={<Create/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
