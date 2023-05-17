import React, { useRef, useState } from "react";
import { Image } from "react-native";
import { TouchableWithoutFeedback, Animated } from "react-native";
import styles from "../styles.js";

const AnimatedImage = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const [isRotating, setIsRotating] = useState(false);

  const handlePress = () => {
    if (!isRotating) {
      setIsRotating(true);
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: -1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => setIsRotating(false));
    }
  };

  const animatedStyles = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [-1, 1],
          outputRange: ["-15deg", "15deg"],
        }),
      },
    ],
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View style={[animatedStyles]}>
        <Image
          source={require("../assets/pint_image.png")}
          style={styles.image}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default AnimatedImage;
