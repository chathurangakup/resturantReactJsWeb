
import startUpActions from "./actions";

const loginerr=undefined;
const getItemaresult=undefined;
const addItemsResult=undefined;
const deleteItemsResult=undefined;

const initState = {
    loginerr:undefined,
    loginresult:undefined,
    getItemaresult:undefined,
    addItemsResult:undefined,
    deleteItemsResult:undefined

  
};

export default function itemsReducer(state = initState, action) {
  switch (action.type) {

        //clear Props
        case startUpActions.CLEAR_PROPS:
           return{
               ...state,
               loginresult:undefined,
               loginerr:undefined,
               getItemaresult:undefined,
               addItemsResult:undefined,
               deleteItemsResult:undefined
              
                 
          }

          case startUpActions.GET_ITEMS:
            return{
              ...state,
              loading:true
            }
      
          case startUpActions.GET_ITEMS_RESULT_SUCCESS:
              return{
                ...state,
                getItemaresult:action.result,
                loading:false
      
              }
         case startUpActions.GET_ITEMS_RESULT_ERROR:
                return{
                  ...state,
                  getItemaresult:'err',
                  loading:false
                }
         case startUpActions.GET_ITEMS_ERROR:
                  return{
                     ...state,
                     getItemaresult:'err',
                    loading:false
                  }



                  case startUpActions.DELETE_ITEMS:
                    return{
                      ...state,
                      loading:true
                    }
              
                  case startUpActions.DELETE_ITEMS_RESULT_SUCCESS:
                      return{
                        ...state,
                        deleteItemsResult:action.result,
                        loading:false
              
                      }
                 case startUpActions.DELETE_ITEMS_RESULT_ERROR:
                        return{
                          ...state,
                          deleteItemsResult:'err',
                          loading:false
                        }
                 case startUpActions.DELETE_ITEMS_ERROR:
                          return{
                             ...state,
                             deleteItemsResult:'err',
                            loading:false
                          }
        


                 case startUpActions.ADD_ITEMS:
                        return{
                              ...state,
                              loading:true
                            }
                      
               case startUpActions.ADD_ITEMS_RESULT_SUCCESS:
                       return{
                                ...state,
                                addItemsResult:action.result,
                                loading:false,
                      
                              }
                case startUpActions.ADD_ITEMS_RESULT_ERROR:
                         return{
                                  ...state,
                                  addItemsResult:'err',
                                  loading:false
                     }
               case startUpActions.ADD_ITEMS_ERROR:
                        return{
                                     ...state,
                                     addItemsResult:'err',
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
