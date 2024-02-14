import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';

export function LoginScreen({navigation}): React.JSX.Element {
  const [email, setEmailData] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);
  const {getItem: getEmail, setItem: setEmail} = useAsyncStorage('email');
  const {getItem: getPass, setItem: setPass} = useAsyncStorage('password');

  async function verifyCred() {
    const storeEmail = await getEmail();
    const storePass = await getPass();

    console.log(storeEmail, storePass);
    if (storeEmail === email && storePass === password) {
      navigation.navigate('Dashboard');
    } else {
      setError(true);
    }
  }
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'column'}}>
        <TextInput
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmailData}
        />
        <TextInput
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
        />
        <Button
          title="Login"
          onPress={() => {
            verifyCred();
          }}
        />

        {error && <Text>Invalid Cred</Text>}
      </View>
    </SafeAreaView>
  );
}
