import {firebase} from '../Components/Common/Firebase';
import {USER_UPDATE,LOGON_USER,LOGON_USER_SUCCESS,LOGON_USER_FAIL}from './Types'
import { Actions } from '../../node_modules/react-native-router-flux';

export const userUpdate=({prop , value})=>{
    
    return {
        
        type : USER_UPDATE ,
        payload: { prop,value}
         
    }
    }
   // export const logError(text)

    export const logUserOn=({name,secName,email,password})=>{
     
        return(dispatch)=>{
            //try to logon
            dispatch({type:LOGON_USER})
            //create user
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => logonUserSuccess(dispatch, user))
            .catch(() => logonUserFail(dispatch));
           //living entery with name
           //
           //decomposition you are not creating new object here just extracting
           const {currentUser} = firebase.auth()
           
         firebase.database().ref('users/'+currentUser.uid +'/name').push(
                {
                    fstName : name ,
                    secName : secName
                }
            ).then(()=>{console.log("success ")})

        }
        }

        const logonUserSuccess = (dispatch, user)=>{
            dispatch({type:LOGON_USER_SUCCESS ,  payload: { prop :"user",value:user}})
            
            Actions.mainScreen()
        }

        const logonUserFail=(dispatch)=>{
            dispatch({type:LOGON_USER_FAIL})
        }