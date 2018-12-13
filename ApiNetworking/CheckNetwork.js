
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, NetInfo } from 'react-native';


const { width, height } = Dimensions.get('window');

class NoInternetScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: true,
        };
    }

    componentDidMount() {
            NetInfo.isConnected.addEventListener(
                'connectionChange', 
                this.handleConnectivityChange
            );
    }

    handleConnectivityChange = isConnected => {
        // this.setState({ isConnected });
        if(this.state.isConnected !== isConnected){
            // console.log(isConnected);
            this.setState({ isConnected });

        }
    };

    render() {
        return (!this.state.isConnected ?
            <View style={styles.offlineContainer}>
                <Text style={styles.textStyle}>Hello loi</Text>
            </View>
            :
            <View />)
    }
}

const styles = StyleSheet.create({
    offlineContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height,
        position: 'absolute',
    },
    offlineText: { color: '#fff' },

    textStyle: {
        fontSize: 16,
        color: 'black',
        marginVertical: 20
    },
    imageStyle: {
        width: '70%',
        height: '40%'
    }
})

export default NoInternetScreen;