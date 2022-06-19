import React from 'react';
import {StyleSheet, View} from 'react-native';
import TinderCard from '../components/TinderCard';

export default function Home() {
  return (
    <View style={styles.main}>
      <TinderCard
        name="Zuck"
        bio="No need to send me your nudes, I already saw them"
        img="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
});
