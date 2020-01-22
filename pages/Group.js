import React ,{ Component } from 'react';
import{
    View,
    Text,
    StyleSheet
} from 'react-native';
export default class Group extends Component{
    render(){
        return(
            <View style={styles.mainBaar}>
                <Text>报告分组</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    mainBaar:{
        flex: 1, 
        backgroundColor:'#dfa',
        alignItems: 'center', 
        justifyContent: 'center' 
    },
})