
import startUpActions from "./actions";

const loginerr=undefined;

const initState = {
    loginerr:undefined,
    loginresult:undefined

  
};

export default function startUpReducer(state = initState, action) {
  switch (action.type) {

        //clear Props
        case startUpActions.CLEAR_PROPS:
           return{
               ...state,
               loginresult:undefined,
               loginerr:undefined,
              
                 
          }

          case startUpActions.LOGIN_USER:
            return{
              ...state,
              loading:true
            }
      
          case startUpActions.LOGIN_USER_RESULT_SUCCESS:
              return{
                ...state,
                loginresult:action.result,
                loading:false
      
              }
         case startUpActions.LOGIN_USER_RESULT_ERROR:
                return{
                  ...state,
                  loginerr:action.result,
                  loading:false
                }
         case startUpActions.LOGIN_USER_ERROR:
                  return{
                     ...state,
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
