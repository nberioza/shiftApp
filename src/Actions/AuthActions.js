import {
    EMAIL_CHANGED ,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
LOGIN_USER,
LOGGED_OUT} 
from './Types'
import {firebase} from '../Components/Common'
import {Actions} from 'react-native-router-flux'
import {AsyncStorage} from 'react-native'


export const emailChanged = (text)=>{
    return{
   type : EMAIL_CHANGED,
   payload : text
};};


export const passwordChanged = (text)=>{
    return{
   type :PASSWORD_CHANGED,
   payload : text
};};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
      dispatch({ type: LOGIN_USER });
  //for dev purpes email and pass should come back in diployment

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user =>{ 
            console.log(user)
            loginUserSuccess(dispatch, user)})
        .catch((error) =>loginUserFail(dispatch) );
    };
  };
const loginUserFail=(dispatch)=>{
dispatch({type:LOGIN_USER_FAIL})
}

const loginUserSuccess=(dispatch,user)=>{
dispatch({type :LOGIN_USER_SUCCESS ,payload : user});
Actions.shiftScreen();
}


export const logOutUser = ()=>{
return (dispatch)=>{
    firebase.auth().signOut()
    .then(()=>{
        //some code to deal with the button in/out the/off the shift
    dispatch({type :LOGGED_OUT });
      Actions.loginForm()
    })
    .catch(err=>console.log("could not sign out the user"))
}
}
