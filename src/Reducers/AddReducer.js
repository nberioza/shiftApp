import {SHIFT_ADDED, BUTTON_USE , SHOW_START_DATE_TIME, HIDE_START_DATE_TIME, SHOW_END_DATE_TIME, HIDE_END_DATE_TIME} from '../Actions/Types'

const INITIAL_STATE = {
    isStartDateTimePickerVisible :false,
    isEndDateTimePickerVisible : false,
    startDateObj : null,
    isStartPicked : false ,
    endDateObj : null,
    isEndPicked : false,
    buttonPresseble : false
}
export default (state=INITIAL_STATE , action)=>{
switch(action.type){
case SHOW_START_DATE_TIME :
return {...state , isStartDateTimePickerVisible : action.payload };
case HIDE_START_DATE_TIME:
return {...state , isStartDateTimePickerVisible : action.payload ,startDateObj :action.date,isStartPicked :true };
case SHOW_END_DATE_TIME :
return {...state , isEndDateTimePickerVisible : action.payload };
case HIDE_END_DATE_TIME:
return {...state , isEndDateTimePickerVisible : action.payload , endDateObj : action.date , isEndPicked : true};
case  BUTTON_USE :
return {...state , buttonPresseble : action.payload}
case SHIFT_ADDED:
return {...state ,INITIAL_STATE }

default :
return state ;
}



}