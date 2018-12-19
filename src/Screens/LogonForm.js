//provide ui 
//connect to redux 
//provide actions
//add some identefications to the form
//make sure that authantication have the button to rout  from login form to this screen
//make authanticated user stay connected
//make logoff possible
import React , {Component} from 'react';
import {View , Text} from 'react-native';
import {Card,CardSection,Button,Input,Header,Spinner}from '../Components/Common';
////import {emailChanged ,passwordChanged,loginUser} from '../Actions/AuthActions';
import {connect} from 'react-redux';
import {userUpdate,logUserOn} from '../Actions/LogonAction';



class LogonForm extends Component {
//call for name & family insert method from actions with prop and value

onButtonPress(){
   // logUserOn=({fst,sec,email,password,passwordConf})
   const {name,secName,email,password}=this.props
   if(!(this.props.password===this.props.passwordConf)){
   this.props.userUpdate({prop :'errorPass',value:'passwords dont match'})
   }
   else if(this.props.email===''){
    this.props.userUpdate({prop :'errorEmail',value:'please insert your email'})
   }else{
    
    this.props.logUserOn({name,secName,email,password})
   }
   
}
renderSpiner(){
    if(this.props.loading===true)
    {
        return(<View><Spinner size='large'/></View>)
    }
}
renderError(){
if(this.props.errorPass){
    return(<View style={{backgroundColor :'white'}}>
        <Text style={styles.errorTextStyle}>
        {this.props.errorPass}
        </Text>
    </View>)}
    }
    renderEmailErr(){
       if(this.props.errorEmail){
        return(<View style={{backgroundColor :'white'}}>
        <Text style={styles.errorTextStyle}>
        {this.props.errorEmail}
        </Text>
    </View>)}
       }
     renderER(){
        if(this.props.error){
            return(<View style={{backgroundColor :'white'}}>
            <Text style={styles.errorTextStyle}>
            {this.props.error}
            </Text>
        </View>)}
     }
   

    render(){

    return(
        <View style={{backgroundColor: '#4c69a5',flex: 1,
          }}>
          <Card style={{flex:3/4}}>
             <CardSection>
                <Header headerText='Log-On'/>
            </CardSection>
            <CardSection>
            <Input
                label='First name'
                placeholder='name'
               onChangeText={value=>this.props.userUpdate({prop :'name',value})}
                value={this.props.name}
                />
               </CardSection>
               <CardSection>
               <Input
                label='Second name'
                placeholder='second'
               onChangeText={value=>this.props.userUpdate({prop :'secName',value})}
                value={this.props.secName}
                />
               </CardSection>
            <CardSection>
            <Input
                secureTextEntry
                label='Password'
                placeholder='password'
                onChangeText={value=>this.props.userUpdate({prop :'password',value})}
                value={this.props.password}
                />
            </CardSection>
            {this.renderError()}
            <CardSection>
            <Input
                secureTextEntry
                label='Confirm Password'
                placeholder='password'
                onChangeText={value=>this.props.userUpdate({prop :'passwordConf',value})}
                value={this.props.passwordConf}
                />
               </CardSection>
               {this.renderEmailErr()}
               <CardSection>
               <Input
                label='E-mail'
                placeholder='email@gmail.com'
               onChangeText={value=>this.props.userUpdate({prop :"email",value})}
                value={this.props.email}
                />
               </CardSection>
               <CardSection>
                   <Button onPress={this.onButtonPress.bind(this)}>Submit</Button>
               </CardSection>
              { this.renderSpiner()}
              { this.renderER()}
            </Card>
            </View>
    );
}


}
/**const styles = {
    errorTextStyle:{
        fontSize : 20 ,
        alignSelf : 'center',
        color : 'red'


    }
}

const mapStateToProps=(state)=>{
return {
    email:state.auth.email,
    password:state.auth.password,
    error :state.auth.error,
    loading :state.auth.loading
    
}

}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
  
    return { email, password, error, loading };
    connect (mapStateToProps,{emailChanged ,passwordChanged,loginUser})(
  };*/
  
  const styles = {
    errorTextStyle:{
        fontSize : 20 ,
        alignSelf : 'center',
        color : 'red'


    }
}
  const mapStateToProps = ({ logon }) => {
    const { email, password, errorPass, errorEmail, loading ,name ,secName ,passwordConf} = logon;
  
    return { email, password,errorPass, errorEmail, loading ,name ,secName,passwordConf };
  }


export default  connect (mapStateToProps,{userUpdate,logUserOn})(LogonForm)
/**
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
            </CardSection> */