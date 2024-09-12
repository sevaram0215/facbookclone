import { IoPeople } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { AiFillLike } from "react-icons/ai";
import { FcComments } from "react-icons/fc";
import { FaShare } from "react-icons/fa";
import "./mainPart3.scss"

const MainPart3Data = {


  parentdata: [
    {
      id: "1",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/c/c0/Young_girl_smiling_in_sunshine_%282%29.jpg",
      name: "jaspreet",
      logo: <IoPeople />,
      time: "6 hours ago",
      stausline: "Nature is not a place to visit, it is home. –Gary Snyder",
      postImage:
        "https://images2.alphacoders.com/135/thumb-1920-1351108.png",
  
       postVideo:"https://v.ftcdn.net/02/95/49/08/700_F_295490831_QYpAfgBtptqfSI7c0euPJRrmcPLcwHFC_ST.mp4"
    },
    {
      id: "2",
      name: "rahul",
      img: "https://img.freepik.com/free-photo/portrait-concentrated-young-bearded-man_171337-17191.jpg",
      logo: <IoPeople />,
      time: "6 hours ago",
      stausline: " What is the good of your stars and trees, your sunrise and the wind, if they do not enter into our daily lives?",
      postImage:  "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      postVideo:"https://v.ftcdn.net/02/39/78/07/700_F_239780742_WRehbXoEFmTSXReY9bHjCVnPTYEPte5F_ST.mp4"  ,
    },
    {
      id: "3",
      name: "Rani jaat",
      img: "https://www.unesco.org/sites/default/files/styles/paragraph_medium_desktop/public/2022-04/godwin-angeline-benjo-An7LvVMb6rY-unsplash.jpeg?itok=3STf8JD9",
      logo: <IoPeople />,
      time: "6 hours ago",
      stausline: " My wish is to stay always like this, living quietly in a corner of nature. –Claude Monet",
      postImage:"https://creativeartworksblog.wordpress.com/wp-content/uploads/2016/09/0618gif-paisaje.gif",
postVideo:"https://v.ftcdn.net/03/16/49/90/700_F_316499041_eMXWlwTbJHkkk4KSbuoOZ593ZJjxVadz_ST.mp4"
    },
    {
      id: "4",
      name: "Rajkumar meena",
      img: "https://cdn4.vectorstock.com/i/1000x1000/28/43/young-man-face-cartoon-design-vector-9772843.jpg",
      logo: <IoPeople />,
      time: "6 hours ago",
      stausline: " For a time, I rest in the grace of the world, and am free",
      postImage: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    },
  ],
};

const MainPart3 = () => {
  return (
    <div className="Main_cont_part3">
     
        {MainPart3Data.parentdata.map((item) => {
          return (
            <div key={item.id} className="parentChildPart3">
              <div className="child1Part3" >
              <div className="childPart3_contant">
              <div>
                <img src={item.img}></img>
                </div>
              <div className="text_div">
                <div>{item.name}</div>
                <div className="text_content">
                  <div>{item.time}</div>
                  <div>{item.logo}</div>
                </div>
              </div>
            </div>
            <div className="threeDot_div"><HiOutlineDotsHorizontal /></div>
            </div>
              
      <div className="statusLine_div">
        <span>{item.stausline}</span>
      </div>
            <div className="child3">
              <div>
                {
                 
                item.postVideo ? <video src={item.postVideo}  autoPlay co style={{width:"100%", height:"100%"}}></video>: <img src={item.postImage}></img> 
                }
              </div>
                {/* <img src={item.statusImage}></img> */}

                <div className="like_comment_share_div"  >
                 <div className="like_div" >
                  <button>Like <AiFillLike style={{fontSize:"20px"}} /></button>
                 </div>
                 <div className="comment_div">
                  <button>Comment <FcComments style={{fontSize:"20px"}}/></button>
                 </div>
                 <div className="Share_div" >
                  <button>Share <FaShare  style={{fontSize:"20px"}}/></button>
                 </div>
        
         </div>
            </div>
       
          
            </div>
        
          );
        })}
       
 
     
    </div>
  );
};
export default MainPart3;
