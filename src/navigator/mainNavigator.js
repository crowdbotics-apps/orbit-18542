import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile73511Navigator from '../features/UserProfile73511/navigator';
import Maps73492Navigator from '../features/Maps73492/navigator';
import Settings73470Navigator from '../features/Settings73470/navigator';
import Settings73455Navigator from '../features/Settings73455/navigator';
import NotificationList73454Navigator from '../features/NotificationList73454/navigator';
import Maps73453Navigator from '../features/Maps73453/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile73511: { screen: UserProfile73511Navigator },
Maps73492: { screen: Maps73492Navigator },
Settings73470: { screen: Settings73470Navigator },
Settings73455: { screen: Settings73455Navigator },
NotificationList73454: { screen: NotificationList73454Navigator },
Maps73453: { screen: Maps73453Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
