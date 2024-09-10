import { IoIosSettings } from "react-icons/io";
import { MdHelp } from "react-icons/md";
import { GoArrowSwitch } from "react-icons/go";
import { MdOutlineFeedback } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { RxSwitch } from "react-icons/rx";
import { CiDark } from "react-icons/ci";
import "./RightSidePart1.scss";

const SideBarProfiledata = [
  {
    ProfileImg:
      "https://images.unsplash.com/photo-1507671280192-5900ae887d3d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sevaram",
    tag: "See Your Porfile",
  },
];
const Sidepart1Data = {
  modeData: [
    {
      id: "1",
      img: <IoIosSettings title="Setting" />,
      name: "Setting",
      span:<IoIosArrowForward />
    },
    {
      id: "2",
      img: <MdHelp  title="Help & Support"/>,
      name: "Help & Support",
      span:<IoIosArrowForward />
    },
    
    {
      id: "3",
      img: <CiDark  title="Dark Mood" />,
      name: "Dark Mood",
      span:<RxSwitch />
    }
,
    {
      id: "4",
      img: <GoArrowSwitch title="Switch to classic Facebook" />,
      name: "Switch to classic Facebook",

    },
    {
      id: "5",
      img: <MdOutlineFeedback title="Send your Feedback" />,
      name: " send Feedback",
    },
    {
      id: "6",
      img: <MdLogout />,
      name: "Logout",
    },
  ],
};
const RightSidePart1 = () => {
  return (
    <>
    
      <div className="Maindiv_part1_RightSidebar">
        <div className="profile_cont">
          {SideBarProfiledata.map((ele) => {
            return (
              <div key={ele.id} style={{gap:"10px",paddingLeft:"5px"}} className="child_1_Right_side_profile">
                <div>
                  <img src={ele.ProfileImg}n  className="profile_img" />
                </div>

                <div>
                  <p>{ele.name}</p>
                  <span>{ele.tag}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {Sidepart1Data.modeData.map((att) => {
            return (
              <div key={att.name} className="facebook_setting_tab">
                <div style={{ display: "flex", gap:"15px", }}>
                  <div style={{fontSize:"25px"}}>{att.img}</div>
                  <div>{att.name}</div>
                </div>
                <div style= {{fontSize:"25px"}}>
                   {att.span}
                </div>
              </div>
            );
          })}
        </div>
        <div className="setting_a" >
          <a href="Privacy"> Privacy.</a>
          <a href="tersms"> tersms.</a>
          <a href="Advertisement"> Advertisement.</a>
          <a href="Ad Chice"> Ad Chice.</a>
          <a href="Cokkies">  Cokkies.</a>
          <a href="Facebook">  More.Facebook @2019   </a>

        </div>
      </div>

    </>
  );
};
export default RightSidePart1;
