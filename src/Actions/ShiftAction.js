

import {WRITE_TO_ROW,WRITE_TO_SHIFT_LIST} from './Types'
//shift data is json in json format
//it will apdate the state ? but how ? how we can avoid redundant rendring ?



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
