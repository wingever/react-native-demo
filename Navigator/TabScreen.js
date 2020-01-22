import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
    </View>
    );
  }
}

class DetailsScreen extends React.Component {
  //设置标题栏函数
    static navigationOptions = ({ navigation }) => {
        return {
        title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        };
  };
    render() {
        //获得了包含参数的对象
        const { navigation } = this.props;
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button 
        title="Update the title"
        onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
        />
        </View>
        );
    }
}
  
class SettingsScreen extends React.Component {
    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* other code from before here */}
            <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
            />
        </View>
        );
    }
}

const homeStack = createStackNavigator({
    Home:HomeScreen,
    Details: DetailsScreen
});

const settingsStack = createStackNavigator({
    Settings: SettingsScreen,
    Details: DetailsScreen
})

const TabNavigator = createBottomTabNavigator({
    Home: homeStack,
    Settings: settingsStack
    },{
    // 设置tab栏的样式
        tabBarOptions: {
        activeTintColor: '#f4511e',
        inactiveTintColor: '#000'
        },
    }
)

export default createAppContainer(TabNavigator);