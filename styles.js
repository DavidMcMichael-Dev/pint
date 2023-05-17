// styles.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#424242",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  title: {
    fontSize: 46,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFF",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 3,
  },
});

export default styles;
