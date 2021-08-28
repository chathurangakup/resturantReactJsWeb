import { combineReducers } from 'redux';

 import startUpReducer from './Users/reducer';
 import itemsReducer from './Items/reducer';
 import itemCatReducer from './ItemsCategory/reducer';
 import cartReducer from './Cart/reducer';
 import dateReducer from './Date/reducer';
// import favouriteReducer from './Favourite/reducer'


export default combineReducers({
   startUpReducer,
   itemsReducer,
   itemCatReducer,
   cartReducer,
   dateReducer,
  // favouriteReducer

});