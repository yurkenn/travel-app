import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { sortCategories } from '~/constants';
import { theme } from '~/theme';

const SortCategories = () => {
  const [activeSort, setActiveSort] = useState('Popular');
  return (
    <View className="mx-4 flex-row items-center justify-around  gap-x-2 rounded-full bg-neutral-100 p-2 px-4">
      {sortCategories.map((sort, index) => {
        const isActive = sort === activeSort;
        const activeButtonClass = isActive ? 'bg-white shadow' : '';

        return (
          <TouchableOpacity
            onPress={() => setActiveSort(sort)}
            key={index}
            className={`flex rounded-full p-3 px-4 ${activeButtonClass}`}>
            <Text
              className="font-semibold "
              style={{ fontSize: wp(4), color: isActive ? theme.text : 'rgba(0,0,0,0.6)' }}>
              {sort}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SortCategories;

const styles = StyleSheet.create({});
