import { StyleSheet } from "react-native";
export const commonStyles = StyleSheet.create({
  flexOne: {
    flex: 1,
    backgroundColor: "transparent",
    width: "90%",
  },
  alignSelfCenter: { alignSelf: "center" },
  alignItemsCenter: { alignItems: "center" },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  fullWidth: { width: "100%" },
  generalPadding: { paddingVertical: 10 },
  generalHorizontalPadding: { paddingHorizontal: 5 },
  flexRow: { flexDirection: "row" },
  alignTextLeft: { textAlign: "left", position: "absolute" },
  alignTextRight: { textAlign: "right", position: "absolute" },
});
