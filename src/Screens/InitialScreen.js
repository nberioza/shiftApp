import _ from 'lodash';
import React,{Component} from 'react';
import { View, Text ,FlatList} from 'react-native';
import { connect } from 'react-redux';
import {Button,Card,CardSection,Row,Spinner} from '../Components/Common';
import {Actions}from 'react-native-router-flux';
import {getShiftObj} from '../Actions/ShiftAction';
import{fetchCurrentMounth}from '../Actions/AddAction'
//import { runInThisContext } from 'vm';?

class Initial extends Component {
  componentWillMount(){
    this.props.fetchCurrentMounth()
 
  }
  
 
  showSpinner(){
     if(!(this.props.dataLoaded)){
       return <Spinner size ='large'/>
     }
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
   
 console.log(this.props.currentMounth)
      return (
        <Card >
         <CardSection>
          <Text>add Shift</Text>
         <Button onPress= {()=>Actions.pop()}>CheckTheObject</Button>
         </CardSection>
         {this.showSpinner()}
         <FlatList
     ListHeaderComponent={<Row
      startDate = "started"
      startShTime = "from"
      endShDate = "to"
      endShTime = "overall">
   </Row>}    
  data={this.props.currentMounth}
 
  renderItem={({item}) => {
   return( <Row
    startDate = {item.startDay}
    startShTime = {item.startTime}
    endShDate = {item.endTime}
    endShTime = {item.overAll}>
    
 </Row>)
   }}
keyExtractor={item=>item.uid}
/> 
        
       

        </Card>
      );
    }
  }
  const mapStateToProps=({ShiftsData,ShiftView})=>{
   const {table} =ShiftView
   const {data,dataLoaded}=ShiftsData
 console.log(data)
 const currentMounth =_.map(data,(val,uid)=>{
  return {...val , uid}
  /*the end product would be  an array(this is what _.map does) of object types:
  {name :'john' ,
   phone : 0223354 ,
   shift : 'monday'
   ,id : "khfkja154fd44fd45444"}*/
});
console.log("inside mapStateToProps  the current mounth  :"+currentMounth)
    return {currentMounth , data ,dataLoaded}
    
   
  }

  export default  connect(mapStateToProps,{fetchCurrentMounth})(Initial)

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