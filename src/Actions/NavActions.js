import {Actions} from 'react-native-router-flux'
import {SCREEN_VAL_CHANGE} from './Types'

export const changeScreenState=(value)=>{
    console.log(" this is value passed"+value)
    return (dispatch) => {
        dispatch({ type : SCREEN_VAL_CHANGE ,
            payload : "" });

   

    if (value === "watch_shifts")
    {
         Actions.initialScreen();
         console.log("in if statement whatch shift")}
     if (value === 'add_shift'){
               Actions.addShifScreen();
               console.log("in if statement add screen manu ")
     }
    }
}

//key='secScreen'
//AddShiftForm
/* <Picker.Item label="Add Shift" value="add_shift"
                      <Picker.Item label="Settings" value="settings" 
                      <Picker.Item label="Send report" value="send_report"  */
