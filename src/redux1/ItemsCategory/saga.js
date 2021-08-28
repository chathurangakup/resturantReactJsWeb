import { all, takeEvery, put, fork, call } from "redux-saga/effects";
// API URIs goes here, now i do not use any
import actions from "./actions";
// Properties here - now i do not use any
const baseUrl='https://resturant123newapp.herokuapp.com';
const  getItemsURL=baseUrl+'/itemscategory/getmenucategory/';
const  addItemsURL=baseUrl+'/itemscategory/addItemCategories';
const  addVarientsURL=baseUrl+'/itemscategory/addvarient/';
const  deleteItemsURL=baseUrl+'/itemscategory/deleteItemsCat/';
const  deleteVarientURL=baseUrl+'/itemscategory/deletevarients/';


export function* getItemsCat() {
  yield takeEvery(actions.GET_ITEMS_CAT, function* (payload) {
  console.log(payload.data)
    const url = getItemsURL+payload.itemid+'/userid/'+payload.userid; //'https://api.winmehub.com/v1/api/signup'
    try {
      const response = yield fetch(url, {
        method: "GET",
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
          yield put({ type: actions.GET_ITEMS_CAT_RESULT_SUCCESS, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
            type: actions.GET_ITEMS_CAT_RESULT_ERROR,
            result
          });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.GET_ITEMS_CAT_ERROR });
      console.log(error);
    }
  });
}


export function* deleteItemsCat() {
  yield takeEvery(actions.DELETE_ITEMS_CAT, function* (payload) {
  console.log(payload.data)
    const url = deleteItemsURL+payload.itemcatid; //'https://api.winmehub.com/v1/api/signup'
    try {
      const response = yield fetch(url, {
        method: "GET",
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
          yield put({ type: actions.DELETE_ITEMS_CAT_RESULT_SUCCESS, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
            type: actions.DELETE_ITEMS_CAT_RESULT_ERROR,
            result
          
          });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.DELETE_ITEMS_CAT_ERROR });
      console.log(error);
    }
  });
}



export function* deleteVarient() {
  yield takeEvery(actions.DELETE_VARIENT, function* (payload) {
  console.log(payload.data)
    const url = deleteVarientURL+payload.itemcatid+'/varientid/'+payload.varientid; //'https://api.winmehub.com/v1/api/signup'
    try {
      const response = yield fetch(url, {
        method: "GET",
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
          yield put({ type: actions.DELETE_VARIENT_RESULT_SUCCESS, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
            type: actions.DELETE_VARIENT_RESULT_ERROR,
            result
          
          });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.DELETE_VARIENT_ERROR });
      console.log(error);
    }
  });
}





export function* addItemsCat() {
  yield takeEvery(actions.ADD_ITEMS_CAT, function* (payload) {
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
      
      
          yield put({ type: actions.ADD_ITEMS_CAT_RESULT_SUCCESS, result });
        
      
       // console.log(result)
      } else {
        console.log("result")
        yield put({
            type: actions.ADD_ITEMS_CAT_RESULT_ERROR,
            result
          
          });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.ADD_ITEMS_CAT_ERROR });
      console.log(error);
    }
  });
}


export function* addVarients() {
  yield takeEvery(actions.ADD_VARIENT, function* (payload) {
  console.log(payload.data)
    const url = addVarientsURL+payload.itemcatid; //'https://api.winmehub.com/v1/api/signup'
    console.log(url)
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
          yield put({ type: actions.ADD_VARIENT_RESULT_SUCCESS, result });
       // console.log(result)
      } else {
        console.log("result")
        yield put({
            type: actions.ADD_VARIENT_RESULT_ERROR,
            result
          
          });
       // console.log(result)
      }
    } catch (error) {
      yield put({ type: actions.ADD_VARIENT_ERROR });
      console.log(error);
    }
  });
}







export function* defaultFunc() {
}

export default function* rootSaga() {
  yield all([
  
    fork(getItemsCat),
    fork(addItemsCat),
    fork(deleteItemsCat),
    fork(addVarients),
    fork(deleteVarient)
   
   
  ]);
}
