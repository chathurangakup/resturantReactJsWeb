const actions = {

    DEFAULT: "DEFAULT",
    DEFAULT_RESULT: "DEFAULT_RESULT",
    DEFAULT_ERROR: "DEFAULT_ERROR",
  
    GET_ITEMS_CAT: "GET_ITEMS_CAT",
    GET_ITEMS_CAT_RESULT_SUCCESS: "GET_ITEMS_CAT_RESULT_SUCCESS",
    GET_ITEMS_CAT_RESULT_ERROR: "GET_ITEMS_CAT_RESULT_ERROR",
    GET_ITEMS_CAT_ERROR: "GET_ITEMS_CAT_ERROR",

    ADD_ITEMS_CAT: "ADD_ITEMS_CAT",
    ADD_ITEMS_CAT_RESULT_SUCCESS: "ADD_ITEMS_CAT_RESULT_SUCCESS",
    ADD_ITEMS_CAT_RESULT_ERROR: "ADD_ITEMS_CAT_RESULT_ERROR",
    ADD_ITEMS_CAT_ERROR: "ADD_ITEMS_CAT_ERROR",

    ADD_VARIENT: "ADD_VARIENT",
    ADD_VARIENT_RESULT_SUCCESS: "ADD_VARIENT_RESULT_SUCCESS",
    ADD_VARIENT_RESULT_ERROR: "ADD_VARIENT_RESULT_ERROR",
    ADD_VARIENT_ERROR: "ADD_VARIENT_ERROR",

    DELETE_ITEMS_CAT: "DELETE_ITEMS_CAT",
    DELETE_ITEMS_CAT_RESULT_SUCCESS: "DELETE_ITEMS_CAT_RESULT_SUCCESS",
    DELETE_ITEMS_CAT_RESULT_ERROR: "DELETE_ITEMS_CAT_RESULT_ERROR",
    DELETE_ITEMS_CAT_ERROR: "DELETE_ITEMS_CAT_ERROR",


    DELETE_VARIENT: "DELETE_VARIENT",
    DELETE_VARIENT_RESULT_SUCCESS: "DELETE_VARIENT_RESULT_SUCCESS",
    DELETE_VARIENT_RESULT_ERROR: "DELETE_VARIENT_RESULT_ERROR",
    DELETE_VARIENT_ERROR: "DELETE_VARIENT_ERROR",

    
  
    EDIT_ITEMS_CAT: "EDIT_ITEMS_CAT",
    EDIT_ITEMS_CAT_RESULT_SUCCESS: "EDIT_ITEMS_CAT_RESULT_SUCCESS",
    EDIT_ITEMS_CAT_RESULT_ERROR: "EDIT_ITEMS_CAT_RESULT_ERROR",
    EDIT_ITEMS_CAT_ERROR: "EDIT_ITEMS_CAT_ERROR",
  
  
    CLEAR_PROPS:"CLEAR_PROPS",
  
  
    addItemsCat: (access_token,data) => ({
      type: actions.ADD_ITEMS_CAT,
      access_token,
      data
    }),

    addVarients: (access_token,itemcatid,data) => ({
      type: actions.ADD_VARIENT,
      access_token,
      itemcatid,
      data
    }),

    getItemsCat: (access_token,itemid,userid) => ({
      type: actions.GET_ITEMS_CAT,
      access_token,
      itemid,
      userid
    }),

    deleteItemsCat: (access_token,itemcatid) => ({
      type: actions.DELETE_ITEMS_CAT,
      access_token,
      itemcatid
    }),

    deleteVarient: (access_token,itemcatid,varientid) => ({
      type: actions.DELETE_VARIENT,
      access_token,
      itemcatid,
      varientid
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