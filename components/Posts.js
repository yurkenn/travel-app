import { useQuery } from '@tanstack/react-query';
import { wp } from 'helpers/common';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { getPostsByOption } from 'services/api';

import PostCard from './PostCard';

const Posts = ({ activeOption }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['post', activeOption],
    queryFn: () => getPostsByOption(activeOption),
  });

  if (isLoading)
    return <ActivityIndicator size="large" color="black" style={{ marginTop: wp(10) }} />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      {data.map((post) => (
        <View key={post._id}>
          <PostCard item={post} />
        </View>
      ))}
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(3),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
