import React ,{ Component } from 'react';
import{
    StyleSheet,
    View,
    Text
} from 'react-native';
export default class Home extends Component{
    static navigationOptions = {
        title: '详情页',        
      }
    render(){
        return(
            <View style={{ flex: 1,backgroundColor:'#afa', alignItems: 'center', justifyContent: 'center' }}>
                <Text>详情页</Text>
            </View>
        )
    }
}