import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import DestinationCard from './DestinationCard';

import useGetAllPosts from '~/hooks/useGetAllPosts';

const Destinations = () => {
  const { posts, loading, error } = useGetAllPosts();

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  console.log('posts', posts);

  return (
    <View className="mx-4 flex-row flex-wrap justify-between">
      {posts.map((item) => (
        <DestinationCard item={item} key={item._id} />
      ))}
    </View>
  );
};

export default Destinations;
