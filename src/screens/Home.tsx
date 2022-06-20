import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import TinderCard from '../components/TinderCard';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

export default function Home() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        translateY: translateY.value,
      },
    ],
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onActive: event => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    },
  });

  return (
    <View style={styles.main}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.animatedCard, cardStyle]}>
          <TinderCard
            name="Zuck"
            bio="No need to send me your nudes, I already saw them"
            img="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg"
          />
        </Animated.View>
      </PanGestureHandler>
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
  animatedCard: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  change: {},
});
