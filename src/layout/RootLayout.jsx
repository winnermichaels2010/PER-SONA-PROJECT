import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function RootLayout(){
    return(
        <div classname ="max-w-7xl mx-auto px-4 m-h-screen">
            <Sidebar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default RootLayout