import { IoPeople } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
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
      statusImage:
        "https://i.gifer.com/origin/20/2044500a9a0cef20ef935c31946538a1.gif",
    },
    {
      id: "2",
      name: "rahul",
      img: "https://img.freepik.com/free-photo/portrait-concentrated-young-bearded-man_171337-17191.jpg",
      logo: <IoPeople />,
      time: "6 hours ago",
      stausline: " What is the good of your stars and trees, your sunrise and the wind, if they do not enter into our daily lives?",
      statusImage:  "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
    },
    {
      id: "3",
      name: "Rani jaat",
      img: "https://www.unesco.org/sites/default/files/styles/paragraph_medium_desktop/public/2022-04/godwin-angeline-benjo-An7LvVMb6rY-unsplash.jpeg?itok=3STf8JD9",
      logo: <IoPeople />,
      time: "6 hours ago",
      stausline: " My wish is to stay always like this, living quietly in a corner of nature. –Claude Monet",
      statusImage:"https://creativeartworksblog.wordpress.com/wp-content/uploads/2016/09/0618gif-paisaje.gif",
    },
    {
      id: "4",
      name: "Rajkumar meena",
      img: "https://cdn4.vectorstock.com/i/1000x1000/28/43/young-man-face-cartoon-design-vector-9772843.jpg",
      logo: <IoPeople />,
      time: "6 hours ago",
      stausline: " For a time, I rest in the grace of the world, and am free",
      statusImage: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
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
              <div><img src={item.img}></img></div>
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
                <img src={item.statusImage}></img>
            </div>
          
            </div>
        
          );
        })}
       
 
     
    </div>
  );
};
export default MainPart3;
