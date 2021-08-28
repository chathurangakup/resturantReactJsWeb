import { all } from 'redux-saga/effects';

 import startUpSaga from './Users/saga';
 import itemsSaga from './Items/saga';
 import itemsCatSaga from './ItemsCategory/saga';
 import cartSaga from './Cart/saga';
 import dateSaga from './Date/saga';

export default function* rootSaga() {
  yield all([
     startUpSaga(),
     itemsSaga(),
     itemsCatSaga(),
     cartSaga(),
     dateSaga()
 
  ]);
};