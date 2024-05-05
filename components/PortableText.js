import { wp } from 'helpers/common';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

const styles = StyleSheet.create({
  h1: {
    fontSize: wp(6),
    fontWeight: 'bold',
    color: 'black',
  },
  li: {
    fontSize: wp(4),
    color: 'black',
  },
  p: {
    fontSize: wp(4),
    color: 'black',
  },
  normal: {
    fontSize: wp(4),
    color: 'black',
  },
});
