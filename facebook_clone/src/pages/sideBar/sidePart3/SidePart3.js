import "./SidePart3.scss"
const SideBarData3=[
    {
        img:"https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg",
        name:"save the prmery thearters"
    },{
        img:"https://blog.thomascook.in/wp-content/uploads/2017/01/weekend-getaway-india-travel.jpg",
        name:"Weakend Trips"
    }
    ,{
        img:"https://i.natgeofe.com/n/ad21417f-23d5-48d9-a761-356961986631/wet-markets-gettyimages-1197116072.jpg?w=1436&h=958",
        name:"Jasper's Market"
    }
    ,{
        img:"https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png",
        name:"Red table tolk group"
    },{
        img:"https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg",
        name:"best heading hanging solo"
    },
]
const SidePart3=()=>{
    return(
        <div className="main_cont_part3">
              <div className="maincont_part1"> 
            <p>Shortcuts</p> <span>&#8230;</span>
           
            </div>

  
            
                <div className="parnet_2" >{
                    SideBarData3.map((e)=>{
                        return(
                            <div key={e.name} className="side_bar_child2_contant_div">
                                <img  src={e.img} alt="profile" className="profile_img sidebarimg" />
                                <h4>{e.name}</h4>
                            </div>
                           
                        )
                        })}
                </div>
            
        <div className="SideBarBtn_seeMore">
            <button >see more <span>&#711;</span></button>
            </div>
        </div>

    )
}
export default SidePart3