
import {combineReducers} from 'redux';
import DataReducer from './DataReducer';
import ShiftsViewReducer from './ShiftsViewReducer';
import AuthReducer from './AuthReducer';
import NavReducer from './NavReducer'
import AddReducer from './AddReducer'
export default combineReducers(
   { ShiftsData : DataReducer,
     ShiftView :  ShiftsViewReducer,
     auth : AuthReducer ,
     nav : NavReducer,
     add : AddReducer
}

)