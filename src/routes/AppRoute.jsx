import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";


const AppRoute = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/projects" element={<div>Projects Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </>
  );

}
            

export default AppRoute;



