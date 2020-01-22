import { createStackNavigator} from 'react-navigation-stack';
import Details from '../pages/Details';
import HomeDetail from '../pages/HomeDetail';
const HomeRootStack = createStackNavigator({
     Details:Details,
     HomeDetail: HomeDetail
    },{
        navigationOptions: ({navigation})=>({
            tabBarVisible: navigation.state.index === 0,
            headerTitle: '报告管理'
        })
    },
);
 export default HomeRootStack;