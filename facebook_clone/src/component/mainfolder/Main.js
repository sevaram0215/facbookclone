import MainBar from "../layout/mainbar/Mainbar";
import MainBar2 from "../layout/mainbar2/MainBar2";
import Navbar from "../layout/navbar/NavBar";
import Sidebar from "../layout/SideBar/SideBar";

import "./main.css"
const Main=()=>{
    return(
        <>
    <div className=" main_contanier">
    <Navbar/>
<div className="main_parent">
    <div className="sidebar_parent_1">
    <Sidebar></Sidebar>
    </div>
    <div   className="sidebar_parent_2">
    <MainBar/>
    </div>
    <div  className="sidebar_parent_3" >
        <MainBar2/>
   

    </div>
 
 
</div>
    </div>

        
        </>
    )
}
export default Main;