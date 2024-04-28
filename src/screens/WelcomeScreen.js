import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View className="flex flex-1 justify-end">
      {/* background image */}
      <Image source={require('../../assets/welcome.jpg')} className="absolute h-full w-full" />

      {/* content & gradient */}
      <View className="space-y-8 p-5 pb-10">
        <LinearGradient
          // Background Linear Gradient
          colors={['transparent', 'rgba(79, 53, 19, 0.5)']}
          className="absolute "
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={{ width: wp(100), height: hp(50) }}
        />
        <View className="space-y-3">
          <Text className="text-5xl font-bold text-white" style={{ fontSize: wp(10) }}>
            Traveling made easy!
          </Text>
          <Text className="font-medium text-neutral-200 " style={{ fontSize: wp(4) }}>
            Experience the world's best adventure around the world with us
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className="mx-auto rounded-full bg-orange-500 p-3 px-12">
          <Text className="font-bold text-white" style={{ fontSize: wp(5.5) }}>
            Let's go!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
