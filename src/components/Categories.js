import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { CategoriesData } from '~/constants';
import { theme } from '~/theme';
const Categories = () => {
  return (
    <View className="space-y-5">
      <View className="mx-5 flex-row items-center justify-between">
        <Text style={{ fontSize: wp(4) }} className="font-medium text-neutral-700">
          Categories
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: wp(4), color: theme.text }}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        className="space-x-5">
        {CategoriesData.map((category, index) => (
          <TouchableOpacity key={index} className="flex items-center space-y-2 p-4">
            <Image
              source={category.image}
              style={{ width: wp(20), height: wp(19) }}
              className="rounded-3xl "
            />

            <Text style={{ fontSize: wp(3) }} className="font-medium text-neutral-700">
              {category.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
