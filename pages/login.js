import React , { Component } from 'react';
import {
    View,
    Button,
    TextInput,
    Text,
    StyleSheet,
    Image,
    Picker,
    Switch
} from 'react-native';

export default class Login extends Component{
    constructor(){
        super();
        this._onChangeText = this._onChangeText.bind(this);
        this.state = {
            input: '12'
        }
    }
    static navigationOptions = {
        title: '登陆',
        headerShown: false
      }
      
    render(){        
        return(
            <View style={styles.mainStyle}>
                <Image
                style={{width: 70, height: 70}}
                source={{uri: 'http://b-ssl.duitang.com/uploads/item/201607/26/20160726185736_yPmrE.thumb.224_0.jpeg'}}
                />
                <View style = {styles.loginStyle}>
                    <Text>服务器: </Text>
                    <Picker
                        mode='dropdown'
                        style={styles.pickerStyle}
                        onValueChange={(itemValue, itemIndex) =>
                        this.setState({language: itemValue})
                    }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                    <Image 
                    style={{width: 15, height: 15}}
                    source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579582625490&di=f78fcb9d54ba62dbbc5c0c7d9d2d8c74&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F01%2F65%2F58de763fad9c9_610.jpg'}}
                    />
                </View>
                <View style = {styles.loginStyle}>
                    <Text>用户名: </Text>
                    <TextInput placeholder='请输入账号'
                        onChangeText = {this._onChangeText}
                        onSubmitEditing = {()=>alert(this.state.input)}
                        style={styles.inputStyle}
                    />
                </View>
                <View style = {styles.loginStyle}>
                    <Text>密码: </Text>
                    <TextInput placeholder='请输入密码'
                        style={styles.inputStyle}
                    />
                </View>
                <View style = {styles.loginStyle}>
                    <Switch></Switch>
                    <Text>记住密码</Text>
                </View>
                <Button title='login'
                    onPress={()=>this._loginTest()}
                /> 
            </View>
        ) 
    }
    _onChangeText(data){
       this.setState({
           input: data
       })
    }
    _loginTest(){
        const navigation = this.props.navigation;
        if(this.state.input!=='wode'){
            navigation.replace('Main');
        }
        else{
            alert('请输入正确的账号')
        }
    }
}
const styles = StyleSheet.create({
    mainStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#ffd'
    },
    loginStyle:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    },
    pickerStyle:{
        height: 50,
        width: 100
    },
    inputStyle:{
        height: 50,
        width: 100
    }
})