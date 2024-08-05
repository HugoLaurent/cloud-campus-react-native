import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import style from "../style";

type Props = {
  children: React.ReactNode;
};

export default function Row({ children }: Props) {
  return <View style={style.row}>{children}</View>;
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
};
