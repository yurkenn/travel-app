import { wp } from 'helpers/common';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Let's Discover</Text>
      <TouchableOpacity>
        <Image source={require('../assets/welcome.jpg')} style={styles.headerImage} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  headerText: {
    fontSize: wp(7),
    fontWeight: 'bold',
    color: '#4d4d4d', // Adjust color as needed
  },
  headerImage: {
    height: wp(12),
    width: wp(12),
  },
});
