import { useQuery } from '@tanstack/react-query';
import { wp } from 'helpers/common';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { getAllCategories } from 'services/api';
import { urlFor } from 'services/sanity';

const Category = () => {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });

  if (isLoading) {
    return <ActivityIndicator size="large" color="black" style={{ marginTop: 20 }} />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <Image source={{ uri: urlFor(category?.icon).url() }} style={styles.categoryImage} />

            <Text style={styles.categoryTitle}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  categoryItem: {
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 5,
  },
  categoryImage: {
    width: wp(20),
    height: wp(20),
  },
  categoryTitle: {
    marginTop: 5,
    fontSize: wp(3),
    fontWeight: 'medium',
    color: '#4d4d4d', // Adjust as per your design
  },
});

export default Category;
