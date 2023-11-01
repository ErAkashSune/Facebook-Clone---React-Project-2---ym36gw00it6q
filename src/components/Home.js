import React, { useEffect } from "react";
import SideBar from "./SideBar";
import Postbar from "./Postbar";
import PostSection from "./PostSection";
import NewsFeed from "./NewsFeed";
import { Box } from "@mui/material";
import "./main.css";
import pic from "../images/pic.jpg";
import pic2 from "../images/pic2.JPG";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import PagesIcon from '@mui/icons-material/Pages';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChildCareIcon from '@mui/icons-material/ChildCare';
const Home = () => {
  return (
    <div className="Main">

    <div className="Rside">
    <div className="Profile">
        <img src={pic} alt="dp"style={{height:"60px" , width:"60px",padding:"1rem"}}/>
        Akash Sune
    </div>
    <div className="Pro">
    <Diversity3Icon  color="primary" fontSize="large"/>
    <div>Friends</div>
    </div>
    <div className="Pro">
       <PagesIcon color="primary" fontSize="large" />
        <div>Pages</div>
    </div>
    <div className="Pro">
        <CoronavirusIcon  color="primary" fontSize="large"/>
        <div>COVID-19 Information Center</div>
    </div>
    <div className="Pro">
        <ChildCareIcon color="primary" fontSize="large"/>
        <div>Messenger Kids</div>
    </div>

    <div className="Pro">
       <ExpandMoreIcon color="primary" fontSize="large"/>
        <div>See More</div>
    </div>
    </div>

    <div className="MainArea">
        <div className="addStory">
            <div className="Story">
                {/* <img src="#" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%"}}/> */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                Akash Sune
            </div>
            <div className="Story">
                {/* <img src="#" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%"}}/> */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                JAVA
            </div>
            <div className="Story">
                {/* <img src="#" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%"}}/> */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                HTML CSS
            </div>
            <div className="Story">
                {/* <img src="#" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%"}}/> */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                React JS
             </div>
           
            </div>
            <div className="message">
                
           <Postbar/>
           
           <div className="Posted" >
           
           <PostSection/>
           
           
       
       </div>
          
        </div>

    </div>

    <div className ="Lside">
     <div className="Contact">  
         <div className="Contacts">
             Contacts
         </div>
     
     <div className="chaticon">
         <div className="icons">
             
         </div>
         <div className="icons">
               
             </div>
             <div className="icons">
                
             </div>
        </div>
        </div>
    <div className="concise">
        <div className="Profilee">
            <img src={pic} alt="logo" style={{height:"50px",width:"50px",  padding:"1rem"}}/>
            Akash Sune
        </div>
        <div className="Profilee">
            <img src={pic2} alt="logo" style={{height:"50px",width:"50px",  padding:"1rem"}}/>
            Rohit
        </div>
        <div className="Profilee">
            <img src={pic3} alt="logo" style={{height:"50px",width:"50px",  padding:"1rem"}}/>
            Virat
        </div>
        <div className="Profilee">
            <img src={pic4} alt="logo" style={{height:"50px",width:"50px",  padding:"1rem"}}/>
            Hardik
        </div>
        <div className="Profilee">
            <img src={pic5} alt="logo" style={{height:"50px",width:"50px", padding:"1rem"}}/>
            Ravindra
        </div>
    </div>
    </div>
</div>
  );
};

export default Home;
