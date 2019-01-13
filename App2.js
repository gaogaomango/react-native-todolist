import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import configureStore from "./src/store/configureStore";

const store = configureStore();

Navigation.registerComponentWithRedux(
  "awesome-places.AuthScreen",
  () => AuthScreen,
  Provider,
  store
);

Navigation.registerComponentWithRedux(
  "awesome-places.SharePlaceScreen",
  () => SharePlaceScreen,
  Provider,
  store
);

Navigation.registerComponentWithRedux(
  "awesome-places.FindPlaceScreen",
  () => FindPlaceScreen,
  Provider,
  store
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "awesome-places.AuthScreen"
      }
    }
  });
});
