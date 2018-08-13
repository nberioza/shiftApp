import React from 'react';
import {Scene , Router, Actions} from 'react-native-router-flux';
import MainScreen from './MainScreen'
import InitialScreen from './InitialScreen'
import AddShiftForm from './AddShiftForm'
import LoginForm from './LoginForm'


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
       </Scene>
     </Scene>
</Router>
);

}
export default RouterComponent