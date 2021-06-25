import * as React from "react";
import { FlatList, StyleSheet, ListRenderItem } from "react-native";
import { View } from "../../components/Themed";
import { useSelector } from "react-redux";
import { Divider, Text } from "react-native-paper";

import { Product } from "./../../store/reducers/product/state";
import { commonStyles } from "../commonStyle";
export default function TabTwoScreen() {
  const productList = useSelector((state: any) => state.products.productList);
  const billingState = useSelector((state: any) => state.products.billingState);
  const user = useSelector((state: any) => state.user);
  const discountRate = 3.0;
  const priceNoTax = () => {
    var total = 0;
    if (!productList) {
      return 0;
    }
    productList.map((p: Product) => (total = total + p.price * p.No));
    return total;
  };
  const discount = () => {
    return (discountRate * priceNoTax()) / 1000;
  };
  const tax = () => {
    return (billingState.tax * (priceNoTax() - discount())) / 100;
  };
  const totalPrice = () => {
    return priceNoTax() - discount() + tax();
  };
  const renderItem: ListRenderItem<Product> = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Divider />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <Divider style={[commonStyles.fullWidth, styles.color]} />
      <FlatList
        data={productList as [Product]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View>
        <Text style={styles.padding}>
          Text price without tax: $ {priceNoTax().toFixed(2)}
        </Text>
        <Text style={styles.padding}>
          Discount {discountRate}%: ${discount().toFixed(2)}
        </Text>
        <Text style={styles.padding}>
          Tax {billingState.tax}%: ${tax().toFixed(2)}
        </Text>
        <Text style={styles.padding}>
          Total price: ${totalPrice().toFixed(2)}{" "}
        </Text>
      </View>
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
  padding: { padding: 10 },
  color: { backgroundColor: "red" },
});
