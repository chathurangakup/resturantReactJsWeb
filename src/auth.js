class Auth{
    constructor(){
        this.authenticated=false;
    }

    login(auth){
        this.authenticated=true;
        localStorage.setItem('accesstoken',auth);
    }

    logout(){
        this.authenticated=false;
        localStorage.setItem('accesstoken','');
    }

    isAuthenticated(){
        if(localStorage.getItem('accesstoken')){
            return true;
        }else{
            return false;
        }
      
    }
}

export default new Auth();