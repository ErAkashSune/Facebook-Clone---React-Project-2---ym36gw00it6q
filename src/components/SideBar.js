import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import './main.css';
import { Link, useNavigate } from "react-router-dom";
import { useStateProvider } from "../utils/StateProvider";

const SideBar = () => {
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();
  return (
    
              <div className="Rside">
        <div className="Profile">
            <img src="/images/4.jpeg"alt="dp"style={{height:"60px",padding:"1rem"}}/>
            Akash Sune
        </div>
        <div className="Pro">
        
        <div>Friends</div>
        </div>
        <div className="Pro">
           
            <div>Pages</div>
        </div>
        <div className="Pro">
          
            <div>COVID-19 Information Center</div>
        </div>
        <div className="Pro">
           
            <div>Messenger Kids</div>
        </div>

        <div className="Pro">
           
            <div>See More</div>
        </div>
        </div>
      
       
  
  );
};

export default SideBar;
