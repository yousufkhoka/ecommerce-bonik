

export const USER_SIGN_IN_UP = 'USER_SIGN_IN_UP'
export const USER_SIGN_OUT = 'USER_SIGN_OUT'

export const initialiUser = {
    name:'',
    email:'',
    photo:''
   
}

export const Reducer = (state = initialiUser , action) =>{
    switch(action.type){
        case USER_SIGN_IN_UP :
         
         return {...state, name:action.name , email:action.name , photo:action.photo}
       case USER_SIGN_OUT :
        return {}
         default:
          throw new Error()

    }
   

}