import React from 'react';
import {View,Text}from 'react-native';
import {CardSection} from './CardSection'
Row=(props)=>{
  const {rowStyle ,noteStile }= styles;


    return(
      <CardSection>
    <View style={rowStyle}>
      <Text style={noteStile}>{props.startDate}</Text>
      <Text style={noteStile}>{props.startShTime}</Text>
      <Text style={noteStile}>{props.endShDate}</Text>
      <Text style={noteStile}>{props.endShTime}</Text>

    </View>
    </CardSection>
    )

}

const styles = {
  rowStyle : {
    flex : 1 ,
    height : 40 ,
    display: "flex" ,
    flexDirection: "row",
    backgroundColor : '#80ffff'

  },
  noteStile : {
    flex :4 ,
    color : '#001a1a',
    paddingRight : 5 ,
    paddingLeft : 5 ,
    fontSize : 18 ,
    lineHeight : 23 ,
    borderColor : "#008080"
   

  }
}


export  {Row}