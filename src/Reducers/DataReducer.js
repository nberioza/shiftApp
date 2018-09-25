import {CURRMOUNTH_FETCH_SUCCESS,YEAR_MONTH_INITIATION,CHOSEN_MONTH_FETCH_SUCCESS,YEAR_CHANGE} from '../Actions/Types'


const INITIAL_STATE ={
  yearToDisplay: '',
  monthToDisplay : '',
  data :'',
  dataLoaded : false}
export default (state = INITIAL_STATE , action) => {
  switch(action.type){
    case CURRMOUNTH_FETCH_SUCCESS :
    console.log("in Data reducer")
   // console.log(action.payload)
return {...state ,data :action.payload ,dataLoaded : true}
case YEAR_CHANGE:
return {...state ,yearToDisplay:action.payload}
case CHOSEN_MONTH_FETCH_SUCCESS :
return {...state ,
  monthToDisplay : action.month,
  data :action.payload ,
  dataLoaded : true}
  case YEAR_MONTH_INITIATION :
  return{...state,yearToDisplay:action.year , monthToDisplay :action.month}
default :
return state ;
}
}