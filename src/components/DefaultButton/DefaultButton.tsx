import React from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";
import { colors } from "../../utils/theme";
import Typography from "../Typography";

import styles from './styles';

interface Props {
  additionalStyle?: ViewStyle;
  color?: string;
  onPress: () => void;
  text: string;
  textSize?: number;
  variant?: 'primary' | 'secondary';
}

const buttonTextColors = {
  primary: colors.griffindorRed,
  secondary: colors.griffindorYellow,
}

const DefaultButton = ({
  additionalStyle,
  onPress,
  text,
  textSize = 18,
  variant = 'primary',
}: Props) => {


  return (
      <TouchableOpacity style={[styles.mainContainer, styles[variant], additionalStyle ]} onPress={onPress}>
        <Typography
        color={buttonTextColors[variant]}
        size={textSize}
        variant='medium'
        >{text}</Typography>
      </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyle: {},
  textSize: 18,
  variant: 'primary',
}

export default DefaultButton;
