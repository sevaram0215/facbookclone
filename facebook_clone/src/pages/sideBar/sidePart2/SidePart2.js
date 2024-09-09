

import { MdOutlineVideoLibrary } from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { RiMemoriesLine } from "react-icons/ri";
import "./SidePart2.scss"

const SidePart2data=
    [
         {
            img:<MdOutlineVideoLibrary />,
            name:"Watch"
            }
            ,
            {
                img:<RiCalendarEventLine />,
                name:"Event"
                },
                
            {
                img:<FaUserFriends />,
                name:"Friends"
                },
                
            {
                img:<RiMemoriesLine />,
                name:"Memories"
                },
        
    ]


   

const SidePart2=()=>{
    return(
        <div className="MainCont_part2">{
            SidePart2data.map((e)=>{
                return(
                    <div key={e.name} className="parent_1">
                        <div style={{fontSize:"25px", color:"skyblue"}}>{e.img}</div>
                       
                        <h4>{e.name}</h4>
                    </div>
                   
                )
                })}

                <div className="SideBarBtn_seeMore">
            <button >see more <span>&#711;</span> </button>
            </div>
        </div>
    

    )
}
export default SidePart2