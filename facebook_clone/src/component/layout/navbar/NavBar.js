
import './nav.css'
import { IoHome } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { GrCatalogOption } from "react-icons/gr";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoPeopleCircle } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaGrinHearts } from "react-icons/fa";
const ooject={
    name: "Sevaram",
    header:"facebook",
    slefImg:"https://images.unsplash.com/photo-1507671280192-5900ae887d3d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img:"https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png"


}
const Navbar=()=>{
    return(
<>
<nav  className="navbar">

    <div className="nav_child_1">
   <img className='navImg' src={ooject.img} ></img>
        <input type="seacrh" placeholder="search"></input>
    </div>
    <div className='nav_child_2'>
        <a href=""><IoHome title='home' style={{ fontSize:"25px"}} /></a>
        <a href=""><MdOndemandVideo title='videos'style={{fontSize:"25px"}}  /></a>
        <a href=""><GrCatalogOption title='catalog'style={{ fontSize:"25px"}}/> </a>
        <a href=""><SiHomeassistantcommunitystore title='community'style={{ fontSize:"25px"}} /></a>
        <a href=""><IoPeopleCircle title='community'style={{ fontSize:"25px"}}/>  </a>
    </div>
    <div className='nav_child_3'>
         <a href=""> <img className='navImg' src={ooject.slefImg}></img></a>
        <a href=""><CiCirclePlus  title='ad more' style={{ fontSize:"25px"}} /></a>
        <a href=""><FaFacebookMessenger  title='messenger' style={{ fontSize:"25px", color:"blue"}} /></a>
        <a href=""><FaBell title='alert' style={{ fontSize:"25px"}} /></a>
        <a href=""><FaGrinHearts  title='alert' style={{ fontSize:"25px", color:"yellow"}} /></a>
    </div>

</nav>
</>
    )
}
export default Navbar