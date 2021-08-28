import { all, takeEvery, put, fork } from "redux-saga/effects";
// API URIs goes here, now i do not use any
import actions from "./actions";
// Properties here - now i do not use any
const baseUrl='https://resturant123newapp.herokuapp.com';
const  getDatesURL=baseUrl+'/datetime/alldatetime';
const  changeOpenCloseURL=baseUrl+'/datetime/updatedatetime/';

export function* getDates() {
  yield takeEvery(actions.GET_DATES, function* (payload) {
  console.log("payload.data")
    const url = getDatesURL; //'https://api.winmehub.com/v1/api/signup'
    try {
      const response = yield fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":'Bearer '+payload.access_token
        },
        
      });
      const result = yield response.json();
      console.log(response)
      console.log(result)
      if (response.ok) {
          yield put({ type: actions.GET_DATES_RESULT_SUCCESS, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
            type: actions.GET_DATES_RESULT_ERROR,
            result
          });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_DATES_ERROR });
      console.log(error);
    }
  });
}


export function* changeOpenClose() {
  yield takeEvery(actions.CHANGE_OPENCLOSE, function* (payload) {
  console.log(payload.data)
    const url = changeOpenCloseURL+payload.dateid; //'https://api.winmehub.com/v1/api/signup'
    try {
      const response = yield fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":'Bearer '+payload.access_token
        },
        body: JSON.stringify(payload.data)
      });
      const result = yield response.json();
     
      console.log(response)
      console.log(result)
      if (response.ok) {
          yield put({ type: actions.CHANGE_OPENCLOSE_RESULT_SUCCESS, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
            type: actions.CHANGE_OPENCLOSE_RESULT_ERROR,
            result
          
          });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.CHANGE_OPENCLOSE_ERROR });
      console.log(error);
    }
  });
}






export function* defaultFunc() {
}

export default function* rootSaga() {
  yield all([
  
    fork(getDates),
    fork(changeOpenClose),
   
   
   
  ]);
}
