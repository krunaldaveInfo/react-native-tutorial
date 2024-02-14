import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

export function SplashScreen({navigation}): React.JSX.Element {
  // const navigation = useNavigation();

  const {getItem: getEmail, setItem: setEmail} = useAsyncStorage('email');
  const {getItem: getPass, setItem: setPass} = useAsyncStorage('password');
  useEffect(() => {
    async function checkForFirstOpen() {
      // You can await here
      const email = await getEmail();
      const password = await getPass();

      if (email && password) {
        navigation.navigate('Login');
      } else {
        navigation.navigate('SignUp');
      }
      console.log(email, password);
      // ...
    }
    checkForFirstOpen();
  });
  return (
    <SafeAreaView>
      <View>
        <Text>Splash</Text>
      </View>
    </SafeAreaView>
  );
}
