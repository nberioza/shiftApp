import _ from 'lodash';
import React,{Component} from 'react';
import { View, Text ,FlatList,Picker} from 'react-native';
import { connect } from 'react-redux';
import {Button,Card,CardSection,Row,Spinner} from '../Components/Common';
import {Actions}from 'react-native-router-flux';
import {getShiftObj} from '../Actions/ShiftAction';
import{chYear,
  fetchCurrentMounth,
  fetchMonthToDisplay,updateYearAndMounth}from '../Actions/AddAction'
  import{reportCreate}from '../Actions/ShiftAction'
//import { runInThisContext } from 'vm';?



class Initial extends Component {
  componentWillMount(){
   //updating to the state the year and the month
   this.props.updateYearAndMounth()
   console.log("componentWillMount")
    //displaying current month
    this.props.fetchCurrentMounth()
    
  }
  //creates/updates xlsx file .then should open email
  reportPressed(){
//pass aOa to action method
this.props.reportCreate(this.props.aOa)
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


 chengeMounthValue(month){
//creating month year name model to pass to fetchCurrentMonth  method
var starMounth = month;
var startYear =this.props.yearToDisplay;
var mounthYearModel = starMounth.concat("_",startYear);

  this.props.fetchMonthToDisplay( mounthYearModel ,month)
 } 
 chengeYearValue(year){
//the year to display should change to what was chosen
//then we need tp fetch the last month that wa chosen
//if will reload the yearto display should be current
var starMounth = this.props.monthToDisplay;
var startYear = year;
var mounthYearModel = starMounth.concat("_",startYear);
this.props.chYear(year)
  this.props.fetchMonthToDisplay( mounthYearModel ,starMounth)
 
 } 
 /**renderYearPicker(){
  var value = 1980
  const year=[]
  year[0]=value.toString
  for(i=0;i<100;i++){
    year.push(value++)
  }
  

  return  (<Picker style={{height : 50 ,width : 100 ,backgroundColor : '#85e0e0', borderWidth: 2 , borderColor : '#330000' ,borderRadius: 5 ,margin : 2 , padding:3, } }
  mode = "dropdown"
 selectedValue={this.props.yearToDisplay}
  onValueChange={this.chengeYearValue.bind(this)}
   >{year.map((value,index)=>{
    return<Picker.Item value={value.toString} label={value.toStrin} key={index}/>
  })}</Picker>)
 }*/
 
 render() {
  let value = 1980
  let year=[]
 let strval=value.toString()
  year[0]=strval
  for(i=0;i<100;i++){
    value++
    strval = value.toString()
    year.push(strval)
  }
  console.log(year)
 console.log(this.props.currentMounth)
      return (
        <Card style={{flex:1}}>
        {/** frst cardSection */}
         <CardSection style={{flex:1}}>
         
         <Button onPress= {()=>Actions.pop()}>Back</Button>
         </CardSection>
         {/** second cardSection */}
         <CardSection style={{flex:1}} >
           
         <Picker style={{height : 50 ,width : 100 ,backgroundColor : '#85e0e0', borderWidth: 2 , borderColor : '#330000' ,borderRadius: 5 ,margin : 2 , padding:3, } }
                 
                 mode = "dropdown"
                selectedValue={this.props.monthToDisplay}
                 onValueChange={this.chengeMounthValue.bind(this)}
                  >
                  <Picker.Item label="Jenuary" value="0"  />
                      <Picker.Item label="February" value="1" style= {{borderColor : '#3d3d29',borderWidth : 2}}  />
                      <Picker.Item label="March" value="2" style= {{borderColor : '#3d3d29',borderWidth : 2}}/>
                      <Picker.Item label="April" value="3" style= {{borderColor : '#3d3d29',borderWidth : 2}}/>
                      <Picker.Item label="May" value="4" style= {{borderColor : '#3d3d29',borderWidth : 2}}/>
                      <Picker.Item label="June" value="5" style= {{borderColor : '#3d3d29',borderWidth : 2}}  />
                      <Picker.Item label="July" value="6" style= {{borderColor : '#3d3d29',borderWidth : 2}}/>
                      <Picker.Item label="August" value="7" style= {{borderColor : '#3d3d29',borderWidth : 2}}/>
                      <Picker.Item label="September" value="8" style= {{borderColor : '#3d3d29',borderWidth : 2}}/>
                      <Picker.Item label="October" value="9" style= {{borderColor : '#3d3d29',borderWidth : 2}}  />
                      <Picker.Item label="November" value="10" style= {{borderColor : '#3d3d29',borderWidth : 2}}/>
                      <Picker.Item label="December" value="11" style= {{borderColor : '#3d3d29',borderWidth : 2}}/>
                     
                </Picker>

                <Picker style={{height : 50 ,width : 100 ,backgroundColor : '#85e0e0', borderWidth: 2 , borderColor : '#330000' ,borderRadius: 5 ,margin : 2 , padding:3, } }
  mode = "dropdown"
 selectedValue={this.props.yearToDisplay}
  onValueChange={this.chengeYearValue.bind(this)}
   >{year.map((value,index)=>{
    return<Picker.Item value={value} label={value} key={index}/>
  })}</Picker>
  <Button  onPress={this.reportPressed.bind(this)}>send report</Button>
        {/**this.renderYearPicker()*/}
         </CardSection>
         {this.showSpinner()}  
        
        
        
        
         <CardSection style={{flex : 8}}>
         {/** third card section */}  
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
</CardSection>      
       

        </Card>
      );
    }
  }
  const mapStateToProps=({ShiftsData,ShiftView})=>{
   const {table} =ShiftView
   const {data,dataLoaded,monthToDisplay,yearToDisplay}=ShiftsData
 console.log(data)
 const currentMounth =_.map(data,(val,uid)=>{
  return {...val , uid}
  /*the end product would be  an array(this is what _.map does) of object types:
  {name :'john' ,
   phone : 0223354 ,
   shift : 'monday'
   ,id : "khfkja154fd44fd45444"}*/
});
const aOa=currentMounth.map((val ,index)=>{
 var arr=[]
 arr[0]=val.startDay
 arr.push(val.startTime)
 arr.push(val.endTime)
 arr.push(val.overAll)
  return  arr
 
})
console.log("inside mapStateToProps  the current mounth  :")
console.log(currentMounth)
console.log("inside mapStateToProps  the tryOut  :")
console.log(aOa)
    return { aOa,currentMounth , data ,dataLoaded,monthToDisplay,yearToDisplay}
    
   
  }

  export default  connect(mapStateToProps,{reportCreate,chYear,fetchCurrentMounth,fetchMonthToDisplay,updateYearAndMounth})(Initial)

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