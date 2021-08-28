import { all, takeEvery, put, fork, call } from "redux-saga/effects";
// API URIs goes here, now i do not use any
import actions from "./actions";
// Properties here - now i do not use any
const baseUrl='https://resturant123newapp.herokuapp.com';
const loginURL=baseUrl+'/users/login';






export function* loginUser() {
  yield takeEvery(actions.LOGIN_USER, function* (payload) {
  console.log(payload.data)
    const url = loginURL; //'https://api.winmehub.com/v1/api/signup'
    try {
      const response = yield fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
         body: JSON.stringify(payload.data)

      });
      const result = yield response.json();
     
      console.log(response)
      console.log(result)
      if (response.ok) {
      
      
          yield put({ type: actions.LOGIN_USER_RESULT_SUCCESS, result });
        
      
       // console.log(result)
      } else {
        console.log("result")
        yield put({
            type: actions.LOGIN_USER_RESULT_ERROR,
            result
          
          });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.LOGIN_USER_ERROR });
      console.log(error);
    }
  });
}








export function* defaultFunc() {
}

export default function* rootSaga() {
  yield all([
  
    fork(loginUser),
   
   
  ]);
}
