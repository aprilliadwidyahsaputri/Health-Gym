import { StyleSheet, Text, View, ScrollView, FlatList, Animated, TouchableWithoutFeedback, ActivityIndicator, RefreshControl } from 'react-native';
import React, { useRef, useState, useCallback } from 'react';
import { BlogList } from '../../../data';
import { ItemSmall } from '../../components';
import { SearchNormal1 } from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

const data = [
  { id: 1, label: 'Klasik' },
  { id: 2, label: 'Kurangi Berat' },
  { id: 3, label: 'Membangun otot' },
  { id: 4, label: 'Membentuk tubuh' },
  { id: 5, label: 'Seluruh tubuh' },
];

const ItemRecent = ({ item }) => {
  return (
    <View style={recent.button}>
      <Text style={recent.label}>{item.label}</Text>
    </View>
  );
};
const FlatListRecent = () => {
  const renderItem = ({ item }) => {
    return <ItemRecent item={item} />;
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({ ...item })}
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
const Discover = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const getDataBlog = async () => {
    try {
      const response = await axios.get(
        'https://656e7eb3fc2ddab8389a9e24.mockapi.io/discover',
      );
      setBlogData(response.data);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getDataBlog()
      setRefreshing(false);
    }, 1500);
  }, []);

  useFocusEffect(
    useCallback(() => {
      getDataBlog();
    }, [])
  );
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
  const recentY = diffClampY.interpolate({
    inputRange: [0, 142],
    outputRange: [0, -142],
    extrapolate: 'clamp',
  });
  const recentBlog = BlogList.slice(5);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("SearchPage")}>
        <View style={styles.header}>
          <View style={styles.bar}>
            <SearchNormal1 size={18} color={colors.grey(0.5)} variant="Linear" />
            <Text style={styles.placeholder}>Search</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View>
        <Animated.View style={[recent.container, { transform: [{ translateY: recentY }] }]}>
          <Text style={recent.text}>Recent Search</Text>
          <FlatListRecent />
        </Animated.View>
      </View>
      <Animated.ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        contentContainerStyle={{ paddingTop: 142 }}>
        <View style={styles.listCard}>
          {loading ? (
            <ActivityIndicator size={'large'} color={colors.blue()} />
          ) : (
            blogData.map((item, index) => (
              <ItemSmall item={item} key={index} />
            ))
          )}
        </View>
      </Animated.ScrollView>
    </View>
  );
};
export default Discover;
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
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    top: 0,
    zIndex: 1000,
    right: 0,
    left: 0,
    backgroundColor: colors.white(),
  },
  bar: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    alignItems: 'center',
    backgroundColor: colors.grey(0.05),
    borderRadius: 10,
    flex: 1,
  },
  placeholder: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.5),
    lineHeight: 18,
  },
});
const recent = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    borderColor: colors.grey(0.15),
    borderWidth: 1,
    backgroundColor: colors.grey(0.03),
  },
  label: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.65),
  },
  text: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    paddingVertical: 5,
    paddingHorizontal: 24,
  },
  container: {
    position: 'absolute',
    backgroundColor: colors.white(),
    zIndex: 999,
    top: 52,
    left: 0,
    right: 0,
    elevation: 1000,
  },
});