import React, { ComponentProps, FC } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

type IInputProps = ComponentProps<typeof TextInput>;

const Input: FC<IInputProps> = (props) => {
  return <TextInput {...props} />;
};

export default Input;
const styles = StyleSheet.create({});
