import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { hp, wp } from 'helpers/common';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HeartIcon } from 'react-native-heroicons/solid';
import { urlFor } from 'services/sanity';

const PostCard = ({ item }) => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('PostDetail', { post: item })}>
      <Image source={{ uri: urlFor(item?.mainImage).url() }} style={styles.image} />
      <LinearGradient
        // Background Linear Gradient
        colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.gradient}
      />
      <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)} style={styles.favorite}>
        <HeartIcon size={wp(5)} color={isFavorite ? 'red' : 'white'} />
      </TouchableOpacity>

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    width: wp(45),
    height: hp(30),
    overflow: 'hidden',
    marginBottom: hp(2),
    justifyContent: 'flex-end',
    padding: wp(3),
    paddingVertical: wp(4),
    position: 'relative',
    elevation: 1,
  },
  image: {
    width: wp(44),
    height: hp(30),
    borderRadius: 20,
    position: 'absolute',
  },
  gradient: {
    width: wp(44),
    height: hp(15),
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  favorite: {
    position: 'absolute',
    top: wp(1.5),
    right: wp(3),
    zIndex: 1,
    padding: wp(2),
    borderRadius: 9999,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  title: {
    color: 'white',
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontSize: wp(3),
  },
});
