import React,{useState,useEffect} from 'react';

import {Link} from 'react-router-dom';
import styled from'styled-components';
import Pusher from 'pusher-js';



 Pusher.logToConsole = true;

const SidebarLink=styled(Link)`
    display:flex;
    color: #e1e9fc;
    justify-content:space-between;
    align-items:center;
    padding:20px;
    list-style:none;
    height:60px;
    text-decoration:none;
    font-size:18px;

    &:hover{
        background:#252832;
        border-radius:4px solid #632ce4;
        cursor: pointer;

    }

`;

const SidebarLable=styled.span`
    margin-left:16px;
`;

const DropdownLink =styled(Link)`
    background: #414757;
    height:60px;
    padding-left:3rem;
    display:flex;
    align-items:center;
    text-decoration:none;
    color:#fff;
    font-size:18px;

    &:hover{
        background:#fff;
        cursor: pointer;
    }

`;


const Submenu =({item}) =>{
  
   const [subnav, setsubNav] = useState(false);
   const [statustype, setStatusType] = useState('');
   const showSubNav=()=>setsubNav(!subnav);

   useEffect(() => {
     
    var pusher = new Pusher('27dfe9a48f11cf0eb456', {
        cluster: 'ap2'
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
        console.log(data.type);
        setStatusType(data.type);
      
    });
   }, []);

  const clickstate=()=>{
     setStatusType('');
   }

    return(
        <>
            <SidebarLink to={item.path} onClick={item.subnav && showSubNav}>
                <div>
                    {item.icon} 

                    <SidebarLable>{item.title}</SidebarLable>
                </div>
                <div>
                    {item.subnav && subnav 
                     ? item.iconOpen
                     : item.subnav
                     ? item.iconClose
                     : null
                    }
                </div>
            </SidebarLink>
            {subnav && item.subnav.map((item,index)=>{
                return(
                    <DropdownLink to={item.path} key={index} >
                        {item.icon}
                        { statustype==''? 
                            <SidebarLable>{item.title} <samp style={{color:'red',fontSize:'20px',marginLeft:'20px'}}>New</samp> </SidebarLable>
                            :
                            statustype==item.title ? 
                            <SidebarLable onClick={()=>clickstate()}>{item.title}   <samp style={{color:'red',fontSize:'20px',marginLeft:'20px'}}>New</samp> </SidebarLable>
                             :
                            <SidebarLable>{item.title} </SidebarLable>
                        }

                      
                        
                    </DropdownLink>
                )
            })}
        </>
    )
}

export default Submenu;