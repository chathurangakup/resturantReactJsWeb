import React,{useState,useEffect} from 'react'
import './styles.css'
import Models from './components/modelForm'
import ModelsVarient from './components/modelvarient'
import TextInput from '../commonComponents/TextInput'
import {storage} from '../../firebase'
import { RiOpenSourceLine } from 'react-icons/ri'
import {AiFillDelete} from 'react-icons/ai';
import Loader from '../commonComponents/Loader/Loader';
import { RiDeleteBin3Fill } from "react-icons/ri";

import  itemsCatAction from '../../redux1/ItemsCategory/actions';
import {useSelector,useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
const {getItemsCat,addVarients,addItemsCat,deleteItemsCat,deleteVarient, clearProps} = itemsCatAction;


function ItemDetails({match}) {
  const [isblock, setisblock] = useState('none');
  const [isblockvar, setisblockVar] = useState('none');
  const [menuCatid, setMenuCatid] = useState('');
  const [varientName, setVarientname] = useState('');
  const [varientPrice, setVarientprice] = useState('');
  const [itemCatName, setItemCatName] = useState('');
  const [itemCatPrice, setItemCatPrice] = useState('');
  const [itemCatDesc, setItemCatDesc] = useState('');
  const [itemCatImage, setItemCatImage] = useState('');
  const [isloader, setIsLoader] = useState(false);


  const [varients, setVarients] = useState([]);
  const [images, setImages] = React.useState([]);
  const [selectimage, setSelectImages] = React.useState({});
  const [selectimagename, setSelectImageName] = React.useState('');
  const [params, setParams] = useState(match.params.id);

  const dispatch=useDispatch();
  const history = useHistory();
  const loading=useSelector(state=>state.itemCatReducer.loading);
  const getItemCatResult=useSelector(state=>state.itemCatReducer.getItemCatResult);
  const addItemCatResult=useSelector(state=>state.itemCatReducer.addItemCatResult);
  const deleteitemctResult=useSelector(state=>state.itemCatReducer.deleteitemctResult);
  const deleteVarientResult=useSelector(state=>state.itemCatReducer.deleteVarientResult);
  const addVarientResult=useSelector(state=>state.itemCatReducer.addVarientResult);

  const userid=localStorage.getItem('userid')
  const token=localStorage.getItem('accesstoken')
  

  const getData=()=>{
   
    dispatch(getItemsCat(token,params,''))
    dispatch(clearProps())
}

// if(loading!=undefined){
//    console.log(loading)
  

//    if(loading=='true'){
//      alert(loading)
//   //   const storeAccess=(isload)=>{
//   //     setIsLoader(isload)
//   // }
//     //  storeAccess(true);
//    }else{
//     // const storeAccess=(isload)=>{
//     //   setIsLoader(isload)
//     // }
//     // setIsLoader(false);
//     //alert(loading)
//    }
   
// }





  if(addItemCatResult!=undefined){
  
    console.log(addItemCatResult.result)
    if(addItemCatResult.result=='Success'){
         getData()    
    }
    dispatch(clearProps())
  }

  if(deleteitemctResult!=undefined){
    console.log(deleteitemctResult.result)
    if(deleteitemctResult=='err'){
        
    }else{
      getData();   
    }
    dispatch(clearProps())
  }

  if(deleteVarientResult!=undefined){
    console.log(deleteVarientResult.result)
    if(deleteVarientResult=='err'){
        
    }else{
      getData();   
    }
    dispatch(clearProps())
  }

  if(addVarientResult!=undefined){
    console.log(addVarientResult.result)
    if(addVarientResult=='err'){
        
    }else{
      getData();   
    }
    dispatch(clearProps())
  }





 const addItems=async()=>{
       setisblock('none')
      //  setItemCatDesc('')
      //  setItemCatName('')
      //  setItemCatPrice('')
      //  setItemCatImage('')
      const uploadTask=storage.ref(`images/${selectimagename}`).put(selectimage);
      uploadTask.on(
        "state_changed",
        snapshot=>{},
        error=>{
          console.log(error);
        },
        ()=>{
          storage.ref('images')
          .child(selectimagename)
          .getDownloadURL()
            .then(url=>{
              const obj={
                itemid:params,
                categoryname:itemCatName,
                description:itemCatDesc,
                price:itemCatPrice,
                image:url
              }
              console.log(obj)
              const token=localStorage.getItem('accesstoken')
              dispatch(addItemsCat(token,obj))
             //  setItemCatImage(url)
             //  addItemsData();

            })
          
        }
      )
    console.log('dajdjkak')
  }


  const addItemsData=async()=>{
   
  }


  const addVarient=()=>{
    console.log(varientPrice)
    console.log(varientName)
    console.log(userid)
    setisblockVar('none')
    setVarientname('')
    setVarientprice('')
    
    const obj={
      userid:userid,
      varientname:varientName,
      price:varientPrice
    }

    dispatch(addVarients(token,menuCatid,obj))
  }


 const addItemsbtnClick=()=>{
     setisblock('block')
     setImages([]);
     setSelectImages({});
     setSelectImageName('');
     setItemCatDesc('')
     setItemCatName('')
     setItemCatPrice('')
     setItemCatImage('')
  }

  const addVarientbtnClick=(varientsarr,menucatid)=>{
    setVarients([])
    setisblockVar('block')
    setMenuCatid(menucatid)
    setVarients([varientsarr])
  }

  useEffect(() => {
    console.log(varients)
}, [varients]);



  useEffect(() => {
          //props.navigation.getParam('id')
          getData();
  }, [])
 
  const deleteItemsCatClick=(id)=>{
  
      console.log(id)
      dispatch(deleteItemsCat(token,id))
  }

  const deleteVarientClick=(varientid)=>{
    setisblockVar('none')
     console.log(varientid)
     console.log(menuCatid)
     console.log(token)
      dispatch(deleteVarient(token,menuCatid,varientid))
  }
  
    return (
        <div>
           <h2>Category Items</h2>


<div class="row">

{getItemCatResult?

  getItemCatResult.result.map((item)=>(
<div class="column">
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src={item.image} alt="Avatar" style={{width:'250px',height:'250px'}}/>
      </div>
      <div class="flip-card-back-back" > 
      <div style={{overflowY:'scroll',height:'200px'}}>
        <h3>{item.categoryname}</h3> 
       
        <p>{item.description}</p> 
        <p>Rs: {item.price}</p>
     </div>


        <div className="card-button">
        <span style={{width:'10px'}}></span>
            <div className='bottomcardbtn'>
                <button class="btn" onClick={()=>addVarientbtnClick(item.varients,item._id)}><i class="fa fa-file"></i> Varients</button>
            </div>
            <span style={{width:'20px'}}></span>
            <div className='bottomcardbtn'>
               <button class="btn" onClick={()=>deleteItemsCatClick(item._id)}><RiDeleteBin3Fill style={{paddingBottom:5}}/> Delete</button>
            </div> 
        </div>
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


                <Models
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



          <div className='btnAlign'>
               <button className="button" onClick={()=>addItemsbtnClick()} ><span>Add Items </span></button>
            </div>
        </div>
    )
}

export default ItemDetails
