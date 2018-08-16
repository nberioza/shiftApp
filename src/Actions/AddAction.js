//Actions of add shift form

import {CURRMOUNTH_FETCH_SUCCESS,SHOW_START_DATE_TIME, 
    HIDE_START_DATE_TIME,
     SHOW_END_DATE_TIME,
      HIDE_END_DATE_TIME,
    HANDLE_START,
HANDLE_END,BUTTON_USE,SHIFT_ADDED} from './Types'
import {firebase} from '../Components/Common/Firebase'
import {Actions} from 'react-native-router-flux'


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

     //   console.log("mounth : "+starMounth);
      //  console.log("year : "+startYear);
     //   console.log("mountn_year : "+mounthYearModel);
    }
    return {
        type: HIDE_START_DATE_TIME,
        payload : false,
        date :date
    }
    
    }
    export const showEndDateTimePicker=()=>{
  //      console.log('In end in action' )
        return {
            type: SHOW_END_DATE_TIME,
            payload : true
        }
        
        }
        export const hideEndDateTimePicker=(date)=>{
            return {
                type: HIDE_END_DATE_TIME,
                payload : false ,
                date : date
            }
            
            }
            export const buttonPre = ()=>{
                return {
                    type : BUTTON_USE ,
                    payload : true
                }
            }
export const submitTheShift=(start,end)=>{
    var starMounth = (String)(start.getMonth());
    var startYear =(String)(start.getFullYear());
    var mounthYearModel = starMounth.concat("_",startYear);
   
    const {currentUser}=firebase.auth();
 //   console.log("current usser id is "+currentUser.uid)
return(dispatch)=>{
    firebase.database()
    .ref('users/'+currentUser.uid+'/'+mounthYearModel)
    .push({startDay :start.toLocaleDateString(),
        startTime : start.toLocaleTimeString(),
        endDay: end.toLocaleDateString(),
     endTime : end.toLocaleTimeString(),
    overAll : ((end.getTime()-start.getTime())/(60*60*1000 ))   })
    .then(()=>{
        dispatch({type :SHIFT_ADDED})
        Actions.pop()})
}

}
// get the to dates and make entery to mounth_year model
export const fetchCurrentMounth=()=>{
   //authanticated user
    const {currentUser}=firebase.auth();
    //create current datemounth name to fetch from datsbase
    const currDate = new Date()
    var currYear = (String)(currDate.getFullYear())
    var currMounth = (String)(currDate.getMonth())
    var currMounthYear=currMounth.concat("_",currYear)
console.log()
    return(dispatch)=>{
        console.log("in fm return")
        firebase.database()
        .ref('users/'+currentUser.uid+'/'+currMounthYear)
        .on('value',snapshot=>
        {dispatch({type : CURRMOUNTH_FETCH_SUCCESS ,payload : snapshot.val()})})
        
    }
    
}
