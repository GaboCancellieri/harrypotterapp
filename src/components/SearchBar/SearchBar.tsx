import React, { useEffect } from "react";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { colors } from '../../utils/theme';

interface Props {
  placeholder: string,
  value: string,
  onChange: (text: string) => void,
}

const SearchBar = ({ placeholder, value, onChange }: Props) => {
return (
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.searchSection}>
            <MaterialIcon style={styles.searchIcon} name="search" size={20} color={colors.griffindorRed} />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
            />
        </TouchableOpacity>
      </View>
  );
};

export default SearchBar;
