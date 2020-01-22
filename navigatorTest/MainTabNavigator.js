import React, { Component } from 'react';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator,BottomTabBar} from 'react-navigation-tabs';

import HomeRootStack from './HomeStackNavigator';
import Group from '../pages/Group';
import Settings from '../pages/Settings';

//底部导航
const TABS = {
    Home:  {
        screen: HomeRootStack,
        navigationOptions: {
            title: '报告明细',
            }
    },
    Group:  {
        screen: Group,
        navigationOptions: {
            title: '报告分组'
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: '设置'
        }
    }
}
class MainTabNavigator extends Component{
    _tabNavigator(){
        const { Home, Group, Settings} = TABS;
        const tabs = {Home,Group, Settings};
        if(!this.tabNavigator){
            this.tabNavigator = createAppContainer(createBottomTabNavigator(
                tabs,{tabBottomComponent: (props) =>(
                    <BottomTabBar {...props} />
                )}
            ))
        }
        return this.tabNavigator;
    }
    static navigationOptions = {
        headerShown: false,
      }
    render(){
        const TabNavigator = this._tabNavigator();
        return <TabNavigator />
    }
}
export default MainTabNavigator;