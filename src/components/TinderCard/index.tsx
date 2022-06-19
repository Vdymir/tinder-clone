import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

interface Props {
  img: string;
  name: string;
  bio: string;
}

export default function TinderCard({img, name, bio}: Props) {
  return (
    <View style={styles.card}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: img,
        }}>
        <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: '75%',
    width: '90%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 10,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  bio: {
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 25,
  },
});
