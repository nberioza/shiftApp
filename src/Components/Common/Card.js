import React from 'react';
import {View,Dimensions} from 'react-native';

const Card =(props)=> {
return(<View  style = {[styles.containerStyle, props.style]}>
{props.children}
</View>);


};

const window=Dimensions.get("screen")
const styles = {

    containerStyle : {
      // backgroundColor:"black",
     //flex:1,
     // height:window/2,
        borderWidth :1 ,
        borderRadius : 2 ,
        borderColor : 'hsl(235, 6%, 38%)',//'#ddd'
        borderBottomWidth : 0,
        shadowColor : '#000',
        shadowOffset : {width : 0 , height : 2},
        shadowOpacity : 0.1,
        shadowRadius : 2 , 
        elevation : 1 ,
        marginLeft : 5 ,
        marginRight : 5 ,
        marginTop : 10 ,


    }
}
export {Card};