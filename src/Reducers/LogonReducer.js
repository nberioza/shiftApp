import {USER_UPDATE,LOGON_USER ,LOGON_USER_SUCCESS,LOGON_USER_FAIL} from  '../Actions/Types'


INITIAL_STATE={
    user : '',
    name :'',
secName :'',
email :'',
password :'',
passwordConf:'',
errorPass:'',
errorEmail:'',
error :'',
 loading :false
}

export default (state=INITIAL_STATE, action)=>{
switch(action.type){
    case USER_UPDATE:
    return {...state ,[action.payload.prop]:action.payload.value};
    case LOGON_USER:
    return {...state ,loading : true};
    case LOGON_USER_SUCCESS:
    return {...state ,...INITIAL_STATE ,[action.payload.prop]:action.payload.value};
    case LOGON_USER_FAIL:
    return {...state ,error :'Loging failed',loading:false};

    default :
    return state
}

}