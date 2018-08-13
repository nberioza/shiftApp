//Actions of add shift form

import {SHOW_START_DATE_TIME, 
    HIDE_START_DATE_TIME,
     SHOW_END_DATE_TIME,
      HIDE_END_DATE_TIME,
    HANDLE_START,
HANDLE_END} from './Types'

export const handleStart =(date)=>{
return {
    type:  HANDLE_START,
}
}
export const handleEnd =(date)=>{
return{
    type: HANDLE_END
}
}

export const showStartDateTimePicker=()=>{

return {
    type: SHOW_START_DATE_TIME,
    payload : true
}

}
export const hideStartDateTimePicker=(date)=>{
   if(date)
    {
        //this is how to create mounth_year name model 
        var starMounth = (String)(date.getMonth());
        var startYear =(String)(date.getFullYear());
        var mounthYearModel = starMounth.concat("_",startYear);
        console.log("mounth : "+starMounth);
        console.log("yeal : "+startYear);
        console.log("mountn_year : "+mounthYearModel);
    }
    return {
        type: HIDE_START_DATE_TIME,
        payload : false
    }
    
    }
    export const showEndDateTimePicker=()=>{
        console.log('In end in action' )
        return {
            type: SHOW_END_DATE_TIME,
            payload : true
        }
        
        }
        export const hideEndDateTimePicker=(date)=>{
            console.log('year '+ date.getFullYear());
            return {
                type: HIDE_END_DATE_TIME,
                payload : false
            }
            
            }