import React , { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Dimensions,
    SectionList,
    StyleSheet
} from 'react-native';

const screenW = Dimensions.get('window').width;
export default class XYSectionList extends Component{

    constructor(){
        super();
    }

    render(){
        return (
            <SectionList
                renderItem={({ item, index, section }) => this._renderItemRow(item,index,section)}
                renderSectionHeader={({ section: { title } }) => this._renderTitle(title)}
                sections={[
                    { title: "Title1", data: ["item1", "item2"] },
                    { title: "Title2", data: ["item3", "item4"] },
                    { title: "Title3", data: ["item5", "item6"] }
                ]}
                keyExtractor={(item, index) => item + index}
            />
        )
    }
    _renderItemRow(item,index,section){
        return (
            <View>
                <Text style = {styles.rowStyle}>{item}</Text>
            </View>
        
        )
    }
    _renderTitle(title){
        return(
            <TouchableOpacity>
                <Text style = {styles.titleStyle}>{title}</Text>
            </TouchableOpacity>
        
        )
    }

}
const styles = StyleSheet.create({
    rowStyle:{
        backgroundColor: 'cyan',
        fontSize: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    titleStyle:{
        fontSize: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'red'
    }
})