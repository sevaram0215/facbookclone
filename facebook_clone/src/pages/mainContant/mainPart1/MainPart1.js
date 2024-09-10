import  "./mainPart.scss"

const MainPart1Data={
    title:"Main Part 1",
    StoryData:[
        {id:1,
        story:"ad to story",
        Profileimage:"https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg",
        StoryImage:"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
    }
        , 
        {    
            id:2,
            story:"Ram ",
            Profileimage:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
            StoryImage:"https://www.icegif.com/wp-content/uploads/2023/04/icegif-584.gif"
        }
        ,  
         {
            id:3,
            story:"Ramesh ",
            Profileimage:"https://media.istockphoto.com/id/507995592/photo/pensive-man-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=fVoaIqpHo07YzX0-Pw51VgDBiWPZpLyGEahSxUlai7M=",
            StoryImage:"https://gsbagga.com/wp-content/uploads/2020/12/Man-and-Women-staying-together-in-live-in-relationship.jpg"
        },
        {
            id:4,
            story:"raju ",
            Profileimage:"https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg",
            StoryImage:"https://j.gifs.com/wpwMpJ.gif"
        }
           
        , {
            id:5,
            story:"Rani ",
            Profileimage:"https://images.pexels.com/photos/839633/pexels-photo-839633.jpeg?cs=srgb&dl=pexels-danxavier-839633.jpg&fm=jpg",
            StoryImage:"https://static.statusqueen.com/dpimages/thumbnail/dp_image8-998.jpg"
        }
        , {
            id:6,
            story:"Rani ",
            Profileimage:"https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg",
            StoryImage:"https://i.makeagif.com/media/8-20-2018/PiGwug.gif"
        }
        , {
            id:7,
            story:"Rani ",
            Profileimage:"https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_960_720.jpg",
            StoryImage:"https://images.tenorshare.com/topics/whatsapp-tips/best-whatsapp-status.jpg"
        }
           
           
           
                                                                                                                                                                                                                 
    ]
                                                                                                                                                                                                                 
    
}

const MainPart1=()=>{
    return(
 <div className="main_part_1">
    
    {
        MainPart1Data.StoryData.map((ele)=>{
            return(
                <div className="main_div" key={ele.id} >
            <div className="img_div">
            <div><img className="profile_img1" src={ele.Profileimage}></img></div>
           <div> <img className="story_img1" src={ele.StoryImage}/></div>
            </div>
                <span className="storyname">{ele.story}</span>
            </div>
                // <div key={ele.id} style={{backgroundImage: `url{ele.backgroundImage}`}}>
                //     <img src={ele.image}></img>
                //     <span>{ele.story}</span>
                // </div>
            )
        })
    }


      {/* <div style={{backgroundImage: `url("https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649")`}}>
      Hello World!
    </div>
    <div style={{backgroundImage: `url("https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649")`}}>
      Hello World!
    </div>
    <div style={{backgroundImage: `url("https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649")`}}>
      Hello World!
    </div>
    <div style={{backgroundImage: `url("https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649")`}}>
      Hello World!
    </div>
    <div style={{backgroundImage: `url("https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649")`}}>
      Hello World!
    </div> */}

 </div>

    )
}
export default MainPart1