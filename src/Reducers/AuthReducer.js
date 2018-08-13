import {EMAIL_CHANGED, PASSWORD_CHANGED,LOGIN_USER_SUCCESS,LOGIN_USER_FAIL,LOGIN_USER} from '../Actions/Types'
//the instant_state is more for uderstanding what are the properties in the state
const INITIAL_STATE = {
     
    email:'',
    password : '',
    user :null ,
    error : '',
    loading : false
}

//the state must be always defigned
export default (state=INITIAL_STATE, action )=>{
switch(action.type){
case EMAIL_CHANGED :
return {...state ,email: action.payload};
case  PASSWORD_CHANGED :
return {...state ,password : action.payload};
case LOGIN_USER:
return {...state , loading : true ,error:''}
case LOGIN_USER_SUCCESS:
return {...state ,...INITIAL_STATE, user : action.payload};
case LOGIN_USER_FAIL :
return {...state, error:'authantication failed',loading : false};
    default :
return state ;
}

}