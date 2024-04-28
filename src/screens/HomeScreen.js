import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Categories from '~/components/Categories';
import Destinations from '~/components/Destinations';
import SortCategories from '~/components/SortCategories';

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white pt-10">
      <ScrollView showsVerticalScrollIndicator={false} className="mt-3 space-y-6">
        {/* header */}
        <View className="mx-5 mb-10 flex-row items-center justify-between">
          <Text style={{ fontSize: wp(7) }} className="font-bold text-neutral-700">
            Let's Discover
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../assets/welcome-2.jpg')}
              style={{ height: wp(12), width: wp(12) }}
            />
          </TouchableOpacity>
        </View>

        {/* search bar */}
        <View className="mx-5 mb-4">
          <View className="flex-row items-center space-x-2 rounded-full bg-neutral-100 p-4 pl-6">
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput
              placeholder="Search for places"
              className="mb-1 flex-1 pl-1 text-base tracking-wider"
            />
          </View>
        </View>

        {/* categories */}
        <View className="mb-4 ">
          <Categories />
        </View>
        {/* sort categories */}
        <View className="mb-4 ">
          <SortCategories />
        </View>

        {/* destinations */}
        <View className="mb-4 ">
          <Destinations />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
