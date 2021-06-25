import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../../components/Themed";
import { commonStyles } from "../commonStyle";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { logOut_user } from "../../store/actions/user";
export default function TabThreeScreen() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user);

  return (
    <View style={commonStyles.center}>
      <TouchableOpacity
        onPress={() => {
          dispatch(logOut_user());
          console.log(JSON.stringify(user));
        }}
      >
        <Text style={styles.title}>Logout </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
