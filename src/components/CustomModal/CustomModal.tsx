import React from "react";
import { Image, Modal, Text, View, } from "react-native";
import { colors } from "../../utils/theme";
import DefaultButton from '../DefaultButton';
import Typography from "../Typography";

import styles from './styles';

interface Props {
  description: string;
  onPressPrimaryButton: () => void;
  onPressSecondaryButton?: () => void;
  primaryButtonText: string;
  secondaryButtonText?: string;
  title: string;
  variant: 'danger' | 'info' | 'success' | 'warning';
  visible: boolean;
}

const alertImage = {
  danger: 'https://image.flaticon.com/icons/png/512/1828/1828843.png',
  info: 'https://image.flaticon.com/icons/png/512/189/189664.png',
  success: 'https://image.flaticon.com/icons/png/512/190/190411.png',
  warning: 'https://image.flaticon.com/icons/png/512/497/497738.png',
}

const alertBackground = {
  danger: { backgroundColor: colors.lightRed },
  info: { backgroundColor: colors.lightBlue },
  success: { backgroundColor: colors.lightGreen },
  warning: { backgroundColor: colors.lightYellow },
}

const CustomModal = ({
  description,
  onPressPrimaryButton,
  onPressSecondaryButton,
  primaryButtonText,
  secondaryButtonText,
  title,
  variant,
  visible = false,
}: Props) => {
  return (
    <Modal animationType='fade' transparent visible={ visible }>
      <View style={styles.mainContainer } >
        <View style={[styles.subContainer, alertBackground[variant]]}>
          <Image
            resizeMode='contain'
            style={styles.image}
            source={{ uri: alertImage[variant]}}
          />
          <Typography color='black' size={40}>{title}</Typography>
          <Typography color='black' size={14}>{description}</Typography>
          <DefaultButton
            additionalStyle={{ height: 40 }}
            onPress={ onPressPrimaryButton }
            text={ primaryButtonText }
          />
          {(secondaryButtonText && onPressSecondaryButton) ? (
            <DefaultButton
              additionalStyle={{ height: 40 }}
              onPress={ onPressSecondaryButton }
              text={ secondaryButtonText }
              variant='secondary'
            />
          ) : null}
        </View>
      </View>
    </Modal>
  );
};

CustomModal.defaultProps = {
  onPressSecondaryButton: null,
  secondaryButtonText: '',
}

export default CustomModal;
