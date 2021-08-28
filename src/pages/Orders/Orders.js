import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types';
import Pusher from 'pusher-js';
import Loader from '../commonComponents/Loader/Loader';
import {TableComp,TableTd,TableTr,TableTh,TableTdIcons,NavBtnLink} from './styleElements'
import { CgMoreVerticalO } from "react-icons/cg";
import {AiFillDelete} from 'react-icons/ai'
import ModelsRemoved from '../commonComponents/modelRemoved';
import ModelUserDetails from '../commonComponents/modelUserDetails';
import './style.css';


import  cartCatAction from '../../redux1/Cart/actions';
import {useSelector,useDispatch} from 'react-redux';
import { useHistory,withRouter  } from "react-router-dom";
const {getCartItems,getUserDetails,changeIsDisplay, clearProps} = cartCatAction;


Pusher.logToConsole = true;


function Orders({match}) {
 const [params, setParams] = useState(match.params.type);
 const [isblockremoved, setisBlockRemoved] = useState('none');
 const [isblockuser, setisBlockUserDetails] = useState('none');
 
 const [removeditems, setremoveditems] = useState([]);

 
const dispatch=useDispatch();
const history = useHistory();
const loading=useSelector(state=>state.cartReducer.loading);
const getcartItemaresult=useSelector(state=>state.cartReducer.getcartItemaresult);
const userDetailsResult=useSelector(state=>state.cartReducer.userDetailsResult);
const changeIsdisplayResult=useSelector(state=>state.cartReducer.changeIsdisplayResult);
const changeStatusResult=useSelector(state=>state.cartReducer.changeStatusResult);



const userid=localStorage.getItem('userid')
const token=localStorage.getItem('accesstoken')



const getData=async()=>{
   
  dispatch(getCartItems(token,'Delivery'))

}

if(changeStatusResult!=undefined){
   
  if(changeStatusResult=='err'){

  }else{
    
    dispatch(clearProps())
  }
  dispatch(clearProps())
}

if(userDetailsResult!=undefined){
    console.log(userDetailsResult)
  //  dispatch(clearProps())
}

if(changeIsdisplayResult!=undefined){
  getData();
  dispatch(clearProps())
}


//  if(params=='Delivery'){
//     getData();
//     dispatch(clearProps())
//  }else{
//     getData();
//     dispatch(clearProps())
//  }



    useEffect(() => {

   
     
        var pusher = new Pusher('27dfe9a48f11cf0eb456', {
            cluster: 'ap2'
        });

        var channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function(data) {
          getData();
        });
       
        getData();

       
       
 
  }, [])





 const getOrderDetails=(cartitems,status,cartitemid)=>{
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
    localStorage.setItem("status", status);
    localStorage.setItem("type", 'Delivery');
    localStorage.setItem("cartitemid", cartitemid);
    history.push(`/orders/details`);
  }
  

const clickRemove=(id)=>{
    dispatch(changeIsDisplay(token,id))
    setisBlockRemoved('none')
}

const getUserDetailsClick=(userid)=>{
 
    dispatch(getUserDetails(token,userid))
    setisBlockUserDetails('block')

}

