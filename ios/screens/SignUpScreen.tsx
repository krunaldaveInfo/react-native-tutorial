import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';
export function SignUpScreen({navigation}): React.JSX.Element {
  const [email, setEmailData] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [error, setError] = useState(false);
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const {setItem: setEmail} = useAsyncStorage('email');
  const {setItem: setPass} = useAsyncStorage('password');

  const {setItem: setFname} = useAsyncStorage('fname');
  const {setItem: setLname} = useAsyncStorage('lname');
  //   const {setItem:setFirstOpen} = useAsyncStorage('isFirstOpen');

  async function submitData() {
    if (!email || !password || !cPassword || password !== cPassword) {
      setError(true);
      return;
    }

    setError(false);

    await setEmail(email);
    await setPass(password);
    await setFname(fName);
    await setLname(lName);

    // await setFirstOpen('true');
    navigation.navigate('Login');
  }
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'column'}}>
        <TextInput
          placeholder="Enter First name"
          value={fName}
          onChangeText={setfName}
          textContentType="name"
        />
        <TextInput
          placeholder="Enter Last name"
          value={lName}
          onChangeText={setlName}
          textContentType="name"
        />
        <TextInput
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmailData}
          textContentType="emailAddress"
        />
        <TextInput
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          textContentType="password"
        />
        <TextInput
          placeholder="Confirm Password"
          value={cPassword}
          onChangeText={setCPassword}
          textContentType="password"
        />
        <Button
          title="Sign Up"
          onPress={() => {
            submitData();
          }}
        />

        {error && <Text>Invalid Data</Text>}
      </View>
    </SafeAreaView>
  );
}
