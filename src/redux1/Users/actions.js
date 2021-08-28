const actions = {

    DEFAULT: "DEFAULT",
    DEFAULT_RESULT: "DEFAULT_RESULT",
    DEFAULT_ERROR: "DEFAULT_ERROR",
  
  
    LOGIN_USER: "LOGIN_USER",
    LOGIN_USER_RESULT_SUCCESS: "LOGIN_USER_RESULT_SUCCESS",
    LOGIN_USER_RESULT_ERROR: "LOGIN_USER_RESULT_ERROR",
    LOGIN_USER_ERROR: "LOGIN_USER_ERROR",
  
  
  
    CLEAR_PROPS:"CLEAR_PROPS",
  
   
  
    loginUser: (data) => ({
      type: actions.LOGIN_USER,
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