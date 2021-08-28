const actions = {

    DEFAULT: "DEFAULT",
    DEFAULT_RESULT: "DEFAULT_RESULT",
    DEFAULT_ERROR: "DEFAULT_ERROR",
  
  
    GET_DATES: "GET_DATES",
    GET_DATES_RESULT_SUCCESS: "GET_DATES_RESULT_SUCCESS",
    GET_DATES_RESULT_ERROR: "GET_DATES_RESULT_ERROR",
    GET_DATES_ERROR: "GET_DATES_ERROR",

    CHANGE_OPENCLOSE: "CHANGE_OPENCLOSE",
    CHANGE_OPENCLOSE_RESULT_SUCCESS: "CHANGE_OPENCLOSE_RESULT_SUCCESS",
    CHANGE_OPENCLOSE_RESULT_ERROR: "CHANGE_OPENCLOSE_RESULT_ERROR",
    CHANGE_OPENCLOSE_ERROR: "CHANGE_OPENCLOSE_ERROR",

   

    CLEAR_PROPS:"CLEAR_PROPS",
  
  
    getDates: (access_token) => ({
      type: actions.GET_DATES,
      access_token,
     
    }),

    changeOpenClose: (access_token,dateid,data) => ({
      type: actions.CHANGE_OPENCLOSE,
      access_token,
      dateid,
      data
  
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