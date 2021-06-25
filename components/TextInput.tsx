import React, { ComponentProps, FC } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { commonStyles } from "../screens/commonStyle";

type IInputProps = ComponentProps<typeof TextInput>;

const Input: FC<IInputProps> = (props) => {
  return (
    <View style={commonStyles.generalHorizontalPadding}>
      <TextInput {...props} />
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({});
