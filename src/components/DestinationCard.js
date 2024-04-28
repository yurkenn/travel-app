import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HeartIcon } from 'react-native-heroicons/solid';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const DestinationCard = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <TouchableOpacity
      style={{ width: wp(44), height: wp(65) }}
      className="relative mb-5 flex justify-end space-y-2 p-4 py-6">
      <Image
        source={item.image}
        style={{
          width: wp(44),
          height: wp(65),
          borderRadius: 20,
        }}
        className="absolute "
      />
      <LinearGradient
        // Background Linear Gradient
        colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
        className="absolute bottom-0 "
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{
          width: wp(44),
          height: hp(15),
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      />

      <TouchableOpacity
        onPress={() => setIsFavorite(!isFavorite)}
        style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
        className="absolute right-3 top-1 rounded-full p-3">
        <HeartIcon size={wp(5)} color={isFavorite ? 'red' : 'white'} />
      </TouchableOpacity>

      <Text style={{ fontSize: wp(4) }} className="font-semibold text-white">
        {item.title}
      </Text>
      <Text className="text-white" style={{ fontSize: wp(2.2) }}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );
};

export default DestinationCard;
