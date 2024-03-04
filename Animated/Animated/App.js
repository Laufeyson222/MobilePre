import React, { useRef } from 'react';
import { Animated, View, Image, TouchableOpacity, StyleSheet,Text} from 'react-native';

const App = () => {
  const animatedValue = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const moveLeft = () => {
    Animated.timing(animatedValue.x, {
      toValue: -100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const moveRight = () => {
    Animated.timing(animatedValue.x, {
      toValue: 100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const moveUp = () => {
    Animated.timing(animatedValue.y, {
      toValue: -100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const moveDown = () => {
    Animated.timing(animatedValue.y, {
      toValue: 100,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [
            { translateX: animatedValue.x },
            { translateY: animatedValue.y },
          ],
        }}
      >
        <Image
          source={require('./assets/image.png')}
          style={{ width: 100, height: 100 }}
        />
      </Animated.View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={moveLeft} style={styles.button}>
          <Text>Left</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={moveRight} style={styles.button}>
          <Text>Right</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={moveUp} style={styles.button}>
          <Text>Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={moveDown} style={styles.button}>
          <Text>Down</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
  },
});

export default App;