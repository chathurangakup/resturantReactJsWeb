
import startUpActions from "./actions";

const loginerr=undefined;
const getDateTimeresult=undefined;


const initState = {
    loginerr:undefined,
    getDateTimeresult:undefined,
    changeDateTimeResult:undefined

 

  
};

export default function dateReducer(state = initState, action) {
  switch (action.type) {

        //clear Props
        case startUpActions.CLEAR_PROPS:
           return{
               ...state,
               getDateTimeresult:undefined,
               changeDateTimeResult:undefined
            
             
              
                 
          }

          case startUpActions.GET_DATES:
            return{
              ...state,
              loading:true
            }
      
          case startUpActions.GET_DATES_RESULT_SUCCESS:
              return{
                ...state,
                getDateTimeresult:action.result,
                loading:false
      
              }
         case startUpActions.GET_DATES_RESULT_ERROR:
                return{
                  ...state,
                  getDateTimeresult:'err',
                  loading:false
                }
         case startUpActions.GET_DATES_ERROR:
                  return{
                     ...state,
                     getDateTimeresult:'err',
                    loading:false
                  }



         case startUpActions.CHANGE_OPENCLOSE:
                    return{
                      ...state,
                      loading:true
                    }
              
         case startUpActions.CHANGE_OPENCLOSE_RESULT_SUCCESS:
                      return{
                        ...state,
                        changeDateTimeResult:action.result,
                        loading:false
              
                      }
         case startUpActions.CHANGE_OPENCLOSE_RESULT_ERROR:
                        return{
                          ...state,
                         changeDateTimeResult:'err',
                          loading:false
                        }
        case startUpActions.CHANGE_OPENCLOSE_ERROR:
                          return{
                             ...state,
                             changeDateTimeResult:'err',
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
