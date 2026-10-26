
import Home from "./Components/Homes";
import { BrowserRouter, Routes, Route } from "react-router";
import Contact from "./Components/Contact";
import Message from "./Components/Message";
import Collection from "./Collection/Collection";
function App() {


  return (
    <>


<BrowserRouter>
    <Routes>
 
    <Route path="/" element={<Home />} />
    <Route path="/collection" element={<Collection />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/message" element={<Message />} />
  </Routes>
  </BrowserRouter>


  
      
    </>
  )
}

export default App
