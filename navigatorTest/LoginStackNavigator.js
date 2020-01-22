import { createStackNavigator} from 'react-navigation-stack';
import Login from '../pages/login';
import MainTabNavigator from './MainTabNavigator';
import { createAppContainer } from 'react-navigation';

const LoginStack = createStackNavigator({
     Login: Login,
     Main: MainTabNavigator
    }
);
const LoginRoot = createAppContainer(LoginStack)
export default LoginRoot;