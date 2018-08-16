//to do
// deferenciate the copies of the pickers done
// update the state and redux done
// you need the vars start&end time date and bool when when start&end ===true then we can submit
// when 2 pickers set submit shift button appears
// pressing on the button will upload the info to firebase end reset the start&end values
//
//
//
//6 shifts should be visible in the whatch shits screen
//7 make watch_shift screen be able to render relevant shift -> you need to chise a mounth

import React, { Component } from 'react';
import { Text, TouchableOpacity, View ,Image } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {buttonPre,submitTheShift,hideStartDateTimePicker,showStartDateTimePicker,hideEndDateTimePicker,showEndDateTimePicker}from '../Actions/AddAction'
import {connect} from 'react-redux';
import {CardSection,Button} from '../Components/Common/index'




class AddShiftForm extends Component {


  onSubmit(){
    this.props.submitTheShift(this.props.startDateObj,this.props.endDateObj)
  }
//handling start
  _showStartDateTimePicker (){this.props.showStartDateTimePicker()}

  _hideStartDateTimePicker (){this.props.hideStartDateTimePicker()}

  _handleStartDatePicked = (date) => {
   
    this.props.hideStartDateTimePicker( date)
  };
  //handling end showEndDateTimePicker
  _showEndDateTimePicker (){
   
    this.props.showEndDateTimePicker()}

  _hideEndDateTimePicker (){this.props.hideEndDateTimePicker()}

  _handleEndDatePicked = (date) => {
  //  console.log('A date has been picked: ', date);
    this.props.hideEndDateTimePicker(date)//here i added date becouse got un defigned

  };
  //button pressebilety
  makeButtonPresseble(){
    if(this.props.startDateObj!==null&&this.props.endDateObj!==null)
    if(((this.props.startDateObj).getTime()<(this.props.endDateObj).getTime())&&(this.props.isStartPicked===true)&&(this.props.isEndPicked===true)){
     this.props.buttonPre(); 
    }
  
  }
renderButton(){
  this.makeButtonPresseble()
 // console.log("the status of button press : "+this.props.buttonPresseble)
  if(this.props.buttonPresseble){
    return ( <Button onPress={this.onSubmit.bind(this)}>submit</Button>)
  }else{return(<Text>Choose bigining and the end of your shift</Text>)}
}
  render () {
   
    return (
      <View Style={{flex: 1 ,backgroundColor : '#c2f0f0' , padding : 5}} >
     
      <CardSection style = {{justifyContent : 'center',
alignItems:'center' ,
shadowOffset : {width: 10 ,height: 10},
shadowColor : 'black',
shadowOpacity : 0.5}}>
        <TouchableOpacity 
        onPress={this._showStartDateTimePicker.bind(this)} 
        style = {styles.dateButtonStyle}
        >
         <Text style={{backgroundColor :'#002633',color : 'white'}}>Bigining</Text>
         <Image style={{height:50 , width : 50  }} source={require('../img/calendar-512.png')}/>
         
       
        <DateTimePicker
          mode = "datetime"
          isVisible={this.props.isStartDateTimePickerVisible}
          onConfirm={this._handleStartDatePicked.bind(this)}
          onCancel={this._hideStartDateTimePicker.bind(this)}
        />
      </TouchableOpacity>
 
       
       <TouchableOpacity onPress={this._showEndDateTimePicker.bind(this)}
        style = {styles.dateButtonStyle}
       >
         <Text style = {{backgroundColor :'#002633',color : 'white'}}>End</Text>
        <Image style={{height:50 , width : 50 }} source={require('../img/calendar-512.png')}/>
        
       
       
       <DateTimePicker
         mode = "datetime"
         isVisible={this.props.isEndDateTimePickerVisible}
         onConfirm={this._handleEndDatePicked.bind(this)}
         onCancel={this._hideEndDateTimePicker.bind(this)}
       />
     </TouchableOpacity>
    
    
     </CardSection>
     
     <CardSection  style={{justifyContent : 'center'}}>
     {this.renderButton()}
    
     </CardSection>
     </View>

    
     
    );
  }

}

/*
const styles ={timePickStyles :{flex :2,padding:5,},
timePContainerStyle :{  flexDirection: "row" },
buttonStyle :{},
screenContainerStyle :{},
lableStyle : {}}
*/
const styles ={dateButtonStyle :{
  padding : 5 ,
  height : 80 ,
  width : 100 ,
  margin : 10 ,
  borderWidth : 2,
  borderColor : 'black',
  


}}


const mapStateToProps = ({ add }) => {
  const { buttonPresseble, isStartDateTimePickerVisible , isEndDateTimePickerVisible ,startDateObj,isStartPicked ,endDateObj,isEndPicked} = add;
//console.log("start date obj : "+startDateObj)
//console.log("end date obj : "+endDateObj)
if(endDateObj!==null)
{
  console.log("when end date picked it is : "+endDateObj.getYear())}
  return {  buttonPresseble,isStartDateTimePickerVisible ,isEndDateTimePickerVisible,startDateObj,isStartPicked ,endDateObj,isEndPicked};
};




export default connect (mapStateToProps,
  {
    hideStartDateTimePicker,
    showStartDateTimePicker,
    hideEndDateTimePicker,
    showEndDateTimePicker,
    submitTheShift,
    buttonPre
  })
    (AddShiftForm)




    /**  <Button onPress={()=>{}}>submit</Button> */



    /**  startDateObj,isStartPicked ,endDateObj,isEndPicked*/