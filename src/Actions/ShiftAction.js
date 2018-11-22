import {Alert} from 'react-native'
import {firebase} from '../Components/Common/Firebase'
import XLSX from 'xlsx';
import {WRITE_TO_ROW,WRITE_TO_SHIFT_LIST,START_BUTTON_ON,START_BUTTON_OFF,REPORT_SENT} from './Types'
//import RNFetchBlob from 'rn-fetch-blob';
//const RNFetchBlob = require('rn-fetch-blob').default
//shift data is json in json format
//it will apdate the state ? but how ? how we can avoid redundant rendring ?
import { writeFile, readFile, DocumentDirectoryPath,ExternalStorageDirectoryPath ,stat} from 'react-native-fs';
const DDP = ExternalStorageDirectoryPath + "/";
//console.log(DDP)
//const input = res => res;
const output = str => str;
const input =str => str

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
//aOa Stands for "Array Of Arrays" -this is the model that xlsx utiles uses
export const reportCreate = (data)=>{
//create/open to write the xlsx file
//"explain" what coulmns to occupy
//make sure that the first row is the discriptions of the columns
aOa=[...[["date","from","to","overall"]],...data]
return(dispatch)=>{
const ws = XLSX.utils.aoa_to_sheet(aOa);

		/* build new workbook */
		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, "ShiftApp");

		/* write file */
		const wbout = XLSX.write(wb, {type:'binary', bookType:"xlsx"});
    const file = DDP + 'sheetjs.xlsx';
   
    writeFile(file, output(wbout), 'ascii')
    .then(() =>{
    readFile(file ,'ascii' )
     .then((resfile) =>{
         let formData = new FormData();
       // fileToSend =XLSX.read(resfile,{type :'binary'})
       stat(file).then((st)=>{ console.log('stat',st)})
             
      
       // formData.append('sheetjs', resfile)
      //  formData.append('price','12')
      let fileUri="file://"+file
const sendFile = {uri: fileUri,
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        name: 'sheetjs.xlsx',
      }
      console.log("file uri : ",fileUri)
      console.log("the path is",file)
     
      //formData.append('sheetjs', resfile.uri)
      formData.append('sheetjs', sendFile)
      console.log(formData)
     fetch('http://10.0.0.5:3000/uploads', {
       method: 'POST',
        body: formData,
 }).then((data) =>{ 
    Alert.alert("exportFile success", "Exported to " + file);
    console.log(data)
    }
    ).catch((err)=>console.log(err))
      
    })
    .catch((err)=>{console.log(err)
    })
      
       
   
  }) .catch((err)=>{console.log(err)
  })
        
 //   }).catch((err) => { Alert.alert("exportFile Error", "Error " + err.message); });
/** headers: 
        new Headers( {"Accept": "application/vnd.ms-excel ","Content-Type":"multipart/form-data"})
      , */
   
   
    dispatch({ type : REPORT_SENT,
      payload : "" });}
}


/**hlepper function send file that will be use in create report
 */
/*RNFetchBlob.fetch('POST', 'http://10.0.0.5:3000/uploads', {
        Authorization : "Bearer access-token",
        otherHeader : "foo",
        'Content-Type' : 'multipart/form-data',
        "Access-Control-Allow-Origin": "*"
        
      }, [
        // element with property `filename` will be transformed into `file` in form data
       
        { name : 'sheetjs', filename : 'sheetjs.xlsx', type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', data: RNFetchBlob.wrap(file)},
        // elements without property `filename` will be sent as plain text
        
      ]).then((resp) => {
    console.log(resp)
      }).catch((err) => {
        console.log(err)
      })*/ 

 const bin2ascii = (bin)=> {
        return bin.reverse().join('').match(/.{8}/g).map(
          x => String.fromCharCode(parseInt(x, 2))
        ).join('');
    }