import "./SidePart1.css"
const SideBArData1={
    Img:"https://images.unsplash.com/photo-1507671280192-5900ae887d3d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sevaram",
}
const SidePart1=()=>{
    return(

<div className="main_cont">
    <img className="sidebarimg" src={SideBArData1.Img} alt="Sevaram" />
    <h2>{SideBArData1.name}</h2>

</div>
    )
}
export default SidePart1