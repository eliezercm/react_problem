import {createStackNavigator} from 'react-navigation-stack';
import Welcome from '../screens/welcome'

const MainNavigator = createStackNavigator({
    Welcome:{
        screen:Welcome,
    }
});

export default MainNavigator;