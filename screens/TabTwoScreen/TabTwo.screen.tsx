import * as React from "react";
import { FlatList, StyleSheet, ListRenderItem } from "react-native";
import { Text, View } from "../../components/Themed";
import { useSelector } from "react-redux";
import { Product } from "./../../store/reducers/product/state";
export default function TabTwoScreen() {
  const productList = useSelector((state: any) => state.products.productList);
  const billingState = useSelector((state: any) => state.products.billingState);
  const user = useSelector((state: any) => state.user);

  console.log(JSON.stringify(productList));
  const renderItem: ListRenderItem<Product> = ({ item }) => {
    return <Text>{item.name}</Text>;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={productList as [Product]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
