import React from 'react';
import { Text } from 'react-native';
import { styles } from "./Style"

export const PhoneText = (props: { phone: number }) => {
    if (props.phone)
        return <Text style={styles.phoneText}>{props.phone}</Text>;
    else return null;
};