import React from 'react';
import { Text, SafeAreaView, View, TextInput, Linking } from 'react-native';
import { PhoneText } from './Components';
import { GetPhoneNumber } from './Action';
import { styles } from './Style';
import { Button } from 'react-native-elements';

export default function App() {
  const [phoneNumber, onChangeNumber] = React.useState('1-855-XAMARIN');
  const [parsedPhone, Phone] = React.useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text>Enter PhoneWord:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={phoneNumber}
        />
        <View style={styles.buttonView}>
          <Button
            buttonStyle={styles.buttonView}
            title='Translate Result'
            onPress={() => {
              Phone(GetPhoneNumber(phoneNumber));
            }}
          />
        </View>
        <PhoneText phone={parsedPhone} />
        <View style={styles.buttonView}>
          <Button 
            buttonStyle={styles.buttonView}
            title='Get Call'
            onPress={() => {
              Linking.openURL(`tel:${parsedPhone}`);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}