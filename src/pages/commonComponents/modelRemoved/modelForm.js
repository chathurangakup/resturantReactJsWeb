import React from 'react'
import PropTypes from 'prop-types'
import {ModelContaioner} from "./stylesElements";
import './styles.css';

import ImageUploading from 'react-images-uploading';
import {TableComp,TableTd,TableTr,TableTh,TableTdIcons,NavBtnLink} from '../../Orders/styleElements'
import { CgMoreVerticalO } from "react-icons/cg";

function ModelsForm(props) {
    const [images, setImages] = React.useState([]);
    const maxNumber = 1;
   
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };

    const clickRestore=(id)=>{
        props.clickRestorebtn(id)
    }



    return (
        <ModelContaioner isdisplay={props.isdisplay} ref={props.ref}>
            <div className="modal-contentsremove">
                <span className="closes" onClick={props.onclickSpanClose}>&times;</span>
                <div><h3>Add New Item</h3></div>
               <div >
               {props.getcartItemaresultdata?
             
             <div>
                  <TableComp >
                  <TableTr >
            <TableTh >UserId</TableTh>
            <TableTh >Date</TableTh>
            <TableTh >OrderId</TableTh>
            <TableTh >Status</TableTh>
            {/* <TableTh >UserDetails</TableTh>
            <TableTh >OrderDetails</TableTh> */}
        </TableTr>
               {props.getcartItemaresultdata.result.slice().reverse().map((items,key) => (

                    items.isdisplay==false?
                
                   <TableTr key={key}>
                                           <TableTd>{items.userid}</TableTd>
                                           <TableTd>{items.date}</TableTd>
                                           <TableTd>{items.randomid}</TableTd>
                                           <TableTd>{items.status}</TableTd>
                                           {/* <TableTdIcons ><button ><CgMoreVerticalO style={{fontSize:30}}/></button></TableTdIcons>
                                           <TableTdIcons ><button><CgMoreVerticalO style={{fontSize:30}}/></button></TableTdIcons> */}
                                           <TableTd><button  onClick={()=>clickRestore(items._id)}>Restore</button></TableTd>
                           </TableTr> 
                           :
                           <div></div> 
                         
    // <div className="image-type">{s.menuItemsName}</div>
  ))}

                  {/* {getItemaresult.items.map((item)=>{ */}
                   {/* //  <div>hdgbsg </div> */}
                           
                 {/* // })} */}
          
                 </TableComp>


            </div>
           
          
         
        
          :
      
       <div>No Items</div>
    
    }     
                
               </div>
            </div>

        </ModelContaioner>
    )
}

// Models.propTypes = {

// }

export default ModelsForm

