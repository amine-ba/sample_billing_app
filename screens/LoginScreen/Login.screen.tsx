import React, { FC, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { commonStyles } from "../commonStyle";
import { Button, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { loadUser } from "../../store/actions/user";
import { useSelector } from "react-redux";

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
        <Text style={styles.title}>Login Screen</Text>
        <View style={commonStyles.fullWidth}>
          <View>
            <TextInput
              value={email}
              onChangeText={(email) => setEmail(email)}
              placeholder="Email address"
            />
          </View>
          <View>
            <TextInput
              value={password}
              onChangeText={(password) => setPassword(password)}
              placeholder="Password"
            />
          </View>
          <View>
            {!isLoading ? (
              <Button
                onPress={() => {
                  dispatch(loadUser(email, password));
                }}
              >
                Login
              </Button>
            ) : null}
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
