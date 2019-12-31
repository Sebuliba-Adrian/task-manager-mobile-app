import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const [name, setName] = useState("adrian");
  const [people, setPeople] = useState([
    { name: "shaun", key: "1" },
    { name: "yoshi", key: "2" },
    { name: "maria", key: "3" },
    { name: "luigi", key: "4" },
    { name: "peach", key: "5" },
    { name: "toad", key: "6" },
    { name: "bowser", key: "7" }
  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: "center",
    //justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24
  }
});
