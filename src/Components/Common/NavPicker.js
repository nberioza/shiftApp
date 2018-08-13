import {Picker} from 'react-native'

const NavPicker = ()=>{
return(<Picker>

    selectedValue={this.props.value}
                 onValueChange={this.chstateValue.bind(this)}
                  >
                  <Picker.Item label="test" value="test"  />
                      <Picker.Item label="Watch Shifts" value="watch_shifts" style= {{borderColor : '#3d3d29',borderWidth : 2}}  />
                      <Picker.Item label="Add Shift" value="add_shift" style= {{borderColor : '#3d3d29',borderWidth : 2}}/>
                      <Picker.Item label="Settings" value="settings" style= {{borderColor : '#3d3d29',borderWidth : 2}}/>
                      <Picker.Item label="Send report" value="send_report" style= {{borderColor : '#3d3d29',borderWidth : 2}}/>
</Picker>)


}