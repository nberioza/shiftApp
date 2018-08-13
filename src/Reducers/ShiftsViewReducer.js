import {WRITE_TO_ROW } from '../Actions/Types'

const initialState = 
    {table : [
        {
        "Day": "",
        "DateStart" :"",
        "TimeStart" :"",
        "DateEnd":"",
        "TimeEnd":""}
          ]
    }

     export default (state=initialState , action)=>{
         switch(action.type){
            case WRITE_TO_ROW :
            return {...state , table : action.payload};
           default :
           return state ;
         }
        }


