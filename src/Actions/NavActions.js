import {Actions} from 'react-native-router-flux'
import {SCREEN_VAL_CHANGE} from './Types'
import {Alert }from 'react-native';

import {ExternalStorageDirectoryPath } from 'react-native-fs';
import Mailer from 'react-native-mail';

export const changeScreenState=(value)=>{
    console.log(" this is value passed"+value)
    return (dispatch) => {
        dispatch({ type : SCREEN_VAL_CHANGE ,
            payload : "" });

   

   
            if (value === "settings")
            {
                 Actions.settingsScreen();
               //  console.log("in if statement whatch shift")}
            }
            if (value === "watch_shifts")
    {
         Actions.initialScreen();
         console.log("in if statement whatch shift")}
     if (value === 'add_shift'){
               Actions.addShifScreen();
               console.log("in if statement add screen manu ")
     }
     if(value === 'send_shifts'){
    // Works on both iOS and Android
    const pathOfFile = ExternalStorageDirectoryPath+ "/"
    console.log(pathOfFile)
Alert.alert(
 
    'Send Shift report',
    'Do you want to send report to test@gmail from ...to ',
    [
      {text: 'Edit', onPress: () => Actions.editReportInfo()},
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'Send', onPress:  () => {
        Mailer.mail({
          subject: 'lets send mail',
          recipients: ['netanel_berioza@walla.com'],
       // ccRecipients: ['netanel_berioza@walla.com'],
       // bccRecipients: ['netanelberioza30@gmail.com'],
          body: '<b>A Bold Body</b>',
          isHTML: true,
          attachment: {
            path: pathOfFile+"sheetjs.xlsx ",  // The absolute path of the file from which to read data.
            type: 'xlsx',   // Mime Type: jpg, png, doc, ppt, html, pdf
           // name: 'sheetjs.xlsx',   // Optional: Custom filename for attachment
          }
        }, (error, event) => {
          Alert.alert(
            error,
            event,
            [
              {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
              {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
            ],
            { cancelable: true }
          )
        });
      }}]
  )
     }
    }
}

//key='secScreen'
//AddShiftForm
