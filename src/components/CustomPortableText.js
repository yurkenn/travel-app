import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PortableText from 'react-portable-text';
const CustomPortableText = ({ blocks }) => {
  console.log('blocks', blocks);
  return (
    <View>
      <PortableText
        content={blocks}
        serializers={{
          h1: ({ children }) => <Text style={styles.h1}>{children}</Text>,
          li: ({ children }) => <Text style={styles.li}>{children}</Text>,
          p: ({ children }) => <Text style={styles.p}>{children}</Text>,
          normal: ({ children }) => (
            <Text
              style={{
                ...styles.normal,
                fontSize: wp(4),
              }}>
              {children}
            </Text>
          ),
        }}
      />
    </View>
  );
};

export default CustomPortableText;

const styles = StyleSheet.create({});
