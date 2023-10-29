import React, {useState} from 'react';
// import { ListHorizontal, ItemSmall } from './src/components';
import {ScrollView, StyleSheet,StatusBar,  Text , TextInput, View, TouchableOpacity, FlatList} from 'react-native';
import {Notification,User,SearchNormal1,MenuBoard,Radar,Sagittarius } from 'iconsax-react-native';
import {BlogList, CategoryList} from '../../../data';
import { fontType, colors } from '../../theme';
import { ListHorizontal, ItemSmall, ItemBookmark } from '../../components';    
export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
       <StatusBar translucent={false} backgroundColor={colors.darkModeBlue()}/>
        <Sagittarius color={colors.black()} variant="Linear" size={24} />  
        <Text style={{...styles.title}}>Health GYM</Text>
        <Notification color={colors.black()} variant="Linear" size={24} />
      </View>
      <View style={{ alignItems:'center' }}>
          <SearchNormal1 color={colors.black()} variant="Linear" size={24} style={styles.searchIcon} />
          <TextInput
            style={styles.searchbar}
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
          />
      </View>

      <Listblog/>
      <View style={styles.container1}>
  <View style={styles.header1}>
   <StatusBar translucent={false} backgroundColor={colors.darkModeBlue()}/>
   <MenuBoard color={colors.black()} variant="Linear" size={24} />  
    <Radar color={colors.black()} variant="Linear" size={24} />  
    <User color={colors.black()} variant="Linear" size={24} />
  </View>
  </View>
    </View>
  );
}
const Listblog = () => {
  const horizontalData = BlogList.slice(0, 5);
  const verticalData = BlogList.slice(5);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.listBlog}>
        <ListHorizontal data={horizontalData} />
        <View style={styles.listCategory}>
        <FlatListCategory />
      </View>
      <View style={{...styles.titleolg}}>
      <Text>Pilihan Populer</Text>
      </View>
        <View style={styles.listCard}>
          {verticalData.map((item, index) => (
            <ItemSmall item={item} key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
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
  },
  titleolg: {
    fontSize: 15,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
    marginHorizontal: 25,
    
    
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
  searchbar: {
    width: '80%',
    height: 40,
    borderColor: 'darkModeBlue',
    borderWidth: 2,
    borderRadius: 20,
    paddingLeft: 60,
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 15,
    marginTop: 10,
    
  },
  searchIcon: {
    position: 'absolute',
    top: 17,
    left: 50,
    
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
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal:5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
})
const ItemCategory = ({item, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={category.item}>
        <Text style={{...category.title, color}}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};
const FlatListCategory = () => {
  const [selected, setSelected] = useState(1);
  const renderItem = ({item}) => {
    const color = item.id === selected ? colors.blue() : colors.grey();
    return (
      <ItemCategory
        item={item}
        onPress={() => setSelected(item.id)}
        color={color}
      />
    );
  };
  return (
    <FlatList
      data={CategoryList}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 24}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
