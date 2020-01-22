import React , { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image

} from 'react-native';

// 引入本地数据
const wineArr = require('');
const screenW = Dimensions.get('window').width;
export default class XYWineList extends Component{

    constructor(){
        super();
        this.state = {
            dataSource: wineArr
        }
       
    }

    render(){
        return (
            <FlatList 
            
            data={this.state.dataSource} 
            renderItem={({item,index})=>this._renderRow(item,index)}
            keyExtractor={(item, index)=>(item + index)} 
            />
        )
    }
    _renderRow(rowData,rowID){
        return (
            <TouchableOpacity 
                style = {{
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderBottomColor: '#e8e8e8',
                    padding: 10
                }}
            >
                <Image source={{uri: rowData.image}} 
                style={{
                    width:80,
                    height:90,
                    backgroundColor:'red'
                }}
                />
                <view style={{
                    flex: 1,
                    backgroundColor:'cyan',
                    marginLeft: 10,
                    marginRight: 10,
                    justifyContent: 'space-around'
                }}>
                    <Text
                    numberOfLines = {2}
                    style = {{
                        fontSize:18
                    }}
                    >{rowData.name}</Text>
                    <Text>{rowData.money}</Text>
                </view>

            </TouchableOpacity>
        )

    }
   
}

const styles = StyleSheet.create({
    
});