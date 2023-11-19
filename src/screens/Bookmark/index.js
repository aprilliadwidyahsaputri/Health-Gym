import {StyleSheet, Text, View, ScrollView, FlatList, Animated,StatusBar} from 'react-native';
import React, {useRef} from 'react';
import {Add,MenuBoard,Radar,User} from 'iconsax-react-native';
import {BlogList, Program} from '../../../data';
import { ItemBookmark, ItemSmall } from '../../components';
import { fontType, colors } from '../../theme';
const Programolg = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <StatusBar translucent={false} backgroundColor={colors.darkModeBlue()}/>
        <Text style={styles.title}>PROGRAM</Text>
        <Add color={colors.black()} variant="Linear" size={24} />
      </View>
      <Text style={{...styles.title1}}>Sedang Berlangsung</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal:24, gap:10, paddingVertical:10}}>
        {BlogList.map((item, index) => (
          <ItemBookmark item={item} key={index} />
        ))}
        {/* <Text style={{...styles.title2}}>Semua Program</Text>
        {Program.map((item, index) => (
          <ItemSmall item={item} key={index} />
        ))} */}
        </View>
      </ScrollView>
    </View>
  );
};
export default Programolg;
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: colors.white(),
},
header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:52,
    elevation: 8,
    paddingTop:8,
    paddingBottom:4,
    backgroundColor: colors.darkModeBlue(),
    
},
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
    letterSpacing: -0.3,
    
  },
  title1: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
    letterSpacing: -0.3,
    left:20,
  },
  title2: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
    letterSpacing: -0.3,
  },
  container1: {
    backgroundColor: colors.white(),
  },
  header1: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:52,
    elevation: 8,
    paddingTop:8,
    paddingBottom:4,
    backgroundColor: colors.darkModeBlue(),

  },
});