
import {START_BUTTON_ON,START_BUTTON_OFF}  from '../Actions/Types';


const INITIAL_STATE = {
    buttonStateName :'Start Shift',
    buttonStyle : {backgroundColor : '#cbd8af'},
    isWorking : false ,
    start :''

}


export default (state = INITIAL_STATE , action)=>{
    console.log(state)
    switch(action.type){
    case START_BUTTON_ON :
    return {...state , buttonStateName : "End Shift", isWorking :true , start : action.start ,buttonStyle :{backgroundColor :'#ef0000'}}
    case START_BUTTON_OFF :
    
    return {...state ,...INITIAL_STATE , buttonStateName :"Start Shift"}
    
        default :
        return state ;
    }
    
    
    
    }