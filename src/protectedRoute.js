import React,{useEffect,useState} from 'react';
import {Route,Redirect} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import  styled from 'styled-components';
import auth from './auth';




const SwitchContainer=styled.div`
     margin-left:${({click})=>(click?'250px':0)};
     transition: margin-left .5s;
     padding: 16px;
`

export const ProtectedRoute=({component:Component,...rest})=>{
    const [sidebar,setSidebar]=useState(false);
    const showSidebar=()=>setSidebar(!sidebar);
  
    const showFirstSidebar=()=>{
      showSidebar(true)
    }
  
  
    useEffect(() => {
      showFirstSidebar()  
     console.log('hdahdjah')
      return () => {
     //   showSidebar(sidebar)
      }
    }, [])

    const logout=(props)=>{
        auth.logout(()=>{
            props.history.push('/signin')
        })
    }
  

    return(
        <div>
        <Sidebar  
        sidebar={sidebar}
        showSidebar={showSidebar} 
        Logout={logout}
       /> 
      <SwitchContainer  click={sidebar}  >
        <Route {...rest} render={
            (props)=>{
                if(auth.isAuthenticated()){
                    return <Component {...props}/>
                }else{
                    return <Redirect to={
                        {
                            pathname:'/signin',
                            state:{
                                from:props.location
                            }
                        }
                        
                    }
                    />
                }

              
            }
        }

        />
         </SwitchContainer>
      </div>
    )
}