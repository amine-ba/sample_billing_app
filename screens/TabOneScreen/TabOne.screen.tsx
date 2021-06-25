import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import * as Random from "expo-random";
import TextInput from "./../../components/TextInput";
import { Text, View } from "../../components/Themed";
import { commonStyles } from "../commonStyle";
import { useDispatch } from "react-redux";
import { addProduct, updateState } from "./../../store/actions/product";
import { Picker } from "@react-native-picker/picker";

export default function TabOneScreen() {
  const [label, setLabel] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [selectedState, setSelectedState] = useState(0);
  const [pickerVisible, setPickerVisible] = useState(false);
  const dispatch = useDispatch();
  const statesList = [
    { name: "LA", tax: "4" },
    { name: "TA", tax: "5" },
  ];
  return (
    <View>
      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
          },
          commonStyles.fullWidth,
        ]}
      >
        <Text style={[styles.title, { textAlign: "left" }]}>Add Product</Text>
        <Text
          style={[
            styles.title,
            commonStyles.fullWidth,
            { textAlign: "right", position: "absolute" },
          ]}
        >
          State Selected {statesList[selectedState].name}
        </Text>
      </View>

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
              price: parseInt(price, 10),
              No: parseInt(quantity, 10),
              name: label,
            })
          );
        }}
      >
        Add to list
      </Button>
      <Picker
        selectedValue={selectedState}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedState(itemIndex);
          dispatch(updateState(statesList[itemIndex]));
        }}
      >
        {statesList.map((state, index) => (
          <Picker.Item key={index} label={state.name} value={index} />
        ))}
      </Picker>
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
