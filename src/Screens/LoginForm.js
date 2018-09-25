import React , {Component} from 'react';
import {View , Text} from 'react-native';
import {Card,CardSection,Button,Input,Header,Spinner}from '../Components/Common';
import {emailChanged ,passwordChanged,loginUser} from '../Actions/AuthActions';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
//the change that maide and need to be removed when testing in real invirement
//remove the default values of email and password
//
class LoginForm extends Component {


    onEmailChange(text){
       this.props.emailChanged(text)
    }

    onPasswordChange(text){
        this.props.passwordChanged(text)
    }

renderError(){
    if(this.props.error){
        return(<View style={{backgroundColor :'white'}}>
            <Text style={styles.errorTextStyle}>
            {this.props.error}
            </Text>
        </View>)
    }
}
onButtonPress(){
//const {email , password}= this.props;
//this wethoud should be changed in order to authanticate

this.props.loginUser({email:"test@gmail.com",password:"123abc"});
}
renderButton(){
    if(this.props.loading){
        return <CardSection><Spinner size="large"/></CardSection>
    }else{
       return  <CardSection style={{
           // flexDirection : 'column',
            justifyContent :'space-between',
            alignItems : 'center'}} ><Button onPress={this.onButtonPress.bind(this)}>Login </Button >
        <Button onPress={()=>Actions.logonForm()}>Sign up</Button ></CardSection > 
       
    }

}



    render(){

    return(
        <Card>
             <CardSection>
                <Header headerText='ShiftApp'/>
            </CardSection>

            <CardSection>
                <Input
                label='E-mail'
                placeholder='email@gmail.com'
               onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
                />

  </CardSection>
                <CardSection>
                <Input
                secureTextEntry
                label='Password'
                placeholder='password'
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
                />
                </CardSection>
                {this.renderError()}
           
          {this.renderButton()}
         
            </Card>
        
    );
}


}
const styles = {
    errorTextStyle:{
        fontSize : 20 ,
        alignSelf : 'center',
        color : 'red'


    }
}
/*
const mapStateToProps=(state)=>{
return {
    email:state.auth.email,
    password:state.auth.password,
    error :state.auth.error,
    loading :state.auth.loading
    
}

}*/

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
  
    return { email, password, error, loading };
  };
  




export default connect (mapStateToProps,{emailChanged ,passwordChanged,loginUser})(LoginForm)