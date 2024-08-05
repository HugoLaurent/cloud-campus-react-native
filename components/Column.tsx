import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import style from "../style";

type Props = {
  children: React.ReactNode;
};

export default function Column({ children }: Props) {
  return <View style={style.column}>{children}</View>;
}

Column.propTypes = {
  children: PropTypes.node.isRequired,
};
