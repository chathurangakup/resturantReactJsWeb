import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import { SignInColumnContainer,SignInRawContainer,SignInInsideContainer,FormH1,SignInForm, OverlayImageContainer,Image,ImageContainer } from './SignInElements'
import TextInput from '../commonComponents/TextInput';
import DropDown from '../commonComponents/DropDown'
import Button from './components/Button';
import Loader from '../commonComponents/Loader/Loader';
import Myimg from '../../images/webbg.jpg';
import  startupAction from '../../redux1/Users/actions';
import {useSelector,useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
const {loginUser,clearProps} = startupAction;



function handleChange(event){
  console.log(event.target)
}


function SignIn(props) {
  const [items] = React.useState([
    {
      label: "admin1",
      value: "admin2@gmail.com"
    },
    { label: "admin2", value: "admin2@gmail.com" },
   
  ]);
  const [isblock, setisblock] = useState('none');

  const [value, setValue] = React.useState('admin1@gmail.com');
  const [password, setPassword] = useState('');
    // let arraylist=[
    //   {name:"admin1",email:'admin1@gmail.com'},
    //   {name:"admin2",email:'admin2@gmail.com'}
    // ]
    const dispatch=useDispatch();
    const history = useHistory();
    const loading=useSelector(state=>state.startUpReducer.loading);
    const loginresult=useSelector(state=>state.startUpReducer.loginresult);
    const loginerr=useSelector(state=>state.startUpReducer.loginerr);

  if(loginresult!=undefined){
    console.log(loginresult.result)
    localStorage.setItem('accesstoken', loginresult.token);
    localStorage.setItem('userid', loginresult.userId);

    dispatch(clearProps())
    history.push("/");
    setisblock('none')
   
  }

  if(loginerr!=undefined){
    console.log(loginerr.message)
    setisblock('none')
    dispatch(clearProps())
   
  }

    useEffect(() => {
         const hhh={
             email:'admin1@gmail.com',
             password:'123456'
         }
        // dispatch(loginUser(hhh));
    }, [])


    const submit=()=>{
      setisblock('block')
      const obj={
        email:value,
        password:password
    }
    dispatch(loginUser(obj));
      console.log(password+'  '+value)
    }
   

    
    return (
        <>
            <SignInRawContainer >
                <SignInInsideContainer>
                   
                   
                    <SignInColumnContainer style={{backgroundColor:'white'}} >
                       <ImageContainer>
                           <Image  src={Myimg}></Image>
                           <OverlayImageContainer></OverlayImageContainer>
                       </ImageContainer>
                    </SignInColumnContainer>
                    <SignInColumnContainer style={{padding:'10px',backgroundColor:'white'}}>
                            <SignInForm>
                             <DropDown
                                  //  value={arraylist.email}
                                    value={value}
                                    handleChange={e => setValue(e.currentTarget.value)}
                                    dropdownlist={items}
                                    name="UserName"
                               />

                               <TextInput
                                      onChange={event => setPassword(event.target.value)}
                                      type="password"
                                      lblname="password"
                                      id="pass"
                                      name="password"
                                      placeholder="Please enter Password"
                               />

                            <div style={{paddingTop:50}}></div>

                               <Button type='button'
                               onClick={submit}
                               name='Login'
                               
                              />
                             
                              
                            </SignInForm>
                    </SignInColumnContainer>
                </SignInInsideContainer>
                {loading?
                 <Loader
                 isdisplay={'block'}
                
              />
              :
              <div></div>
                
              }
               

               
             
            </SignInRawContainer>
        </>
    )
}

// SignIn.propTypes = {

// }

export default SignIn

