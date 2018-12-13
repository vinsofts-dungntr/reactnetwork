import React, {Component} from 'react';
import { Text, View, TouchableOpacity, Dimensions} from 'react-native';

var {width} = Dimensions.get('window');
export default class FlatListItem extends Component{
    render(){
      return(
        <View style={{flex:1,}}>
          <View style = {{flexDirection: 'row', flex:1,  alignItems:'center', padding: 20}}>
            <View style={{width: 100, height: 60, backgroundColor: 'yellow'}}>
            
            </View>
            <View style={{marginLeft: 15}}>
              <Text>{this.props.item.name}</Text>
              <TouchableOpacity>
                <View style = {{borderRadius: 3, borderColor: 'blue', borderWidth: 1, alignItems: 'center', marginTop:20, height: 30, width: 100, justifyContent: 'center'}}>
                    <Text>MUA NGAY</Text>
                </View>
              </TouchableOpacity>
            </View>
            
          </View>
          
  
          <View style={{backgroundColor: 'grey', height: 4, width}}>
  
          </View>
        </View>
      );
    }
  }