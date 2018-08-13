import {SCREEN_VAL_CHANGE} from '../Actions/Types'
const INITIAL_STATE = {value : " "}

export default (state = INITIAL_STATE , action)=>{
switch(action.type){
case SCREEN_VAL_CHANGE :
return {...state , value : action.payload }


    default :
    return state ;
}



}