import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getPostsByOption } from 'services/api';

const Posts = ({ activeOption }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['post', activeOption],
    queryFn: () => getPostsByOption(activeOption),
  });

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;
  console.log(data);
  return (
    <View>
      {data.map((post) => (
        <View key={post._id}>
          <Text>{post.title}</Text>
          <Text>{post.description}</Text>
          {/* Render other post properties here */}
        </View>
      ))}
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({});
