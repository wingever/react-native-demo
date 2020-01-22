import React , { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    ScrollView
} from 'react-native';

const screenW = Dimensions.get('window').width;
export default class XYFlatList extends Component{

    constructor(){
        super();
        this.state = {
            dataSource: [
                {data:'车间生产日报表',num:'2019:11:12'},
                {data:'第一行数据',num:2},
                {data:'第一行数据',num:3},
                {data:'第一行数据',num:4},
                {data:'第一行数据',num:5},
                {data:'第一行数据',num:6},
                {data:'第一行数据',num:7}]
        }
    }

    render(){
        return (
            <View style={styles.mainBar}>
                <FlatList 
                data={this.state.dataSource} 
                renderItem={({item,index})=>this._renderRow(item,index)}
                keyExtractor={(item, index)=>(item + index)} 
                style={styles.flatlistStyle}
                />
            </View>    
        )
    }
    _renderRow(item,index){
        return ( 
                <TouchableOpacity 
                onPress={()=>alert('点击了第'+(index+1)+'行')}
                style={styles.rowStyle}
                >
                    <Text style={styles.rowLeftStyle}>{item.data}</Text>
                    <Text style={styles.rowRightStyle}>{item.num}</Text>
                </TouchableOpacity>   
        )
    }
};

const styles = StyleSheet.create({
    mainBar:{ 
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    rowStyle:{
        flexDirection: 'row',
        width: screenW,
        height: 56,
        borderBottomColor: '#989c9d',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowLeftStyle:{
        marginLeft:1/10 * screenW
    },
    rowRightStyle:{
        marginRight:1/12 *screenW
    }
});