const getcartItemaresult2=(getcartItemaresult1)=>{
   console.log(getcartItemaresult1.result)
   setremoveditems(getcartItemaresult1.result)
   setisBlockRemoved('block')
}



    return (
        <div   >
              {/* <Sidebar  
    //   /  sidebar={falase}
        //showSidebar={showSidebar} 
      />  */}
            <div className='btnAlign1'>
               <button className="button1"  onClick={()=>getcartItemaresult2(getcartItemaresult)}><span>Removed Items  </span></button>
            </div>

            {/* <Models
                   // btnOnClick={()=>clickAddItemBtn()}
                    isdisplay={isblock}
                    value={itemName}
                    onChangetxt={(e)=>setItemName(e.target.value)}
                    onclickSpanClose={()=>setisblock('none')}
                /> */}



           
           


            {getcartItemaresult?
             
                 <div>
                      <TableComp >
                      <TableTr >
                <TableTh >UserId</TableTh>
                <TableTh >Date</TableTh>
                <TableTh >Time</TableTh>
                <TableTh >OrderId</TableTh>
                <TableTh >Status</TableTh>
                <TableTh >UserDetails</TableTh>
                <TableTh >OrderDetails</TableTh>
            </TableTr>
                   {getcartItemaresult.result.map((items,key) => (

                       items.isdisplay==true?
                    
                       <TableTr key={key}>
                                               <TableTd>{items.userid}</TableTd>
                                               <TableTd>{items.date}</TableTd>
                                               <TableTd>{items.ordertime}</TableTd>
                                               <TableTd>{items.randomid}</TableTd>
                                               {items.status=='Pending'?
                                              <TableTd style={{color:'#CCCC00'}}>{items.status}</TableTd>
                                              :
                                              items.status=='Delivered'?
                                              <TableTd style={{color:'green'}}>{items.status}</TableTd>
                                              :
                                              
                                              <TableTd style={{color:'red'}}>{items.status}</TableTd>
                                            
                                            }
                                               <TableTdIcons ><button onClick={()=>getUserDetailsClick(items.userid)}><CgMoreVerticalO style={{fontSize:30}}/></button></TableTdIcons>
                                               <TableTdIcons ><button onClick={()=>getOrderDetails(items.cartitems,items.status,items._id)}><CgMoreVerticalO style={{fontSize:30}}/></button></TableTdIcons>
                                               <TableTd><button onClick={()=>clickRemove(items._id)}>Remove</button></TableTd>
                               </TableTr>  
                               :
                               <div></div>
        // <div className="image-type">{s.menuItemsName}</div>
      ))}

                      {/* {getItemaresult.items.map((item)=>{ */}
                       {/* //  <div>hdgbsg </div> */}
                               
                     {/* // })} */}
              
                     </TableComp>

                     {loading?
                <Loader
                   isdisplay={'block'}    
                 />
                      :
               <div></div>
            }

                </div>
               
              
             
            
              :
          
           <div>No Items</div>
        
        }     

<ModelsRemoved
                  //  onClickButton={()=>addVarient()}
                  //  onClick={()=>alert('kkk')}
                    getcartItemaresultdata={getcartItemaresult}
                   // varientArr={varients[0]? varients[0]:[]}
                     isdisplay={isblockremoved}
                     onclickSpanClose={()=>setisBlockRemoved('none')}
                     clickRestorebtn={(id)=>clickRemove(id)}
                    // valueVarientnme={varientName}
                    // valueVarientprice={varientPrice}
                    // onChangevarName={(val)=>setVarientname(val.target.value)}
                    // onChangevarPrice={(val)=>setVarientprice(val.target.value)}
                    // clickDelete={(val)=>deleteVarientClick(val)}  
                >
                </ModelsRemoved>

                <ModelUserDetails
                  //  onClickButton={()=>addVarient()}
                  //  onClick={()=>alert('kkk')}
                    getcartItemaresultdata={getcartItemaresult}
                   // varientArr={varients[0]? varients[0]:[]}
                   isdisplayuser={isblockuser}
                     onclickSpanClose={()=>setisBlockUserDetails('none')}
                     firsttName={userDetailsResult!=undefined? userDetailsResult.result[0].firstName:'sas' }
                     lastName={userDetailsResult!=undefined? userDetailsResult.result[0].lastName:'sas' }
                     phoneno={userDetailsResult!=undefined? userDetailsResult.result[0].phoneno:'sas' }
                     address={userDetailsResult!=undefined? userDetailsResult.result[0].addresses[0]:'sas' }
                    // valueVarientprice={varientPrice}
                    // onChangevarName={(val)=>setVarientname(val.target.value)}
                    // onChangevarPrice={(val)=>setVarientprice(val.target.value)}
                    // clickDelete={(val)=>deleteVarientClick(val)}  
                >
                </ModelUserDetails>

        </div>
    )
}



export default  React.memo(Orders);