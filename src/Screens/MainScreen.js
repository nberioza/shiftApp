/* 
THis screen should have dropDown picker to navigate to other screens
your shifts
add manualy
settings
send report
*/
import React , {Component} from 'react';
import {View , Picker ,TouchableOpacity,Image }from 'react-native';
import {connect} from 'react-redux';
import {changeScreenState} from '../Actions/NavActions';
import {ToggleButton} from '../Components/Common/ToggleButton';
import {turnTheShiftOn,TurnTheShiftOff} from '../Actions/ShiftAction'


class MainScreen extends Component{
 
    chstateValue(value){
        this.props.changeScreenState(value)
        console.log(this.props.value)
       
    }
    buttonHandler(){
        if(!this.props.isWorking){
            this.props.turnTheShiftOn()
        }
        else{
            this.props.TurnTheShiftOff(this.props.start)
        }
    }
       
    
    render(){
       
        return (
            <View  style = {{flex : 1 , height : '100%' , width : '100%', backgroundColor : '#c2f0f0', padding : 5 }}
            
            >
                  <Picker style={{height : 50 ,width : 100 ,backgroundColor : '#85e0e0', borderWidth: 2 , borderColor : '#330000' ,borderRadius: 5 ,margin : 2 , padding:3, } }
                 
                 mode = "dropdown"
                selectedValue={this.props.value}
                 onValueChange={this.chstateValue.bind(this)}
                  >
                  <Picker.Item label="menu" value="menu"  />
                      <Picker.Item label="Watch Shifts" value="watch_shifts" style= {{borderColor : '#3d3d29',borderWidth : 2}}  />
                      <Picker.Item label="Add Shift" value="add_shift" style= {{borderColor : '#3d3d29',borderWidth : 2}}/>
                      <Picker.Item label="Settings" value="settings" style= {{borderColor : '#3d3d29',borderWidth : 2}}/>
                      <Picker.Item label="Send shifts" value="send_shifts" style= {{borderColor : '#3d3d29',borderWidth : 2}}/>
                </Picker>
                <View style = {{flex : 2 ,padding :10 ,backgroundColor : '#eafafa' ,alignItems:'center',
    justifyContent:'center'} }>
              
              <ToggleButton 
              onPress={this.buttonHandler.bind(this)} 
              title={this.props.buttonStateName}
              style={this.props.buttonStyle}
             
              ></ToggleButton>
                </View>
               

                </View>
          )
      
    }

    


}
const mapStateToProps = ({shiftButton,nav})=>{
  
   
    const {value} = nav ;
    const {buttonStateName,isWorking ,start,buttonStyle} = shiftButton ;
    console.log(shiftButton)
    console.log(nav)
    return {value,buttonStateName,isWorking ,start,buttonStyle};
}
export default connect (mapStateToProps,{changeScreenState,turnTheShiftOn,TurnTheShiftOff})(MainScreen)



/* <Button style= {{ flex : 2 ,
     alignItems:'center',
     alignSelf : "center" ,
     backgroundColor : '#85e0e0', borderWidth: 1 , borderColor : 'black' ,borderRadius:10 ,margin : 2  }}
                 title="press"
                 
                 ></Button> */
                 /*
                <TouchableOpacity 
  style={{ borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:200,
    height:200,
    backgroundColor : '#85e0e0',
    borderRadius:100,
    shadowColor : '#0a2929',
    shadowOffset :{width:5 ,height: 5}
    
  }}

  >
  <Image 
 style={{height:'100%' , width : '100%' ,borderRadius :100}} source={require('./roundButton.jpg')} 
  />
   //styles={this.props.buttonStyle}
</TouchableOpacity> */