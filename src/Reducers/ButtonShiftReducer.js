
import {START_BUTTON_ON,START_BUTTON_OFF}  from '../Actions/Types';
INITIAL_STATE = {
    buttonStateName :'Start Shift',
  //  buttonStyle : {backgroundColor : '#adff2f'},
    isWorking : false ,
    start :''

}


export default (...state = INITIAL_STATE , action)=>{
    switch(action.type){
    case START_BUTTON_ON :
    console.log("before change in  START_BUTTON_ON"+state)
    return {...state , buttonStateName : "End Shift", isWorking :true , start : action.start}
    case START_BUTTON_OFF :
    console.log("before change in  START_BUTTON_OFF"+state)
    return {...state ,...INITIAL_STATE , buttonStateName :"Start Shift"}
    
        default :
        return state ;
    }
    
    
    
    }