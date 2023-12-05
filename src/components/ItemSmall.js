// import {StyleSheet, Text, View, FlatList} from 'react-native';
// import FastImage from 'react-native-fast-image';
// import {Receipt21, Clock, Message} from 'iconsax-react-native';
// import React from 'react';
// import { fontType, colors } from '../theme';
// import {useNavigation} from '@react-navigation/native';

// const ItemSmall = ({item}) => {
//   const navigation = useNavigation();
//   return (
//     <TouchableOpacity style={styles.cardItemolg} onPress={() => navigation.navigate('BlogDetail', {blogId: item.id})}>
//       <FastImage
//         style={styles.cardImage}
//         source={{
//           uri: item.image,
//           headers: {Authorization: 'someAuthToken'},
//           priority: FastImage.priority.high,
//         }}
//         resizeMode={FastImage.resizeMode.cover}
//       >
//         <View style={styles.cardTitleolg}>
//         <Text style={{ color: colors.black() }}>{item.title}</Text>
//         <Text style={{ color: colors.black() }}>{item.createdAt}</Text>
//         </View>
//       </FastImage>
//       <View style={styles.cardContent}>
//         <View
//           style={{
//             flexDirection: 'row',
//             gap:40
//           }}>
//           <Text style={styles.cardTextolg}>{item.totalComments}</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default ItemSmall;
// const styles = StyleSheet.create({
//   listCard: {
//     paddingHorizontal: 24,
//     paddingVertical: 10,
//     gap: 15,
//   },
//   cardItemolg: {
//     backgroundColor: colors.blue(0.03),
//     flexDirection: 'row',
//     borderRadius: 10,
//   },
//   cardCategoryolg: {
//     color: colors.blue(),
//     fontSize: 10,
//     fontFamily: fontType['Pjs-SemiBold'],
//   },
//   cardTitleolg: {
//     fontSize: 15,
//     padding: 10,
//     paddingTop: 90,
//     fontFamily: fontType['Pjs-Bold'],
    
//   },
//   cardTextolg: {
//     fontSize: 10,
//     fontFamily: fontType['Pjs-Medium'],
//     color: colors.grey(0.6),
//   },
//   cardImage: {
//     width:350,
//     height: 150,
//     borderRadius: 10,
//     marginTop: 5,
//     // marginHorizontal: 1,
//     resizeMode: 'cover',
//   },
//   cardInfo: {
//     flexDirection: 'row',
//     gap: 5,
//     alignItems: 'center',
//   },
//   cardContent: {
//     gap: 10,
//     justifyContent: 'space-between',
//     paddingRight: 10,
//     paddingLeft: 15,
//     flex: 1,
//     paddingVertical: 10,
//   },
// });
import { TouchableOpacity } from 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Receipt21, Clock, Message} from 'iconsax-react-native';
import React from 'react';
import { fontType, colors } from '../theme';
import {useNavigation} from '@react-navigation/native';

const ItemSmall = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('BlogDetail', {blogId: item.id})}>
      <FastImage
        style={styles.cardImage}
        source={{
          uri: item?.image,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.cardContent}>
        <View
          style={{
            flexDirection: 'row',
            gap:30
          }}>
          <View style={{gap: 5, flex:1}}>
            {/* <Text style={styles.cardCategory}>{item?.category.name}</Text> */}
            <Text style={styles.cardTitle}>{item?.title}</Text>
          </View>
          <Receipt21
            color={colors.grey(0.6)}
            variant="Linear"
            size={20}
          />
        </View>
        <View style={styles.cardInfo}>
          <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
          <Text style={styles.cardText}>{item?.target}</Text>
          <Message
            size={10}
            variant="Linear"
            color={colors.grey(0.6)}
          />
          {/* <Text style={styles.cardText}>{item.totalComments}</Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemSmall;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    marginHorizontal: 20,
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