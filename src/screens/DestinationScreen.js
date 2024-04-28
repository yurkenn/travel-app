import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon, ClockIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/solid';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '~/theme';

const DestinationScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <View className="flex-1 bg-white ">
      {/** Destination Image */}
      <Image
        source={item.image}
        style={{
          width: wp(100),
          height: hp(55),
        }}
      />
      <StatusBar style="light" />
      {/** back button */}
      <SafeAreaView className="absolute w-full flex-row items-center justify-between pt-10">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
          className="ml-4 rounded-full p-2">
          <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsFavorite(!isFavorite)}
          style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
          className="mr-4 rounded-full p-2">
          <HeartIcon size={wp(7)} strokeWidth={4} color={isFavorite ? 'red' : 'white'} />
        </TouchableOpacity>
      </SafeAreaView>

      {/** Destination Info */}
      <View
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="-mt-14 flex flex-1 justify-between bg-white px-5 pt-8">
        <ScrollView showsVerticalScrollIndicator={false} className="space-y-5">
          <View className="flex-row items-start justify-between">
            <Text style={{ fontSize: wp(7) }} className="flex-1 font-bold text-neutral-700">
              {item.title}
            </Text>
            <Text style={{ fontSize: wp(7), color: theme.text }} className="font-semibold">
              {item.price}
            </Text>
          </View>
          <Text style={{ fontSize: wp(4) }} className="mb-2 mt-3 tracking-wide text-neutral-700">
            {item.longDescription}
          </Text>
          <View className="mx-2 flex-row justify-between pt-3">
            <View className=" flex-row items-start">
              <ClockIcon size={wp(7)} color="skyblue" />
              <View className="flex pl-2">
                <Text style={{ fontSize: wp(4.5) }} className="font-bold text-neutral-700">
                  {item.duration}
                </Text>
                <Text style={{ fontSize: wp(3.7) }} className="tracking-wide text-neutral-600">
                  Duration
                </Text>
              </View>
            </View>
            <View className="flex-row items-start space-x-2">
              <MapPinIcon size={wp(7)} color="red" />
              <View className="flex space-y-2  pl-2">
                <Text style={{ fontSize: wp(4.5) }} className="font-bold text-neutral-700">
                  {item.distance}
                </Text>
                <Text style={{ fontSize: wp(3.7) }} className="tracking-wide text-neutral-600">
                  Distance
                </Text>
              </View>
            </View>
            <View className="flex-row items-start space-x-2">
              <SunIcon size={wp(7)} color="orange" />
              <View className="flex space-y-2  pl-2">
                <Text style={{ fontSize: wp(4.5) }} className="font-bold text-neutral-700">
                  {item.weather}
                </Text>
                <Text style={{ fontSize: wp(3.7) }} className="tracking-wide text-neutral-600">
                  Sunny
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        {/**  Button */}
        <TouchableOpacity
          className="mx-auto mb-6 flex items-center justify-center rounded-full bg-orange-500 "
          style={{ height: wp(15), width: wp(50) }}>
          <Text className="font-bold text-white" style={{ fontSize: wp(5.5) }}>
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DestinationScreen;

const styles = StyleSheet.create({});
