import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    RefreshControl,
    StyleSheet,
    Dimensions
}from 'react-native'

const screenW = Dimensions.get('window').width;
export default class XYRefresh extends Component{
    constructor(){
        super();
        this.state = {
            rowDataArr: Array.from(new Array(30)).map((value,index)=>({
                title: '初始化数据' + index
            })),
            isrefreshing: false,
            loaded: 0

        }
    }

    render(){
        const rowsArr = this.state.rowDataArr.map((row, index)=>(<Row data={row} 
            key={index}/>));
        return (
            <ScrollView
            refreshControl = {
                <RefreshControl 
                refreshing = {this.state.isrefreshing}
                onRefresh = {()=>this._onRefresh()}
                />
            }
            >
                {rowsArr}
            </ScrollView>
        )
    }
    _onRefresh(){
        this.setState(
            {
                isrefreshing:true,
            }
        );
        setTimeout(()=>{
            let newDataArr = Array.from(new Array(1)).map((value, index)=>({
                title: '我是新加载的数据' + (this.state.loaded+index)
            })).concat(this.state.rowDataArr);

            this.setState({
                rowDataArr: newDataArr,
                isrefreshing: false,
                loaded: this.state.loaded +1
            });
        }, 2000);

    }
}
class Row extends Component{
    static defaultprops = {
        data:{}
    }
    render(){
        return (
            <View style = {{
                width: screenW,
                height: 40,
                borderBottomColor: 'red',
                borderBottomWidth: 1,
                justifyContent: 'center'
            }}>
                <Text>{this.props.data.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});