/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, Image, Text, View,ActivityIndicator,RefreshControl, Dimensions, TouchableOpacity} from 'react-native';
import {getResponeData} from './networking/Server';
import NoInternetScreen from './CheckNetwork';
import FlatListItem from './networking/ItemList';

const {height, width} = Dimensions.get('window')

// class FlatListItem extends Component{
//   render(){
//     return(
//       <View style={{flex:1,}}>
//         <View style = {{flexDirection: 'row', flex:1,  alignItems:'center', padding: 20}}>
//           <View style={{width: 100, height: 60, backgroundColor: 'yellow'}}>
          
//           </View>
//           <View style={{marginLeft: 15}}>
//             <Text>{this.props.item.name}</Text>
//             <TouchableOpacity>
//               <View style = {{borderRadius: 3, borderColor: 'blue', borderWidth: 1, alignItems: 'center', marginTop:20, height: 30, width: 100, justifyContent: 'center'}}>
//                   <Text>MUA NGAY</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
          
//         </View>
        

//         <View style={{backgroundColor: 'grey', height: 4, width}}>

//         </View>
//       </View>
//     );
//   }
// }

export default class App extends Component{
 
    state=({
      isLoading: true,
      refreshing: false,
      contactsList:[],
    })


  componentDidMount(){
    this.refreshListFromServer();
  }

  refreshListFromServer=()=>{
    this.setState({refreshing:true});
      getResponeData().then((contact)=>{
        this.setState({
          isLoading:false, 
          contactsList:contact,
          refreshing:false
          
        });
      }).catch((error)=>{
        this.setState({
          isLoading:false,
          refreshing:false
        })
        
      });
  }

  onRefreshing=()=>{
    this.refreshListFromServer();
  }

  _onEndReacged(){
    getResponeData().then((res)=>{
      this.setState({
        isLoadMore:false,
        contactsList:res.concat(this.state.contactsList)
      });
    }).catch((error)=>{
      
      this.setState({
        isLoading:false
      })
    })
  }

  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <ActivityIndicator size='large' color='blue'/>
          <Text style={{fontSize:20, color:'black'}}>Please wait...</Text>
        </View>
      );
    }
    
    return (
      <View style={{flex:1}}>
        <FlatList data={this.state.contactsList}
                  renderItem={({item,index})=>{
                    return(
                      <FlatListItem item={item} index={index} parentFlatList={this}/>
                    );
                  }} 
                  keyExtractor={({id},index)=>id}
                  onEndReached={()=>{this._onEndReacged()}}
                  onEndReachedThreshold={2}
                  refreshControl={<RefreshControl
                                          refreshing={this.state.refreshing}
                                          onRefresh={this.onRefreshing}
                  />}>
        </FlatList>
        <NoInternetScreen />
      </View>
    );
  }
}

