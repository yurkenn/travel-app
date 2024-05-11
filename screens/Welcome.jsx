import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { hp, wp } from 'helpers/common';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/welcome.jpg')} />

      {/* content */}
      <View style={styles.contentContainer}>
        <LinearGradient
          // Background Linear Gradient
          colors={['transparent', 'rgba(79, 53, 19, 0.5)']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.gradient}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Traveling made easy!</Text>
          <Text style={styles.text2}>
            Experience the world's best adventure around the world with us
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Let's go!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    width: wp(100),
    height: hp(100),
    position: 'absolute',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 30,
  },
  gradient: {
    position: 'absolute',
    width: wp(100),
    height: hp(50),
  },
  textContainer: {
    marginBottom: 24,
  },
  text1: {
    fontSize: wp(8),
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  text2: {
    fontSize: wp(4),
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#FF5733',
    borderRadius: wp(3),
    padding: wp(3),
    paddingHorizontal: wp(12),
  },
  buttonText: {
    fontSize: wp(5.5),
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
