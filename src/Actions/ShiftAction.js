import {firebase} from '../Components/Common/Firebase'

import {WRITE_TO_ROW,WRITE_TO_SHIFT_LIST,START_BUTTON_ON,START_BUTTON_OFF} from './Types'
//shift data is json in json format
//it will apdate the state ? but how ? how we can avoid redundant rendring ?

export const turnTheShiftOn=()=>{
var date = new Date()
return {
  type : START_BUTTON_ON ,
  start : date ,
}
}

export const TurnTheShiftOff=(start)=>{
  var end = new Date()
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
      dispatch({type :START_BUTTON_OFF})
      })
}
}

export const getShiftObj=(shiftJson)=>{
    return { type : WRITE_TO_ROW,
      payload  : shiftJson
    }
}
// this one should update the file and also rerander the screen ?
//no if its called from other screen .
export const writeToShifList=()=>{
  return  {
               type : WRITE_TO_SHIFT_LIST,
               payload  : ""
   }
}
