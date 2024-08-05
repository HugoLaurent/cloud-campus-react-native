import React from "react";
import { PropTypes } from "prop-types";
import { View, Text } from "react-native";
import style from "./../style";

export default function Box({ children }) {
  return (
    <View style={style.box}>
      <Text style={style.boxText}>{children}</Text>
    </View>
  );
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
};
