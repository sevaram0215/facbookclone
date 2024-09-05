import "./sidebar.css"

const SideData={


Img:"https://images.unsplash.com/photo-1507671280192-5900ae887d3d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
name: "Sevaram",
sidedata1:
[
    {
    img:"https://www.clipartmax.com/png/middle/206-2069521_button-clipart-video-play-blue-youtube-play-button.png",
    name:"Watch"
    }
    ,
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_aJaJblDh4N4irquY4VjIdvQ8_sNvgOiTGw&s",
        name:"Events"
        },
        
    {
        img:"https://i.guim.co.uk/img/media/bd4dbd81ba97078810be8c3206731c91db897cf6/0_0_1400_840/master/1400.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=25c81692eccf854f2db5c4a42286aecc",
        name:"Friends"
        },
        
    {
        img:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/clock-design-template-a723b5c7ca687ed826f539aed91c0635_screen.jpg?ts=1634889642",
        name:"Memories"
        }

]

}
const Sidebar=()=>{
    return(
      <aside>
      

      
      <div className="sidebar_parent_1_chlid_1" >
        <div className="sidebar_parent_1_chlid_1_chlid_1"> 
            <img src={SideData.Img} alt="profile" className="profile_img" />
            <h4>{SideData.name}</h4>
        </div>
        <div>

        </div>



      </div>
         
      <div className="sidebar_parent_1_chlid_2" >


      </div>
    
    
      </aside>
    )
}
export default Sidebar