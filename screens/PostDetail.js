import { hp, wp } from 'helpers/common';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';

import { urlFor } from 'services/sanity';

const PostDetail = ({ route, navigation }) => {
  const { post } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: urlFor(post?.mainImage).url() }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: wp(100),
    height: hp(30),
  },
});

export default PostDetail;
