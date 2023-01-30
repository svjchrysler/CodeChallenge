import {useColorScheme} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";

const isDarkMode = useColorScheme() === 'dark';

const backgroundStyle = {
  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};

export {
  backgroundStyle,
  isDarkMode,
};