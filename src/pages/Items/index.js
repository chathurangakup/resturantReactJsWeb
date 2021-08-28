import React,{useState,useEffect, useRef} from 'react'
import PropTypes from 'prop-types';
import {TableComp,TableTd,TableTr,TableTh,TableTdIcons,NavBtnLink} from './styleElements'
import { CgMoreVerticalO } from "react-icons/cg";
import {AiFillDelete} from 'react-icons/ai'
import Models from '../commonComponents/models';
import Loader from '../commonComponents/Loader/Loader';
import  itemsAction from '../../redux1/Items/actions';
import './style.css';
import {useSelector,useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";


const {addItems,getItems,deleteItems, clearProps} = itemsAction;




// function useOutsideAlerter(ref) {
//     useEffect(() => {
//       /**
//        * Alert if clicked on outside of element
//        */
//       function handleClickOutside(event) {
//         if (ref.current && !ref.current.contains(event.target)) {
//           alert("You clicked outside of me!");
//         }
//       }
//       // Bind the event listener
//       document.addEventListener("mousedown", handleClickOutside);
//       return () => {
//         // Unbind the event listener on clean up
//         document.removeEventListener("mousedown", handleClickOutside);
//       };
//     }, [ref]);
//   }
  

function Items() {
     const [isblock, setisblock] = useState('none');
     const [itemName, setItemName] = useState('');
     const [itemResult, setItemResult] = useState([]);
 
     const dispatch=useDispatch();
     const history = useHistory();
     const loading=useSelector(state=>state.itemsReducer.loading);
     const getItemaresult=useSelector(state=>state.itemsReducer.getItemaresult);
     const addItemsResult=useSelector(state=>state.itemsReducer.addItemsResult);
     const deleteItemsResult=useSelector(state=>state.itemsReducer.deleteItemsResult);

     

     const getData=()=>{
        const token=localStorage.getItem('accesstoken')
        dispatch(getItems(token));
        // dispatch(clearProps())
       }



     if(addItemsResult!=undefined){
        if(addItemsResult=='err'){

        }else{
            getData();
        }
        dispatch(clearProps())
     }

     if(deleteItemsResult!=undefined){
        if(deleteItemsResult=='err'){

        }else{
            getData();
        }
        dispatch(clearProps())
     }
     
     

// if(getItemaresult!=undefined){
//     console.log(getItemaresult.items)
   
//     // const storeAccess=()=>{
      
    
//     //         setItemResult([...itemResult,{
//     //             menuItemsId:1,
//     //             menuItemsNam:Math.floor(Math.random()*10)+1,
//     //         }])
         
//     //         //console.log(getItemaresult.items[i].menuItemsName)
//     //  }



//     // for(var i=0;i<getItemaresult.items.length;i++){
//     //     storeAccess();
//     //     console.log(itemResult)
//     // }
   
   
//     dispatch(clearProps())
// }


     
    useEffect(() => {
        getData();
        // if(getItemaresult!=undefined){
        //     console.log('lfkkdk')
        // }
   }, []);

 

   const clickmoreBtn=(itemid)=>{
       history.push(`/items/details/${itemid}`);
   }

   const clickAddItemBtn=()=>{
         setisblock('none')
        const token=localStorage.getItem('accesstoken')
            const obj={
                itemname:itemName
            }
            if(itemName==''){

            }else{
                dispatch(addItems(token,obj));
            }
   }

   const clickAddItemBtnClick=()=>{
      setisblock('block')
      setItemName('')
   }

   const clickDeleteBtn=(itemid)=>{
      
      const token=localStorage.getItem('accesstoken')
      dispatch(deleteItems(token,itemid));
   }


    return (
        
        <div   >
              {/* <Sidebar  
    //   /  sidebar={falase}
        //showSidebar={showSidebar} 
      />  */}
            <div className='btnAlign'>
               <button className="button" onClick={()=>clickAddItemBtnClick()} ><span>Add Items </span></button>
            </div>

            <Models
                    btnOnClick={()=>clickAddItemBtn()}
                    isdisplay={isblock}
                    value={itemName}
                    onChangetxt={(e)=>setItemName(e.target.value)}
                    onclickSpanClose={()=>setisblock('none')}
                />



           
           


            {getItemaresult!=undefined?
             
                 <div>
                      <TableComp >
                      <TableTr >
                <TableTh >Id</TableTh>
                <TableTh >Name</TableTh>
                <TableTh >ItemDetails</TableTh>
                <TableTh >Delete</TableTh>
            </TableTr>
                   {getItemaresult.items.map((items,key) => (
                      <TableTr key={key}>
                                               <TableTd>{items.menuItemsId}</TableTd>
                                               <TableTd>{items.menuItemsName}</TableTd>
                                               <TableTdIcons ><button onClick={()=>clickmoreBtn(items.menuItemsId)}><CgMoreVerticalO style={{fontSize:30}}/></button></TableTdIcons>
                                               <TableTd><button onClick={()=>clickDeleteBtn(items.menuItemsId)}><AiFillDelete style={{fontSize:30,color:'red'}}/></button></TableTd>
                               </TableTr>  
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

          
           
              
        

                   
        

            
               
        </div>
    )
}



export default Items;

