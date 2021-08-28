const actions = {

    DEFAULT: "DEFAULT",
    DEFAULT_RESULT: "DEFAULT_RESULT",
    DEFAULT_ERROR: "DEFAULT_ERROR",
  
  
    GET_CART_ITEMS: "GET_CART_ITEMS",
    GET_CART_ITEMS_RESULT_SUCCESS: "GET_CART_ITEMS_RESULT_SUCCESS",
    GET_CART_ITEMS_RESULT_ERROR: "GET_CART_ITEMS_RESULT_ERROR",
    GET_CART_ITEMS_ERROR: "GET_CART_ITEMS_ERROR",

    CHANGE_STATUS: "CHANGE_STATUS",
    CHANGE_STATUS_RESULT_SUCCESS: "CHANGE_STATUS_RESULT_SUCCESS",
    CHANGE_STATUS_RESULT_ERROR: "CHANGE_STATUS_RESULT_ERROR",
    CHANGE_STATUS_ERROR: "CHANGE_STATUS_ERROR",

    CHANGE_ISDISPLAY: "CHANGE_ISDISPLAY",
    CHANGE_ISDISPLAY_RESULT_SUCCESS: "CHANGE_ISDISPLAY_RESULT_SUCCESS",
    CHANGE_ISDISPLAY_RESULT_ERROR: "CHANGE_ISDISPLAY_RESULT_ERROR",
    CHANGE_ISDISPLAY_ERROR: "CHANGE_ISDISPLAY_ERROR",

    GET_USERDETAILS: "GET_USERDETAILS",
    GET_USERDETAILS_RESULT_SUCCESS: "GET_USERDETAILS_RESULT_SUCCESS",
    GET_USERDETAILS_RESULT_ERROR: "GET_USERDETAILS_RESULT_ERROR",
    GET_USERDETAILS_ERROR: "GET_USERDETAILSY_ERROR",

  
  
  
    CLEAR_PROPS:"CLEAR_PROPS",
  
  
    getCartItems: (access_token,types) => ({
      type: actions.GET_CART_ITEMS,
      access_token,
      types
    }),

    changeStatus: (access_token,itemid,status) => ({
      type: actions.CHANGE_STATUS,
      access_token,
      itemid,
      status
    }),

    changeIsDisplay: (access_token,menuitemid) => ({
      type: actions.CHANGE_ISDISPLAY,
      access_token,
      menuitemid
    
    }),

    getUserDetails: (access_token,userid) => ({
      type: actions.GET_USERDETAILS,
      access_token,
      userid
    
    }),


  
    defaultFunc: (value) => ({
      type: actions.DEFAULT,
      value
    }),
  
    clearProps: () =>({
      type: actions.CLEAR_PROPS,
      
    }),
  };
  
  export default actions;