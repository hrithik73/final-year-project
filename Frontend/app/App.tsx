import AppLoading from "expo-app-loading";
import LottieView from "lottie-react-native";
import { NativeBaseProvider } from "native-base";
import * as React from "react";
import { useEffect } from "react";
import assets from "./assets/animations";
import theme from "./src/configs/theme";
import useFont from "./src/hooks/useFont";
import AppNavigation from "./src/navigations";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

const App = () => {
  const fontsLoaded = useFont();
  const [loading, setLoading] = React.useState(true);

  const onLoadEffect = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  useEffect(onLoadEffect, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return loading ? (
    <LottieView source={assets.lottieFiles.loading} autoPlay loop />
  ) : (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <AppNavigation />
      </NativeBaseProvider>
    </Provider>
  );
};
export default App;
