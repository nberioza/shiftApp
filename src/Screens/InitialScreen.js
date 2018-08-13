import React,{Component} from 'react';
import { View, Text ,FlatList} from 'react-native';
import { connect } from 'react-redux';
import {Button,Card,CardSection,Row} from '../Components/Common';
import {Actions}from 'react-native-router-flux';
import {getShiftObj} from '../Actions/ShiftAction'

class Initial extends Component {
    
  logcon(tolog){
    console.log( "this is "+tolog)
  }
    
    renderRow(){ 
    this.props.getShiftObj(this.props.ShiftsData)
      return (<Row
      startDate = {this.props.table[0].DateStart}
      startShTime = {this.props.table[0].TimeStart}
      endShDate = {this.props.table[0].DateEnd}
      endShTime = {this.props.table[0].TimeEnd}>
   </Row>)

 }
  
  
  render() {
   
 
      return (
        <Card >
         <CardSection>
          <Text>add Shift</Text>
         <Button onPress= {()=>{Actions.secScreen()}}>ToSecond</Button>
         </CardSection>
         <FlatList
         
  data={this.props.ShiftsData}
 
  renderItem={({item}) => {
   return( <Row
    startDate = {item.DateStart}
    startShTime = {item.TimeStart}
    endShDate = {item.DateEnd}
    endShTime = {item.TimeEnd}>
    {this.logcon(item.DateStart)}
 </Row>)
   }}
keyExtractor={item=>item.DateStart}
/> 
        
       

        </Card>
      );
    }
  }
  const mapStateToProps=({ShiftsData,ShiftView})=>{
   const {table} =ShiftView
 console.log(ShiftsData)

    return {ShiftsData , table}
    
   
  }

  export default  connect(mapStateToProps,{getShiftObj})(Initial)

// {this.renderRow()}




/*  <FlatList
         
  data={this.props.table}
  renderItem={({item}) => {
    <Row
    startDate = {item.DateStart}
    startShTime = {item.TimeStart}
    endShDate = {item.DateEnd}
    endShTime = {item.TimeEnd}>
 </Row>}}
 keyExtractor={item=>item.DateStart}
/> */