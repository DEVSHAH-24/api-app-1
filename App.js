import { useEffect, useState } from "react";
import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const url = "https://catfact.ninja/fact";

export default function App() {
  const [data, setData] = useState("Please wait!");
  const [isLoadingData, setisLoadingData] = React.useState(false);
  var [isPress, setIsPress] = React.useState(false);

  var clickProps = {
    activeOpacity: 1,
    underlayColor: "blue",
    borderRadius: 25,
    // backgroundColor: 'red',
    style: isPress ? styles.buttonPress : styles.buttonNormal,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
   // alignItems: "center",
  //  justifyContent: "center",
  };



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
        <Text style={{ ...styles.factText, fontWeight: "900" }}>
          {" "}
          A random cat fact{" "}
        </Text>
      </View>
      <View style={styles.factStyle}>
        <Text style={styles.factText}>{data.fact + " " + data.length}</Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableHighlight onPress={callonClick} {...clickProps}>
          <Text
           // adjustsFontSizeToFit={true}
            style={{ textAlignVertical: "center", textAlign: "center" , color: 'white'}}
          >REFRESH</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
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
    fontSize: 25,
    fontWeight: "300",
  },
  button: {
    borderRadius: 25,
    shadowColor: "blue",
    borderColor: "yellow",
    color: "red",
    fontSize: 25,
  },
  buttonView: {
    paddingTop: 45,
  },
  buttonPress: {
    borderColor: "blue",
    borderWidth: 1,
    height: 30,
    width: 100,
    textAlign: "center",
    justifyContent: "center",
    textAlignVertical: "center",
  },
  buttonNormal: {
    borderColor: "blue",
    borderWidth: 1,
    backgroundColor: "red",
    height: 30,
    width: 100,
    justifyContent: "center",
    textAlignVertical: "center",
    // textAlign: "center",
  },
});
