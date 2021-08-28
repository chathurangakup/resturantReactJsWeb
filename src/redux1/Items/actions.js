const actions = {

    DEFAULT: "DEFAULT",
    DEFAULT_RESULT: "DEFAULT_RESULT",
    DEFAULT_ERROR: "DEFAULT_ERROR",
  
  
    GET_ITEMS: "GET_ITEMS",
    GET_ITEMS_RESULT_SUCCESS: "GET_ITEMS_RESULT_SUCCESS",
    GET_ITEMS_RESULT_ERROR: "GET_ITEMS_RESULT_ERROR",
    GET_ITEMS_ERROR: "GET_ITEMS_ERROR",

    ADD_ITEMS: "GET_ADD_ITEMSITEMS",
    ADD_ITEMS_RESULT_SUCCESS: "ADD_ITEMS_RESULT_SUCCESS",
    ADD_ITEMS_RESULT_ERROR: "ADD_ITEMS_RESULT_ERROR",
    ADD_ITEMS_ERROR: "ADD_ITEMS_ERROR",

    DELETE_ITEMS: "DELETE_ITEMS",
    DELETE_ITEMS_RESULT_SUCCESS: "DELETE_ITEMS_RESULT_SUCCESS",
    DELETE_ITEMS_RESULT_ERROR: "DELETE_ITEMS_RESULT_ERROR",
    DELETE_ITEMS_ERROR: "DELETE_ITEMS_ERROR",
  
  
  
    CLEAR_PROPS:"CLEAR_PROPS",
  
  
    addItems: (access_token,data) => ({
      type: actions.ADD_ITEMS,
      access_token,
      data
    }),

    getItems: (access_token) => ({
      type: actions.GET_ITEMS,
      access_token
    }),

    deleteItems: (access_token,itemid) => ({
      type: actions.DELETE_ITEMS,
      access_token,
      itemid
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