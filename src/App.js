import React,{useState,useEffect} from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Items from './pages/Items';
import ItemDetails from './pages/ItemDetails/ItemDetails';
import OrdersDelivery from './pages/Orders';
import OrdersTakeaway from './pages/OrdersTakeaway';
import ordersDetails from './pages/ordersDetails/ItemDetails';
import dateTimeChange from './pages/dateTimeChange';
import SignIn from './pages/SignIn1/SignIn';
import  styled from 'styled-components';
import {Provider} from 'react-redux';
import configureStore from './redux1/store';
import {ProtectedRoute} from './protectedRoute';


const store = configureStore();



function App() {
  const [sidebar,setSidebar]=useState(false);
  const showSidebar=()=>setSidebar(!sidebar);

  const showFirstSidebar=()=>{
    showSidebar(true)
  }


  useEffect(() => {
    showFirstSidebar()  
   console.log('hdahdjah')
    return () => {
   //   showSidebar(sidebar)
    }
  }, [])

  return (
    <Provider store={store}>
    <Router>
  
    
      <Switch>
       <Route path='/signin'exact component={SignIn} />
       <ProtectedRoute path='/'exact component={Items} />
       <ProtectedRoute path='/items/details/:id'exact component={ItemDetails} />
       <ProtectedRoute path='/orders/Delivery'  exact component={OrdersDelivery}  />
       <ProtectedRoute path='/orders/Takeaway' exact component={OrdersTakeaway}  />
       <ProtectedRoute path='/orders/details' exact component={ordersDetails}  />
       <ProtectedRoute path='/orders/datetime' exact component={dateTimeChange}  />
     
      </Switch>
     
    
    </Router>
    </Provider>
  );
}

export default App;
