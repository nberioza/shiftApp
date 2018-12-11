
import React ,{Component}from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Color from '../Global/Styles/colors'
/**
 * 1. Connect to redux store
 * 2. Make conection to styles folder
 * 3. connect to info in firebase
 * 4. Make an option to edit an email , per hour salary ,
 * 5. Switch to inable overtime 
 */
class SettingsScreen extends Component{

    render(){
        return(
               
               <View style ={styles.containerOptions }>
                  
                   <View style ={styles.header1 }>
                   <Text style ={styles.headerext1}>Settings</Text>
                   </View>
                   <View style ={styles.optionLine}>
                   <Text style ={styles.headerext2}>e-mail is ...</Text>
                   </View>
                   <View style ={styles.optionLine}>
                   <Text style ={styles.headerext2}>setting ...</Text>
                   </View>
                   <View style ={styles.optionLine}>
                   <Text style ={styles.headerext2}>setting 2 ...</Text>
                   </View>
                   <View style ={styles.optionLine}>
                   <Text style ={styles.headerext2}>setting 3 ...</Text>
                   </View>
                   <View style ={styles.optionLine}>
                   <Text style ={styles.headerext2}>setting 4 ...</Text>
                   </View>


               </View>

        )
    }
}
const styles = StyleSheet.create({
    headerext1 : {
        color :'hsl(59, 51%, 83%)',
         alignSelf:"center",
         fontSize : 25 
     },
     headerext2 : {
        color :'hsl(59, 51%, 83%)',
         alignSelf:"flex-start",
         fontSize : 19 
     },
     header1 :{
         flex: 7 ,
         backgroundColor :'hsl(231, 6%, 22%)',
         paddingLeft: 5,
        paddingRight:5,
        justifyContent: "center",
        margin: 10
       //  alignSelf:"flex-start"

     },
     containerOptions : {
         flex : 1 ,
        backgroundColor :'hsl(240, 4%, 5%)',
        flexDirection :"column",
        justifyContent :"flex-start",
        alignItems: "stretch",
       // padding : 7
     },
     optionLine :{
        flex : 8 ,
        backgroundColor :  'hsl(235, 6%, 38%)' ,
        justifyContent:"center",
        paddingLeft: 5,
        paddingRight:5,
        
        borderColor :'hsl(59, 51%, 83%)',
        margin : 2
     }

})

export default SettingsScreen