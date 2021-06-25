import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import * as Random from "expo-random";

import { Text, View } from "../../components/Themed";
import { commonStyles } from "../commonStyle";
import { useDispatch } from "react-redux";
import { addProduct } from "./../../store/actions/product";
export default function TabOneScreen() {
  const [label, setLabel] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");

  const dispatch = useDispatch();

  return (
    <View>
      <Text style={styles.title}>Tab One</Text>
      <View style={commonStyles.fullWidth}></View>
      <TextInput
        value={label}
        onChangeText={(label) => setLabel(label)}
        placeholder="Enter Product Label"
      />
      <TextInput
        value={price}
        onChangeText={(price) => setPrice(price)}
        placeholder="Enter Price "
      />
      <TextInput
        value={quantity}
        onChangeText={(quantity) => setQuantity(quantity)}
        placeholder="Enter Quantity"
      />
      <Button
        onPress={() => {
          dispatch(
            addProduct({
              id: JSON.stringify(Random.getRandomBytes(10)),
              price: parseInt(price),
              No: parseInt(quantity),
              name: label,
            })
          );
        }}
      >
        Add to list
      </Button>
      <View style={styles.separator} />
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
    width: "100%",
  },
});
