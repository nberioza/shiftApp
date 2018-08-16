/* 
THis screen should have dropDown picker to navigate to other screens
your shifts
add manualy
settings
send report
*/
import React , {Component} from 'react';
import {View , Picker,Button ,TouchableOpacity,Image }from 'react-native';
import {connect} from 'react-redux';
import {changeScreenState} from '../Actions/NavActions';


class MainScreen extends Component{
 
    chstateValue(value){
        this.props.changeScreenState(value)
        console.log(this.props.value)
       
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
                  <Picker.Item label="test" value="test"  />
                      <Picker.Item label="Watch Shifts" value="watch_shifts" style= {{borderColor : '#3d3d29',borderWidth : 2}}  />
                      <Picker.Item label="Add Shift" value="add_shift" style= {{borderColor : '#3d3d29',borderWidth : 2}}/>
                      <Picker.Item label="Settings" value="settings" style= {{borderColor : '#3d3d29',borderWidth : 2}}/>
                      <Picker.Item label="Send report" value="send_report" style= {{borderColor : '#3d3d29',borderWidth : 2}}/>
                </Picker>
                <View style = {{flex : 2 ,padding :10 ,backgroundColor : '#eafafa' ,alignItems:'center',
    justifyContent:'center'} }>
               
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
</TouchableOpacity>
                </View>
               

                </View>
          )
      
    }

    


}
const mapStateToProps = ({nav})=>{
    const {value} = nav ;
    return {value};
}
export default connect (mapStateToProps,{changeScreenState})(MainScreen)



/* <Button style= {{ flex : 2 ,
     alignItems:'center',
     alignSelf : "center" ,
     backgroundColor : '#85e0e0', borderWidth: 1 , borderColor : 'black' ,borderRadius:10 ,margin : 2  }}
                 title="press"
                 
                 ></Button> */