import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const InstructionText = ({ content, style }) => {
  return <Text style={[styles.instructionText, style]}>{content}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500x,
    fontSize: 24,
  },
});
