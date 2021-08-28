
import startUpActions from "./actions";

const loginerr=undefined;
const getcartItemaresult=undefined;
const userDetailsResult=undefined;

const initState = {
    loginerr:undefined,
    getcartItemaresult:undefined,
    userDetailsResult:undefined,
    changeIsdisplayResult:undefined,
    changeStatusResult:undefined
 

  
};

export default function cartReducer(state = initState, action) {
  switch (action.type) {

        //clear Props
        case startUpActions.CLEAR_PROPS:
           return{
               ...state,
               getcartItemaresult:undefined,
               userDetailsResult:undefined,
               changeIsdisplayResult:undefined,
               changeStatusResult:undefined
             
              
                 
          }

          case startUpActions.GET_CART_ITEMS:
            return{
              ...state,
              loading:true
            }
      
          case startUpActions.GET_CART_ITEMS_RESULT_SUCCESS:
              return{
                ...state,
                getcartItemaresult:action.result,
                loading:false
      
              }
         case startUpActions.GET_CART_ITEMS_RESULT_ERROR:
                return{
                  ...state,
                   getcartItemaresult:'err',
                  loading:false
                }
         case startUpActions.GET_CART_ITEMS_ERROR:
                  return{
                     ...state,
                   //  getItemaresult:'err',
                    loading:false
                  }



         case startUpActions.CHANGE_STATUS:
                    return{
                      ...state,
                      loading:true
                    }
              
         case startUpActions.CHANGE_STATUS_RESULT_SUCCESS:
                      return{
                        ...state,
                        changeStatusResult:action.result,
                        loading:false
              
                      }
         case startUpActions.CHANGE_STATUS_RESULT_ERROR:
                        return{
                          ...state,
                          changeStatusResult:'err',
                          loading:false
                        }
        case startUpActions.CHANGE_STATUS_ERROR:
                          return{
                             ...state,
                             changeStatusResult:'err',
                            loading:false
                          }
        


            case startUpActions.CHANGE_ISDISPLAY:
                            return{
                              ...state,
                              loading:true
                            }
                      
                 case startUpActions.CHANGE_ISDISPLAY_RESULT_SUCCESS:
                              return{
                                ...state,
                               changeIsdisplayResult:action.result,
                                loading:false
                      
                              }
                 case startUpActions.CHANGE_ISDISPLAY_RESULT_ERROR:
                                return{
                                  ...state,
                                  changeIsdisplayResult:'err',
                                  loading:false
                                }
                case startUpActions.CHANGE_ISDISPLAY_ERROR:
                                  return{
                                     ...state,
                                     changeIsdisplayResult:'err',
                                    loading:false
                                  }
          
                                  
            case startUpActions.GET_USERDETAILS:
                                    return{
                                      ...state,
                                      loading:true
                                    }
                              
           case startUpActions.GET_USERDETAILS_RESULT_SUCCESS:
                                      return{
                                        ...state,
                                       userDetailsResult:action.result,
                                        loading:false
                              
                                      }
         case startUpActions.GET_USERDETAILS_RESULT_ERROR:
                                        return{
                                          ...state,
                                          userDetailsResult:'err',
                                          loading:false
                                        }
            case startUpActions.GET_USERDETAILS_ERROR:
                                          return{
                                             ...state,
                                             userDetailsResult:'err',
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
