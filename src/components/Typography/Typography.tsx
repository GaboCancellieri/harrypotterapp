import React, { ReactNode } from "react";
import { Text } from 'react-native';
import { colors } from "../../utils/theme";

interface Props {
  align?: 'left' | 'center' | 'right' | 'justify';
  children: ReactNode;
  color?: string;
  numberOfLines?: number;
  size?: number;
  variant?: string;
};

const getTextStyle = ({  align, color, size, variant }: Pick<Props, 'align' | 'color' | 'size' | 'variant'>) => {
  const textStyle = {
    color,
    fontSize: size,
    textAlign: align,
    fontFamily: 'harrypotter',
  };
  return textStyle;
};

const Typography = ({ align, children, color, numberOfLines, size, variant }: Props) => {
  const textStyle = getTextStyle({ align, color, size, variant });
  return (
    <Text allowFontScaling={ false } style={textStyle}>
      { children }
    </Text>
  );
};

Typography.defaultProps = {
  align: 'left',
  color: colors.black,
  size: 18
}

export default Typography;
