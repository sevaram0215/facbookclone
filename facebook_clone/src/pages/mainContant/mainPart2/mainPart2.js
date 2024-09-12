import "./MainPart2.scss"
import { FaPhotoVideo } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";

const MainPart2Data={
    "title": "Part 2",
    Profilimg:"https://previews.123rf.com/images/deagreez/deagreez1608/deagreez160801681/61443301-happy-man-and-woman-embracing-and-gesturing-with-two-fingers.jpg",
                                                                                                                                                                                                                                                                              
     parentdata:[
           {id:"1",
            img:<FaPhotoVideo style={{ color:"skyblue"}}/>,
            name:"photo/video"
            }
            ,
            {id:"2",
                img:<FaUserFriends style={{ color:"blue"}}/>,
                name:"Friends"
                },
                
            {
                id:"3",
                img:<BsFillEmojiHeartEyesFill style={{ color:"yellow"}} />,
                name:"Fillinf/Activity"
                },
                
            
    ]
}

const MainPart2=()=>{
    return(
        <div className="_part2">
            <div className=" child1">
                <img src={MainPart2Data.Profilimg}></img>
                <input typeof="search" placeholder="What's on your mind,sevaram"></input>
            </div>
        
            <hr style={{width:"95%",margin:"auto", marginTop:"10px"}}></hr>
            <div className="Child2">
                {
                    MainPart2Data.parentdata.map((element)=>{
                        return(

                            <div key={element.id}>
                                <div>{element.img}</div>
                               <span>{element.name}</span>

                            </div>
                        )
                    })
                }
            </div>
         
        </div>
    )
}
export default MainPart2