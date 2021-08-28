import {createStore,compose} from 'redux';
import rootReducer from './reducers/index.js';


//const store=createStore(rootReducer);
const store=compose(
    window.divToolExtension && window.divToolExtension(),
)(createStore)(rootReducer);

export default store;