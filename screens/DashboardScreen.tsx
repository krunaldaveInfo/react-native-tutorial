import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {Button, FlatList, SafeAreaView, Text, View} from 'react-native';

export function DashboardScreen({navigation}): React.JSX.Element {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: undefined,
    })
      .then(response => setProfiles(response.data))
      .catch(error => console.log(error));
  }, []);

  //   const renderItemRow = useCallback(({item}) => {}, []);
  function rendorProfileData() {
    return (
      <FlatList
        data={profiles}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item?.title}</Text>
            </View>
          );
        }}
      />
    );
  }
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row'}}>
        <Text>Dashboard</Text>
        <Button
          title="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
      {rendorProfileData()}
    </SafeAreaView>
  );
}
