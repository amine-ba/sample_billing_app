import React, { FC, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { commonStyles } from "../commonStyle";
import { Button } from "react-native-paper";
import TextInput from "./../../components/TextInput";
import { useDispatch } from "react-redux";
import { loadUser } from "../../store/actions/user";
import { useSelector } from "react-redux";
import {
  safeEmail,
  isValidEmail,
  isValidPassword,
  PASSWORD_VALIDATION_ERROR,
  EMAIL_VALIDATION_ERROR,
} from "./utils/validations";
const LoginScreen: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.user.isLoading);

  return (
    <KeyboardAwareScrollView
      style={[commonStyles.flexOne, commonStyles.alignSelfCenter]}
    >
      <View style={commonStyles.alignItemsCenter}>
        <Text style={[styles.title, commonStyles.generalPadding]}>
          Login Screen
        </Text>
        <View style={commonStyles.fullWidth}>
          <View style={commonStyles.generalPadding}>
            <TextInput
              value={email}
              onChangeText={(email) => setEmail(email)}
              placeholder="Email address"
            />
            {!isValidEmail(email) && <Text>{EMAIL_VALIDATION_ERROR}</Text>}
          </View>
          <View style={commonStyles.generalPadding}>
            <TextInput
              value={password}
              onChangeText={(password) => setPassword(password)}
              placeholder="Password"
            />
            {!isValidPassword(password) && (
              <Text>{PASSWORD_VALIDATION_ERROR}</Text>
            )}
          </View>

          <View>
            {!isLoading ? (
              <Button
                onPress={() => {
                  dispatch(loadUser(safeEmail(email), password));
                }}
              >
                Login
              </Button>
            ) : (
              <ActivityIndicator size="small" />
            )}
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: "50%",
  },
});
