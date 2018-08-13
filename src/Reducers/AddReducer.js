import {SHOW_START_DATE_TIME, HIDE_START_DATE_TIME, SHOW_END_DATE_TIME, HIDE_END_DATE_TIME} from '../Actions/Types'

const INITIAL_STATE = {
    isStartDateTimePickerVisible :false,
    isEndDateTimePickerVisible : false,
    startDateObj : '',
    isStartPicked : false ,
    endDateObj : '',
    isEndPicked : false
}
export default (state=INITIAL_STATE , action)=>{
switch(action.type){
case SHOW_START_DATE_TIME :
return {...state , isStartDateTimePickerVisible : action.payload };
case HIDE_START_DATE_TIME:
return {...state , isStartDateTimePickerVisible : action.payload };
case SHOW_END_DATE_TIME :
return {...state , isEndDateTimePickerVisible : action.payload };
case HIDE_END_DATE_TIME:
return {...state , isEndDateTimePickerVisible : action.payload };
default :
return state ;
}



}