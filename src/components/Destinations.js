import React from 'react';
import { View } from 'react-native';

import DestinationCard from './DestinationCard';

import { destinations } from '~/constants';

const Destinations = () => {
  return (
    <View className="mx-4 flex-row flex-wrap justify-between">
      {destinations.map((destination, index) => (
        <DestinationCard item={destination} key={index} />
      ))}
    </View>
  );
};

export default Destinations;
