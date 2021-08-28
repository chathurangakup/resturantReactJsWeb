import React,{useState,useEffect} from 'react'
import './styles.css'
import Models from './components/modelForm'
import ModelsVarient from './components/modelvarient'
import TextInput from '../commonComponents/TextInput'
import DropDown from '../commonComponents/DropDown'
import {storage} from '../../firebase'
import { RiOpenSourceLine } from 'react-icons/ri'
import {AiFillDelete} from 'react-icons/ai';
import Loader from '../commonComponents/Loader/Loader';
import {TableComp1,TableTd1,TableTr1} from './styleElemnt'

import  cartCatAction from '../../redux1/Cart/actions';
import {useSelector,useDispatch} from 'react-redux';
import { useHistory,withRouter  } from "react-router-dom";
const {changeStatus, clearProps} = cartCatAction;



function ItemDetails({match}) {
  const [items,setItems] = useState([]);
  const [isloader, setIsLoader] = useState(false);
  const [cartitems, setICartItems] = useState([]);
  const [status, setStatus] = useState('');
  const [type, setType] = useState('');
  const [lable, setLable] = useState('Pending');
  const [cartitemid, setCartItemId] = useState('');

  const dispatch=useDispatch();
  const history = useHistory();
  const loading=useSelector(state=>state.cartReducer.loading);



  const userid=localStorage.getItem('userid')
  const token=localStorage.getItem('accesstoken')
  

  const getData=()=>{
    var storedNames = JSON.parse(localStorage.getItem("cartitems"));
    var status = localStorage.getItem("status");
    var type = localStorage.getItem("type");
    var cartitemid = localStorage.getItem("cartitemid");
    setCartItemId(cartitemid)
    

   if(type=='Delivery'){
     setItems([
      {
        label: "Pending",
        value: "Pending"
      },
      { label: "Delivered", value: "Delivered" },
      { label: "Cancel", value: "Cancel" },
     
    ])
   
   }else{
    setItems([
      {
        label: "Pending",
        value: "Pending"
      },
      { label: "Ready", value: "Ready" },
      { label: "Success", value: "Success" },
      { label: "Cancel", value: "Cancel" },
     
    ])
   
   }

    console.log(storedNames)
    setICartItems(storedNames)
    setStatus(status)
    setType(type)

  
}

useEffect(() => {
  getData();

  console.log(cartitems)
}, [])


const changeStatusClick=()=>{
  console.log(lable)
  console.log(cartitemid)
//  setLable(label)
dispatch(changeStatus(token,cartitemid,lable))
}




  
    return (
        <div>
          <div class='row'>
            <div>
               <h2>Category Items</h2>
            </div>
            <div style={{paddingLeft:'10%'}}>
                <DropDown
                                  //  value={arraylist.email}
                                    value={lable}
                                    handleChange={e => setLable(e.currentTarget.value)}
                                    dropdownlist={items}
                                    
                               />
            </div>
           
            <div style={{paddingLeft:'5%'}}> <button class="btn warning" onClick={()=>changeStatusClick()}>Update</button></div>
          </div>
          


<div class="row">

{cartitems?

cartitems.map((item)=>(
<div class="column">
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src={item.image} alt="Avatar" style={{width:'250px',height:'250px'}}/>
      </div>
      <div class="flip-card-back" style={{paddingTop:20}}>

      <TableComp1>
         
          <TableTr1>
            <TableTd1>{item.categoryname}</TableTd1>
            <TableTd1>Rs: {item.price}</TableTd1>
          </TableTr1>
          {item.varients.length!=0?
         
          <TableTr1>
            <TableTd1>{item.varients[0].varientname}</TableTd1>
            <TableTd1>Rs : {item.varients[0].price}</TableTd1>
          </TableTr1>
        
         
            :
            <div></div>
          }
            <TableTr1>
            <TableTd1>Qty</TableTd1>
            <TableTd1>{item.qty}</TableTd1>
          </TableTr1>
          <TableTr1>
            <TableTd1>Sub Total</TableTd1>
            <TableTd1>Rs: {item.totprice}</TableTd1>
          </TableTr1>
      </TableComp1>

      {/* <div style={{justifyContent:'space-between',justifyContent:'center'}} class='row' >
          
           <h4>{item.categoryname}</h4> 
           <p style={{paddingLeft:20}}></p>
           <p>Rs: {item.price}</p>
        </div>
       
        {item.varients.length!=0?
          <div style={{justifyContent:'space-between',justifyContent:'center'}} class='row' >
          <h4>{item.varients[0].varientname}</h4>
          <p style={{paddingLeft:20}}></p>
          <p>Rs: {item.varients[0].price}</p>
       </div>
       :
       <div></div>
        
      }
      
       
        <div style={{justifyContent:'space-between',justifyContent:'center'}} class='row' >
           <h3>Total Price</h3>
           <p style={{paddingLeft:20}}></p>
           <h3>Rs: {item.totprice}</h3>
        </div>
      */}
      </div>
    </div>
    </div>
    {loading?
        <Loader
           isdisplay={'block'}    
         />
              :
       <div></div>
    }
  </div>
  )
  )
  :
  <div></div>

  }


  

  </div>


                {/* <Models
                 onClickButton={()=>addItems()}
                 onChange={(imageList, addUpdateIndex)=>{
    // data for submit
                  if(imageList.length==0){
                    setImages([]);
                    setSelectImages({});
                    setSelectImageName('')
                  }else{
                    console.log(imageList[0].file);
                    console.log(imageList[0].file.name);
                    setImages(imageList);
                    setSelectImages(imageList[0].file);
                    setSelectImageName(imageList[0].file.name)
                  }
                 
                 }}
                 
                    images={images}
                    valItemcatPrice={itemCatPrice}
                    valItemcatName={itemCatName}
                    valItemcatDesc={itemCatDesc}
                    onChangeDesc={(e)=>setItemCatDesc(e.target.value)}
                    onChangeName={(e)=>setItemCatName(e.target.value)}
                    onChangePrice={(e)=>setItemCatPrice(e.target.value)}
                
                    isdisplay={isblock}
                    onclickSpanClose={()=>setisblock('none')}
                >


                    
                </Models>

                <ModelsVarient
                    onClickButton={()=>addVarient()}
                    onClick={()=>alert('kkk')}
                    varientArr={varients[0]? varients[0]:[]}
                    isdisplay={isblockvar}
                    onclickSpanClose={()=>setisblockVar('none')}
                    valueVarientnme={varientName}
                    valueVarientprice={varientPrice}
                    onChangevarName={(val)=>setVarientname(val.target.value)}
                    onChangevarPrice={(val)=>setVarientprice(val.target.value)}
                    clickDelete={(val)=>deleteVarientClick(val)}

                    
                >

                </ModelsVarient>
 */}


       
        </div>
    )
}

export default ItemDetails
