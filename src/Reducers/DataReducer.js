import {CURRMOUNTH_FETCH_SUCCESS} from '../Actions/Types'


INITIAL_STATE ={
  data :'',
  dataLoaded : false}
export default (state = INITIAL_STATE , action) => {
  switch(action.type){
    case CURRMOUNTH_FETCH_SUCCESS :
    console.log("in Data reducer")
   // console.log(action.payload)
return {...state ,data :action.payload ,dataLoaded : true}
default :
return state ;
}
}