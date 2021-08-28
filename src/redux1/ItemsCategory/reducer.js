
import startUpActions from "./actions";


const getItemCatResult=undefined;
const addItemCatResult=undefined;
const deleteitemctResult=undefined;
const deleteVarientResult=undefined;
const  addVarientResult=undefined;

const initState = {

    getItemCatResult:undefined,
    addItemCatResult:undefined,
    deleteitemctResult:undefined,
    deleteVarientResult:undefined,
    addVarientResult:undefined

  
};

export default function itemCatReducer(state = initState, action) {
  switch (action.type) {

        //clear Props
        case startUpActions.CLEAR_PROPS:
           return{
               ...state,
              
               getItemCatResult:undefined,
               addItemCatResult:undefined,
               deleteitemctResult:undefined,
               deleteVarientResult:undefined,
               addVarientResult:undefined     
          }

          case startUpActions.GET_ITEMS_CAT:
            return{
              ...state,
              loading:true
            }
      
          case startUpActions.GET_ITEMS_CAT_RESULT_SUCCESS:
              return{
                ...state,
                getItemCatResult:action.result,
                loading:false
      
              }
         case startUpActions.GET_ITEMS_CAT_RESULT_ERROR:
                return{
                  ...state,
                  getItemCatResult:'err',
                  loading:false
                }
         case startUpActions.GET_ITEMS_CAT_ERROR:
                  return{
                     ...state,
                     getItemCatResult:'err',
                    loading:false
                  }



        case startUpActions.DELETE_ITEMS_CAT:
                    return{
                      ...state,
                      loading:true
                    }
              
       case startUpActions.DELETE_ITEMS_CAT_RESULT_SUCCESS:
                      return{
                        ...state,
                        deleteitemctResult:action.result,
                        loading:false
              
                      }
          case startUpActions.DELETE_ITEMS_CAT_RESULT_ERROR:
                        return{
                          ...state,
                          deleteitemctResult:'err',
                          loading:false
                        }
          case startUpActions.DELETE_ITEMS_CAT_ERROR:
                          return{
                             ...state,
                             deleteitemctResult:'err',
                            loading:false
                          }
        



             case startUpActions.DELETE_VARIENT:
                            return{
                              ...state,
                              loading:true
                            }
                      
              case startUpActions.DELETE_VARIENT_RESULT_SUCCESS:
                              return{
                                ...state,
                                deleteVarientResult:action.result,
                                loading:false
                      
                              }
              case startUpActions.DELETE_VARIENT_RESULT_ERROR:
                                return{
                                  ...state,
                                  deleteVarientResult:'err',
                                  loading:false
                                }
                case startUpActions.DELETE_VARIENT_ERROR:
                                return{
                                     ...state,
                                     deleteVarientResult:'err',
                                    loading:false
                               }
                
        


         case startUpActions.ADD_ITEMS_CAT:
                        return{
                              ...state,
                              loading:true
                            }
                      
          case startUpActions.ADD_ITEMS_CAT_RESULT_SUCCESS:
                       return{
                            ...state,
                            addItemCatResult:action.result,
                            loading:false
                      
                       }
          case startUpActions.ADD_ITEMS_CAT_RESULT_ERROR:
                         return{
                          ...state,
                          addItemCatResult:'err',
                          loading:false
                        }
          case startUpActions.ADD_ITEMS_CAT_ERROR:
                        return{
                             ...state,
                             addItemCatResult:'err',
                              loading:false
                          }



          case startUpActions.ADD_VARIENT:
                            return{
                                  ...state,
                                  loading:true
                                }
                          
              case startUpActions.ADD_VARIENT_RESULT_SUCCESS:
                           return{
                                ...state,
                                addVarientResult:action.result,
                                loading:false
                          
                           }
              case startUpActions.ADD_VARIENT_RESULT_ERROR:
                             return{
                              ...state,
                              addVarientResult:'err',
                              loading:false
                            }
              case startUpActions.ADD_VARIENT_ERROR:
                            return{
                                 ...state,
                                 addVarientResult:'err',
                                  loading:false
                              }
    

    case startUpActions.DEFAULT_RESULT:
      return state;
    case startUpActions.DEFAULT_ERROR:
      return state;
    default:
      return state;
  }
}
