import React , {Component} from 'react';
import {View , Text,Dimensions} from 'react-native';
import {Card,CardSection,Button,Input,Header,Spinner}from '../Components/Common';
import {emailChanged ,passwordChanged,loginUser} from '../Actions/AuthActions';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
//the change that maide and need to be removed when testing in real invirement
//remove the default values of email and password
//
import {firebase} from '../Components/Common/Firebase'
//const window = Dimensions.get('window');

class LoginForm extends Component {
componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            Actions.shiftScreen();
        }
  })
}

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


this.props.loginUser({email:email,password: password});
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
        <View
        style={{
            //
            
         height:"100%",
          // minHeight: "initial",
            
            backgroundColor: '#4c69a5',
            //flex: 1,
          }}
       
        >
        <Card  style={{flex:1/3
        }}>
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
            </View>
        
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
    const { email, password, error, loading ,user} = auth;
  
    return { email, password, error, loading ,user};
  };
  




export default connect (mapStateToProps,{emailChanged ,passwordChanged,loginUser})(LoginForm)