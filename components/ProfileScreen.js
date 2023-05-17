import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import AuthContext from "./AuthContext";
import { useAuth0, Auth0Provider } from "react-native-auth0";

const ProfileScreen = () => {
  const { webAuth } = useAuth0();
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const credentials = await login({
        scope: "openid profile email",
      });
      console.log(credentials);
      // Handle successful login
      login();
    } catch (error) {
      console.log(error);
      // Handle login error
    }
  };

  const handleRegister = () => {
    webAuth
      .authorize({
        scope: "openid profile email",
        audience: "https://pint.eu.auth0.com/userinfo",
      })
      .then((credentials) => {
        console.log(credentials);
        // Handle successful registration
        login();
      })
      .catch((error) => {
        console.log(error);
        // Handle registration error
      });
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isLoggedIn ? (
        <>
          <Text>Welcome to your profile!</Text>
          <Button title="Log Out" onPress={handleLogout} />
        </>
      ) : (
        <>
          <Text>Please log in or register to view your profile</Text>
          <Button title="Log In" onPress={handleLogin} />
          <Button title="Register" onPress={handleRegister} />
        </>
      )}
    </View>
  );
};

export default ProfileScreen;
