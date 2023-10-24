import {StyleSheet, Text, View, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Receipt21, Clock, Message} from 'iconsax-react-native';
import React from 'react';
import { fontType, colors } from '../theme';

const ItemSmall = ({item}) => {
  return (
    <View style={styles.cardItemolg}>
      <FastImage
        style={styles.cardImage}
        source={{
          uri: item.image,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      >
        <View style={styles.cardTitleolg}>
        <Text style={{ color: colors.white() }}>{item.title}</Text>
        <Text style={{ color: colors.white() }}>{item.createdAt}</Text>
        </View>
      </FastImage>
      <View style={styles.cardContent}>
        <View
          style={{
            flexDirection: 'row',
            gap:40
          }}>
          <Text style={styles.cardTextolg}>{item.totalComments}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemSmall;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItemolg: {
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategoryolg: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitleolg: {
    fontSize: 15,
    padding: 10,
    paddingTop: 90,
    fontFamily: fontType['Pjs-Bold'],
  },
  cardTextolg: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.6),
  },
  cardImage: {
    width:350,
    height: 150,
    borderRadius: 20,
    marginTop: 10,
    marginHorizontal: 25,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});