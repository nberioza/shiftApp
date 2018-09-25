import React,{Component} from 'react'
import {View ,Text,StyleSheet}from 'react-native'
import {connect} from 'react-redux';
import {Card,CardSection,Button} from '../Components/Common';

class EditReportForm extends Component{

    render(){
        return(<Card>
            <CardSection style={styles.containerStyle}>
                <Text>e-mail address to send the report</Text>
                <Text>here are the address</Text>
                <Button style={styles.buttonStyle}>edit e-mail</Button>
            </CardSection>

            <CardSection style={styles.containerStyle}>
                <Text>Work month</Text>
                <Button style={styles.buttonStyle}>edit range</Button>
            </CardSection>
        </Card>)
    }
}
const styles=StyleSheet.create({
buttonStyle : {
   
    alignSelf:'flex-end',
    //justifyContent:'flex-end'
},
containerStyle : {
  
    flexDirection : 'column',
    justifyContent:'space-between'
}
})
export default EditReportForm