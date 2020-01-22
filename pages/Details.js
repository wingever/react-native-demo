import React ,{ Component } from 'react';
import{
    View,
    TextInput,
    StatusBar,
    Dimensions,
    StyleSheet
} from 'react-native';
import XYFlatList from './../components/XYFlatList';

const screenW = Dimensions.get('window').width;
export default class Details extends Component{
    static navigationOptions = {
        headerTitle: '报告管理',
        // headerShown: false
      }
    render(){
        return(
            <View style={{flex:1}}> 
                <StatusBar style={styles.statusBar}/>
                <View style={styles.topBar}>
                    <TextInput style={styles.searchBar} placeholder='搜索'></TextInput>
                </View>
                <XYFlatList />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    statusBar:{
        marginTop: StatusBar.currentHeight
    },
    topBar:{
        width:screenW,
        height:56,
        backgroundColor:'#c9c9ce',
        justifyContent:'center',
        alignItems: 'center'
    },
    searchBar:{
        width:3/4*screenW,
        height: 28,
        backgroundColor: '#fff',
        borderRadius:5,
        padding:0
    }
})