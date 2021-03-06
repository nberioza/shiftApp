import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ToggleButton = ({ onPress,style,title}) => {
  const { buttonStyle, textStyle } = styles

 
  return (
    <TouchableOpacity 
    onPress={onPress} 
    style={[buttonStyle,style]} >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    //justifyContent :'center',
    color: '#007aff',
    fontSize: 25,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
   // flex: 1,
   // alignSelf: 'stretch',
   width : 170,//needs a style corection
   height :170,
   justifyContent :'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export {ToggleButton };