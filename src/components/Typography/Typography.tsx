import React, { ReactNode } from "react";
import { Text } from 'react-native';
import { colors } from "../../utils/theme";

const typographyVariant = {
  bold: 'Raleway-Bold',
  italic: 'Raleway-Bold',
  medium: 'Raleway-Medium',
  regular: 'Raleway-Regular',
}

interface Props {
  align?: 'left' | 'center' | 'right' | 'justify';
  children: ReactNode;
  color?: string;
  numberOfLines?: number;
  size?: number;
  variant?: keyof typeof typographyVariant;
  weight?: string;
};

const getTextStyle = ({  align, color, size, variant, weight }: Pick<Props, 'align' | 'color' | 'size' | 'variant' | 'weight'>) => {
  const textStyle = {
    color,
    fontSize: size,
    textAlign: align,
    fontFamily: typographyVariant[variant],
  };
  return textStyle;
};

const Typography = ({ align, children, color, numberOfLines, size, variant, weight }: Props) => {
  const textStyle = getTextStyle({ align, color, size, variant, weight });
  return (
    <Text allowFontScaling={ false } style={textStyle}>
      { children }
    </Text>
  );
};

Typography.defaultProps = {
  align: 'left',
  color: colors.black,
  size: 18,
  weight: '100',
}

export default Typography;
