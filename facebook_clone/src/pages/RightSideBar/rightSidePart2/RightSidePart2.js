import "./RightSidePart2.scss";

import { MdOutlineAddComment } from "react-icons/md";
const RightSideBar2Data = [
  {
    img: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Ramesh ",
  },
  {
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "raju meena",
  },
  {
    img: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Manjeet",
  },
  {
    img: "https://images.pexels.com/photos/3662975/pexels-photo-3662975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Roshani verma",
  },
  {
    img: "https://images.pexels.com/photos/2529142/pexels-photo-2529142.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    name: "Pooja jat",
  },
  ,
  {
    img: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Manjeet",
  },
  {
    img: "https://images.pexels.com/photos/3662975/pexels-photo-3662975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Roshani verma",
  },
  {
    img: "https://images.pexels.com/photos/2529142/pexels-photo-2529142.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    name: "Pooja jat",
  }
];


const RightSidePart2 = () => {
   return( <div className="RightSidePart2">

      <div className="ActiveCont">
        {
        RightSideBar2Data.map((e) => {
          return (
            <div key={e.name} className="Active_div">
              <img src={e.img} className="sidebarimg" />
              <h4>{e.name}</h4>
     
            </div>
            
          );
        })}
      </div>

      <div className="Add_more">
      <MdOutlineAddComment title="Add more" />
     
      
      </div>
     
    </div>

)
};

export default RightSidePart2;



