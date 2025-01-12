import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const GuesLogItem = ({ roundNumber, guess }) => {
  return (
    <View>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess{guess}</Text>
    </View>
  );
};

export default GuesLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
  },
});
