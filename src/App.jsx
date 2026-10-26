
import Home from "./Components/Homes";
import {  Routes, Route } from "react-router";
import Contact from "./Components/Contact";
import Message from "./Components/Message";
import Collection from "./Collection/Collection";
function App() {


  return (
    <>



    <Routes>
 
    <Route path="/" element={<Home />} />
    <Route path="/collection" element={<Collection />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/message" element={<Message />} />
  </Routes>
  


  
      
    </>
  )
}

export default App
