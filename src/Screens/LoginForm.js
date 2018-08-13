import React , {Component} from 'react';
import {View , Text} from 'react-native';
import {Card,CardSection,Button,Input,Header,Spinner}from '../Components/Common';
import {emailChanged ,passwordChanged,loginUser} from '../Actions/AuthActions';
import {connect} from 'react-redux';
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
const {email , password}= this.props;
this.props.loginUser({email,password});
}
renderButton(){
    if(this.props.loading){
        return  <Spinner size="large"/>
    }else{
       return  <Button onPress={this.onButtonPress.bind(this)}>Login </Button >
    }

}



    render(){

    return(
        <Card>
             <CardSection>
                <Header headerText='Manager'/>
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
            <CardSection>
          {this.renderButton()}
            </CardSection>
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