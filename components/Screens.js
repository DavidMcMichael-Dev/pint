import { Text, View } from "react-native";
import styles from "../styles.js";
import AnimatedImage from "./AnimatedImage.js";
import ProfileScreen from "./ProfileScreen.js";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <AnimatedImage />
      <Text style={styles.title}>Pint?</Text>
    </View>
  );
};

const SocialScreen = () => {
  return <ProfileScreen />;
};

export { HomeScreen, SocialScreen };
