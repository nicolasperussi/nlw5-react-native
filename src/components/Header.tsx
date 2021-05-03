import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import colors from "../styles/colors";
import userImg from "../assets/pp.jpg";
import fonts from "../styles/fonts";
import AsyncStorage from "@react-native-async-storage/async-storage";
export function Header() {
  const [username, setUsername] = useState<string>();

  useEffect(() => {
    async function loadUsername() {
      const user = await AsyncStorage.getItem("@plantmanager:user");
      setUsername(user || "");
    }

    loadUsername();
  }, [username]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.username}>{username}!</Text>
      </View>

      <Image style={styles.image} source={userImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingTop: Number(StatusBar.currentHeight) * 1.5,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  username: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
});
