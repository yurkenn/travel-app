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

import CustomPortableText from '~/components/CustomPortableText';
import { urlFor } from '~/sanity';

const DestinationScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  console.log('item', item);
  return (
    <ScrollView className="flex-1 bg-white ">
      {/** Destination Image */}
      <Image
        source={{ uri: urlFor(item?.imageURL).url() }}
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
        {/**  Title */}
        <Text style={{ fontSize: wp(7) }} className="font-bold text-neutral-700">
          {item.title}
        </Text>

        {/**  Content */}
        <View>
          <CustomPortableText blocks={item.body} />
        </View>
        {/**  Button */}
        <TouchableOpacity
          className="mx-auto mb-6 flex items-center justify-center rounded-full bg-orange-500 "
          style={{ height: wp(15), width: wp(50) }}>
          <Text className="font-bold text-white" style={{ fontSize: wp(5.5) }}>
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DestinationScreen;

const styles = StyleSheet.create({});
