import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigate } from "react-router-native";
import { NavBarType } from "../../types/types";
import { useDispatch } from "react-redux";
import { handleOpenModal } from "../../slices/ui/uiSlice";

export const NavBar = ({ goBack = false, filter = false }: NavBarType) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.navbarText}>Notes App</Text>
      <View style={styles.shadow} />
      {goBack && (
        <Ionicons
          name="arrow-back-outline"
          size={30}
          style={styles.arrow}
          color={"#000"}
          onPress={() => navigate("/")}
        />
      )}
      {filter && (
        <Ionicons
          name="filter"
          size={30}
          style={styles.filter}
          color={"#000"}
          onPress={() => dispatch(handleOpenModal())}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    elevation: 5,
    overflow: "hidden",
  },
  navbarText: {
    fontSize: 21,
    fontWeight: "bold",
  },
  shadow: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 1.5,
    borderRadius: 10,
    backgroundColor: "#000000",
    opacity: 0.2,
    zIndex: -1,
  },
  arrow: {
    position: "absolute",
    left: 5,
  },
  filter: {
    position: "absolute",
    right: 5,
  },
});
