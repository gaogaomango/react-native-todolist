import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  ImageBackground
} from "react-native";

import startMainTabs from "../MainTabs/startMainTab";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import backgroundImg from "../../assets/background.jpg";
class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
          <View style={styles.container}>
            <MainText>
              <HeadingText>Please Login</HeadingText>
            </MainText>
            <Button title="Switch to Login" />
            <View style={styles.inputContainer}>
              <DefaultInput
                placeholder="Your E-Mail Address"
                style={styles.input}
              />
              <DefaultInput placeholder="Password" style={styles.input} />
              <DefaultInput
                placeholder="Confirm Password"
                style={styles.input}
              />
            </View>
            <Button title="Login" onPress={this.loginHandler} />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  backgroundImage: {
    flex: 1,
    width: "100%"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#ccc"
  }
});

export default AuthScreen;
