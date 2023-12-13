import { ScrollView, StyleSheet, StatusBar, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Setting2, User, SearchNormal1, MenuBoard, Radar, Sagittarius, Activity, BookSquare, Brodcast, ChartFail, Cup, Flash, Edit } from 'iconsax-react-native';
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState, useEffect, useRef } from 'react';
import FastImage from 'react-native-fast-image';
import { ProfileData, BlogList } from '../../../data';
import { ItemSmall } from '../../components';
import { fontType, colors } from '../../theme';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionSheet from 'react-native-actions-sheet';
import { formatDate } from '../../utils/formatDate';


const Profile = () => {
  const navigation = useNavigation();
  const [profileData, setProfileData] = useState(null);
  const actionSheetRef = useRef(null);
  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };
  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };
  useEffect(() => {
    const user = auth().currentUser;
    const fetchProfileData = () => {
      try {
        const user = auth().currentUser;
        if (user) {
          const userId = user.uid;
          const userRef = firestore().collection('users').doc(userId);

          const unsubscribeProfile = userRef.onSnapshot(doc => {
            if (doc.exists) {
              const userData = doc.data();
              setProfileData(userData);
            } else {
              console.error('Dokumen pengguna tidak ditemukan.');
            }
          });

          return () => {
            unsubscribeProfile();
          };
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchProfileData();
  }, []);
  const handleLogout = async () => {
    try {
      closeActionSheet();
      await auth().signOut();
      await AsyncStorage.removeItem('userData');
      navigation.replace('Login');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StatusBar translucent={false} backgroundColor={colors.darkModeBlue()} />
        <TouchableOpacity onPress={openActionSheet}>
          <Setting2 color={colors.black()} variant="Linear" size={24} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          gap: 10,
          paddingVertical: 20,
        }}>
        <View style={{ gap: 15, alignItems: 'center' }}>
          <FastImage
            style={profile.pic}
            source={{
              uri: profileData?.photoUrl,
              headers: { Authorization: 'someAuthToken' },
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={{ gap: 5, alignItems: 'center' }}>
            <Text style={profile.name}>{profileData?.fullName}</Text>
            <Text style={profile.info}>
              Member since {formatDate(profileData?.createdAt)}
            </Text>
          </View>
          <TouchableOpacity style={profile.buttonEdit}>
            <Text style={profile.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <Text style={{ ...styles.title2 }}>PENGATURAN</Text>
          <View style={styles.bar}>
            <Flash color={colors.black()} variant="Linear" size={24} style={styles.Icon} />
            <Text style={{ ...styles.title1 }}>Daftar Premium</Text>
          </View>
          <View style={styles.bar}>
            <Activity color={colors.black()} variant="Linear" size={24} style={styles.Icon} />
            <Text style={{ ...styles.title1 }}>Latihan Saya</Text>
          </View>
          <View style={styles.bar}>
            <BookSquare color={colors.black()} variant="Linear" size={24} style={styles.Icon} />
            <Text style={{ ...styles.title1 }}>Pilih Bahasa</Text>
          </View>
          <View style={styles.bar}>
            <Brodcast color={colors.black()} variant="Linear" size={24} style={styles.Icon} />
            <Text style={{ ...styles.title1 }}>Hubungkan Dengan Goggle Fit</Text>
          </View>
          <View style={styles.bar}>
            <Cup color={colors.black()} variant="Linear" size={24} style={styles.Icon} />
            <Text style={{ ...styles.title1 }}>Beri Kami Nilai</Text>
          </View>
          <View style={styles.bar}>
            <ChartFail color={colors.black()} variant="Linear" size={24} style={styles.Icon} />
            <Text style={{ ...styles.title1 }}>Masukan</Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate("AddBlog")}
      >
        <Edit color={colors.white()} variant="Linear" size={20} />
      </TouchableOpacity>
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
        indicatorStyle={{
          width: 100,
        }}
        gestureEnabled={true}
        defaultOverlayOpacity={0.3}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={handleLogout}>
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: colors.black(),
              fontSize: 18,
            }}>
            Log out
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={closeActionSheet}>
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: 'red',
              fontSize: 18,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </ActionSheet>
    </View>
  );
};

export default Profile;
const navigation = useNavigation();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    height: 42,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: colors.darkModeBlue(),

  },
  title2: {
    width: '100%',
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
    top: 5,

  },
  title1: {
    fontSize: 15,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
    top: 10,
    paddingLeft: 30,

  },
  container1: {
    backgroundColor: colors.white(),
  },
  header1: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: colors.darkModeBlue(),

  },
  bar: {
    width: '120%',
    height: 40,
    paddingLeft: 5,
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 15,
    marginTop: 1,
    left: 30,


  },
  Icon: {
    position: 'absolute',
    top: 10,
    left: 1,

  },
  floatingButton: {
    backgroundColor: colors.blue(),
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: colors.blue(),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
const profile = StyleSheet.create({
  pic: { width: 100, height: 100, borderRadius: 15 },
  name: {
    color: colors.black(),
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    textTransform: 'capitalize'
  },
  info: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(),
  },
  sum: {
    fontSize: 16,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
  },
  tag: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(0.5),
  },
  buttonEdit: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.grey(0.1),
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
  },

});