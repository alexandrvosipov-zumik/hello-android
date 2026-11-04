import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function HomeScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Привет, мир!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  greeting: {fontSize: 28, fontWeight: '600', color: '#202124'},
});
