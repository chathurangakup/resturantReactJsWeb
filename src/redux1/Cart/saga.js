import { all, takeEvery, put, fork } from "redux-saga/effects";
// API URIs goes here, now i do not use any
import actions from "./actions";
// Properties here - now i do not use any
const baseUrl='https://resturant123newapp.herokuapp.com';
const  getCartItemsURL=baseUrl+'/cart/gettypes/';
const  changeStatusURL=baseUrl+'/cart/changestatus/';
const  changeIsDisplayURL=baseUrl+'/cart/changeisdisplay/';
const  getUserDetailsURL=baseUrl+'/users/usrdetails/';

export function* getCartItems() {
  yield takeEvery(actions.GET_CART_ITEMS, function* (payload) {
  console.log("payload.data")
    const url = getCartItemsURL+payload.types; //'https://api.winmehub.com/v1/api/signup'
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
          yield put({ type: actions.GET_CART_ITEMS_RESULT_SUCCESS, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
            type: actions.GET_CART_ITEMS_RESULT_ERROR,
            result
          });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_CART_ITEMS_ERROR });
      console.log(error);
    }
  });
}


export function* changeStatus() {
  yield takeEvery(actions.CHANGE_STATUS, function* (payload) {
  console.log(payload.data)
    const url = changeStatusURL+payload.itemid+'/status/'+payload.status; //'https://api.winmehub.com/v1/api/signup'
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
          yield put({ type: actions.CHANGE_STATUS_RESULT_SUCCESS, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
            type: actions.CHANGE_STATUS_RESULT_ERROR,
            result
          
          });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.DELETE_ITEMS_ERROR });
      console.log(error);
    }
  });
}



export function* changeIsDisplay() {
  yield takeEvery(actions.CHANGE_ISDISPLAY, function* (payload) {
  console.log(payload.data)
    const url = changeIsDisplayURL+payload.menuitemid; //'https://api.winmehub.com/v1/api/signup'
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
          yield put({ type: actions.CHANGE_ISDISPLAY_RESULT_SUCCESS, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
            type: actions.CHANGE_ISDISPLAY_RESULT_ERROR,
            result
          
          });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.CHANGE_ISDISPLAY_ERROR });
      console.log(error);
    }
  });
}



export function* getUserDetails() {
  yield takeEvery(actions.GET_USERDETAILS, function* (payload) {
  console.log(payload.data)
    const url = getUserDetailsURL+payload.userid; //'https://api.winmehub.com/v1/api/signup'
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
          yield put({ type: actions.GET_USERDETAILS_RESULT_SUCCESS, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
            type: actions.GET_USERDETAILS_RESULT_ERROR,
            result
          
          });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_USERDETAILS_ERROR });
      console.log(error);
    }
  });
}








export function* defaultFunc() {
}

export default function* rootSaga() {
  yield all([
  
    fork(getCartItems),
    fork(changeStatus),
    fork(changeIsDisplay),
    fork(getUserDetails)
  
   
   
  ]);
}
