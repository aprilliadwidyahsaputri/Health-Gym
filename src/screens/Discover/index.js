import {StyleSheet, Text, View, ScrollView, FlatList,StatusBar} from 'react-native';
import React from 'react';
import {BlogList} from '../../../data';
import {ItemSmall} from '../../components'; 
import {Notification,User,SearchNormal1,MenuBoard,Radar,Sagittarius } from 'iconsax-react-native';
import { fontType, colors } from '../../theme';

const Itemexercise = ({item}) => {
  return (
    <View style={exercise.button}>
      <Text style={exercise.label}>{item.label}</Text>
    </View>
  );
};
const FlatListexercise = () => {
  const renderItem = ({item}) => {
    return <Itemexercise item={item} />;
  };
  return (
    <FlatList
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 24, paddingVertical: 10}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
const Latihan = () => {
  const recentBlog = BlogList.slice(5);
  return (
<View style={styles.container}>
      <View style={styles.header}>
       <StatusBar translucent={false} backgroundColor={colors.darkModeBlue()}/> 
        <Text style={{...styles.title}}>Latihan</Text>
        <SearchNormal1 color={colors.black()} variant="Linear" size={24} />
      </View>
      <View>
        <Text style={exercise.text}>Simple Workouts At Home</Text> 
        <FlatListexercise />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listCard}>
          {recentBlog.map((item, index) => (
            <ItemSmall item={item} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
export default Latihan;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingBottom: 10,
    gap: 10,
  },
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
    
  },
  bar: {
    flexDirection: 'row',
    padding: 20,
    gap: 10,
    alignItems: 'center',
    backgroundColor: colors.grey(0.05),
    borderRadius: 10,
    flex: 1,
  },
  placeholder: {
    fontSize: 15,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.5),
    lineHeight: 18,
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
const exercise = StyleSheet.create({
  label: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.65),
  },
  text: {
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    paddingVertical: 10,
    paddingHorizontal: 78,
    backgroundColor: colors.darkModeBlue(0.10),
  },
});