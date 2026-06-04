import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function RootLayout(){
    return(
        <>
        <Sidebar/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default RootLayout