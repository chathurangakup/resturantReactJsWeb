import { all, takeEvery, put, fork } from "redux-saga/effects";
// API URIs goes here, now i do not use any
import actions from "./actions";
// Properties here - now i do not use any
const baseUrl='https://resturant123newapp.herokuapp.com';
const  getItemsURL=baseUrl+'/items/allmenuitems';
const  addItemsURL=baseUrl+'/items/addItemName';
const  deleteItemsURL=baseUrl+'/items/deleteItems/';


export function* getItems() {
  yield takeEvery(actions.GET_ITEMS, function* (payload) {
  console.log("payload.data")
    const url = getItemsURL; //'https://api.winmehub.com/v1/api/signup'
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
          yield put({ type: actions.GET_ITEMS_RESULT_SUCCESS, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
            type: actions.GET_ITEMS_RESULT_ERROR,
            result
          });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_ITEMS_ERROR });
      console.log(error);
    }
  });
}


export function* deleteItems() {
  yield takeEvery(actions.DELETE_ITEMS, function* (payload) {
  console.log(payload.data)
    const url = deleteItemsURL+payload.itemid; //'https://api.winmehub.com/v1/api/signup'
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
          yield put({ type: actions.DELETE_ITEMS_RESULT_SUCCESS, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
            type: actions.DELETE_ITEMS_RESULT_ERROR,
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



export function* addItems() {
  yield takeEvery(actions.ADD_ITEMS, function* (payload) {
  console.log(payload.data)
    const url = addItemsURL; //'https://api.winmehub.com/v1/api/signup'
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
      
      
          yield put({ type: actions.ADD_ITEMS_RESULT_SUCCESS, result });
        
      
       // console.log(result)
      } else {
        console.log("result")
        yield put({
            type: actions.ADD_ITEMS_RESULT_ERROR,
            result
          
          });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.ADD_ITEMS_ERROR });
      console.log(error);
    }
  });
}







export function* defaultFunc() {
}

export default function* rootSaga() {
  yield all([
  
    fork(getItems),
    fork(addItems),
    fork(deleteItems),
   
   
  ]);
}
