import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Receipt21, Clock, Message} from 'iconsax-react-native';
import FastImage from 'react-native-fast-image';
import { fontType, colors } from '../theme';

const truncateTextByWords = (text, maxWords) => {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + ' ...';
  }
  return text;
}

const Itemprogram = ({item, onPress, variant}) => {
  return (
    <TouchableOpacity style={styles.cardItem} onPress={()=>navigation.navigate('BlogDetail', {blogId: item.id})}>
        <FastImage
          style={styles.cardImage}
          source={{
            uri: item.image,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}>
          <View style={styles.cardContent}>
            <View style={styles.cardCategory}>
            <View style={styles.cardi}>
                <Text style={{ color: colors.white() }}>{item.createdAt}</Text>
                <Text style={{ color: colors.white() }}>{item.title}</Text>
            </View>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryLabel}>{item.category}</Text>
              </View>
            </View>
            <View>
            </View>
          </View>
        </FastImage>
      </TouchableOpacity>
  );
};
export default Itemprogram;

const styles = StyleSheet.create({
  cardItem: {
    backgroundColor: colors.black(0.03),
    borderRadius: 15,
  },
  cardImage: {
    width: '100%',
    height: 165,
    borderRadius: 15,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.6),
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
  cardCategory: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  categoryBadge: {
    backgroundColor: colors.darkModeBlue(),
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    left:60,
  },
  categoryBadge1: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
categoryLabel: {
    fontSize: 20,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.white(),
  },
  categoryLabel1: {
    fontSize: 20,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.white(),
  },
  blogTitle:{
    fontSize: 16,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
});