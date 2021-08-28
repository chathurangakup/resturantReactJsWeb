import React,{useState,useEffect} from 'react';
import {TableComp,TableTd,TableTr,TableTh,TableTdIcons,NavBtnLink} from './styleElements'
import { CgMoreVerticalO } from "react-icons/cg";
import {AiFillDelete} from 'react-icons/ai';
import Loader from '../commonComponents/Loader/Loader';
import  datesAction from '../../redux1/Date/actions';
import './styles.css';
import {useSelector,useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";

const {getDates,changeOpenClose, clearProps} = datesAction;

function DateTimeChange() {
    // const [isblock, setisblock] = useState('none');
    // const [itemName, setItemName] = useState('');
    // const [itemResult, setItemResult] = useState([]);

    const dispatch=useDispatch();
    const history = useHistory();
    const loading=useSelector(state=>state.dateReducer.loading);
     const getDateTimeresult=useSelector(state=>state.dateReducer.getDateTimeresult);
     const changeDateTimeResult=useSelector(state=>state.dateReducer.changeDateTimeResult);
    const token=localStorage.getItem('accesstoken');

    const getData=()=>{
    
        dispatch(getDates(token));
        // dispatch(clearProps())
       }



    useEffect(() => {
        getData();
        // if(getItemaresult!=undefined){
        //     console.log('lfkkdk')
        // }
   }, []);


   if(changeDateTimeResult!=undefined){
       if(changeDateTimeResult=='err'){

        }else{
            getData();
            console.log(changeDateTimeResult)
            dispatch(clearProps())
        }

   }


   const clickChange=(status,id)=>{
       if(status=='Open'){
                const obj={
                
                    "openhours":7,
                    "closehours":7,
                    "status":"Close"
                
            }

            dispatch(changeOpenClose(token,id,obj))
       }else{
        const obj={
            "openhours":7,
            "closehours":7,
            "status":"Open"
        }
        dispatch(changeOpenClose(token,id,obj))

       }
    
   }

    return (
        <div>
              {getDateTimeresult?
              <div>
        <TableComp >
        <TableTr >
          
            <TableTh >Day</TableTh>
            <TableTh >Open/Close</TableTh>
            <TableTh >Change</TableTh>
   </TableTr>
     {getDateTimeresult.users.map((items,key) => (
        <TableTr key={key}>
                              
                                 <TableTd>{items.dayname}</TableTd>
                                 {items.status=='Open'?
                                  <TableTd style={{color:'green'}}>{items.status}</TableTd>
                                  :
                                  <TableTd style={{color:'red'}} >{items.status}</TableTd>
                                 
                                }
                                
                                 <TableTdIcons ><button class="btn success" onClick={()=>clickChange(items.status,items._id)}>{items.status}</button></TableTdIcons>
                                
                 </TableTr>  
// <div className="image-type">{s.menuItemsName}</div>
))}


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
<div>No items</div>
}

  </div>

  

    )
}

export default DateTimeChange
