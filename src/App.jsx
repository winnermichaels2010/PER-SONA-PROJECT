import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router";
import RootLayout from "./layout/RootLayout";
import Homepage from "./pages/Homepage";
import Contactpage from "./pages/Contactpage";
import Aboutpage from "./pages/Aboutpage";

function App() {

  return (
    <div classname ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Routes>
      <Route element={<RootLayout/>}>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/About" element={<Aboutpage/>}/>
        <Route path="/Contact" element={<Contactpage/>}/>
      </Route>
    </Routes>
    </div>
  )
}

export default App

