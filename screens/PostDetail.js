import { Ionicons } from '@expo/vector-icons';
import CustomPortableText from 'components/PortableText';
import { hp, wp } from 'helpers/common';
import { useLayoutEffect } from 'react';
import { StyleSheet, View, Dimensions, Platform, TouchableOpacity } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import { urlFor } from 'services/sanity';

const { width } = Dimensions.get('window');
const IMG_HEIGHT = hp(50);

const PostDetail = ({ route, navigation }) => {
  const { post } = route.params;
  const scrollRef = useAnimatedRef();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0],
            [IMG_HEIGHT / 4, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-IMG_HEIGHT, 0, IMG_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, IMG_HEIGHT / 1.5], [0, 1]),
    };
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: '',
      headerBackTitleVisible: false,
      headerBackImage: () => null,
      headerRight: () => (
        <View style={styles.bar}>
          <TouchableOpacity style={styles.roundButton}>
            <Ionicons name="share-outline" size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton}>
            <Ionicons name="heart-outline" size={22} color="black" />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[styles.roundButton, { marginLeft: wp(2) }]}>
          <Ionicons name="chevron-back" size={22} color="black" />
        </TouchableOpacity>
      ),
      headerBackground: () => <Animated.View style={[styles.header, headerAnimatedStyle]} />,
    });
  }, [headerAnimatedStyle, navigation]);

  return (
    <View style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.Image
          sharedTransitionTag={post._id}
          source={{ uri: urlFor(post?.mainImage).url() }}
          style={[styles.image, imageAnimatedStyle]}
        />
        <View style={styles.innerContainer}>
          <CustomPortableText blocks={post.body} />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width,
    height: IMG_HEIGHT,
  },
  innerContainer: {
    padding: wp(5),
  },
  header: {
    backgroundColor: '#fff',
    height: Platform.OS === 'ios' ? hp(13) : hp(11),
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundButton: {
    marginRight: wp(2),
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
  },
});

export default PostDetail;
