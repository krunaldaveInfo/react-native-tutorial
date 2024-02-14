import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

export function ProfileScreen(): React.JSX.Element {
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');

  const {getItem: getFName} = useAsyncStorage('fname');
  const {getItem: getLName} = useAsyncStorage('lname');

  useEffect(() => {
    async function getData() {
      const nameF = await getFName();
      const nameL = await getLName();
      setfName(nameF || 'f name not found');
      setlName(nameL || 'l name not found');
    }

    getData();
  }, [fName, getFName, getLName, lName]);

  return (
    <SafeAreaView>
      <View>
        <Text>{fName}</Text>
        <Text>{lName}</Text>
      </View>
    </SafeAreaView>
  );
}
