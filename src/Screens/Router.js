import React from 'react';
import {Scene , Router, Actions} from 'react-native-router-flux';
import MainScreen from './MainScreen'
import InitialScreen from './InitialScreen'
import AddShiftForm from './AddShiftForm'
import LoginForm from './LoginForm'
import LogonForm from './LogonForm'
import EditReportForm from './EditReportForm'
import  SettingsScreen   from './SettingsScreen'


const RouterComponent = ()=>{
return (
<Router>
<Scene key='root'>
<Scene
     key="loginForm" 
     title='Login' 
     component={LoginForm}
     rigthTitle='sec'
     initial
     hideNavBar
     />
    <Scene
     key="logonForm" 
     title='Logon' 
     component={LogonForm}
     backTitle='back'
     //hideNavBar
     />
    <Scene key='shiftScreen'>
    <Scene
     key="mainScreen" 
     title='Main Screen' 
     component={MainScreen}
     rigthTitle='sec'
     initial
     hideNavBar
     />
      <Scene
     key="editReportInfo" 
     title='Edit report' 
     component={EditReportForm}
     //rigthTitle='sec'
     hideNavBar
     />
    <Scene
     key="initialScreen" 
     title='Init screen' 
     component={InitialScreen}
     rigthTitle='sec'
     hideNavBar
     
     />
    <Scene
      key='addShifScreen'
      title='Add a shift' 
      component={AddShiftForm}
      rigthTitle='init'
     hideNavBar
      />
      <Scene
      key='settingsScreen'
      title='Settings' 
      component={SettingsScreen}
      rigthTitle='init'
     hideNavBar
      />
       </Scene>
     </Scene>
</Router>
);

}
export default RouterComponent