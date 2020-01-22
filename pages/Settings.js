import React ,{ Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';


export default class Settigs extends Component{
    constructor(){
        super();
        this.state=({
            dataSource:[
                {name: '缓存管理',num:'the1'},
                {name: '消息管理',num:'the2'},
                {name: '消息管理',num:'the2'},    
            ]
        })
    }
    render(){
        return(
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
                    <Text>{item.name}{item.num}</Text>
                </TouchableOpacity>   
        )
    }
};

const styles = StyleSheet.create({
    mainBar:{ 
        flex: 1,
        backgroundColor:'#ffa', 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    rowStyle:{
        width: 100,
        height: 100,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});