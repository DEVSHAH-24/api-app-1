import { useEffect, useState } from "react";
import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
const url = "https://catfact.ninja/fact";

export default function App() {
  const [data, setData] = useState("Please wait!");
  const [isLoadingData, setisLoadingData] = React.useState(false);
  

  function callonClick() {
    fetch(url)
      .then((response) =>
        response != null ? response.json() : "Check your network"
      )
      .then((r) => {
        setData(r);

        //  setisLoadingData(false);
      });
  }
  useEffect(() => {
    callonClick();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.factStyle}>
        <Text style={styles.factText}>{data.fact + " " + data.length}</Text>
      </View>
      <View style={styles.buttonView}>
        <Button
          style={styles.button}
         
          title="Refresh"
          onPress={callonClick}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  factStyle: {
    marginTop: 100,

    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 12,
    elevation: 50,
    shadowColor: "red",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  factText: {
    fontFamily: "Comic Sans MS",
    fontSize: 25,
    fontWeight: "bold",
  },
  button: {
    borderRadius: 25,
    shadowColor: "blue",
    borderColor: "yellow",
    color: "red",
    fontSize: 25

  },
  buttonView: {
    paddingTop: 45,
  }
});
