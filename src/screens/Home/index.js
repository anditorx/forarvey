import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap, Header, ProductCard} from '../../components';
import {colors, fonts, formatRupiah} from '../../utils';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header type="header-homescreen" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Rumah Tangga */}
        <View style={styles.wrapperSlider}>
          <Text style={styles.txtTitleWrapper}>Rumah Tangga</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.slider}>
            <Gap width={24} />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={{
                uri: `https://www.carolinafarmstewards.org/wp-content/uploads/2017/11/IMG-9844.jpg`,
                // uri: `${API_HOST.base_url}/storage/${item.picture_path}`,
              }}
              name="Test"
              price={formatRupiah(20000)}
            />
            <Gap width={20} />
          </ScrollView>
        </View>
        {/* Masak */}
        <View style={styles.wrapperSlider}>
          <Text style={styles.txtTitleWrapper}>Masak</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.slider}>
            <Gap width={24} />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={{
                uri: `https://www.carolinafarmstewards.org/wp-content/uploads/2017/11/IMG-9844.jpg`,
                // uri: `${API_HOST.base_url}/storage/${item.picture_path}`,
              }}
              name="Test"
              price={formatRupiah(20000)}
            />
            <Gap width={20} />
          </ScrollView>
        </View>
        {/* Elektronik */}
        <View style={styles.wrapperSlider}>
          <Text style={styles.txtTitleWrapper}>Elektronik</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.slider}>
            <Gap width={24} />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={{
                uri: `https://www.carolinafarmstewards.org/wp-content/uploads/2017/11/IMG-9844.jpg`,
                // uri: `${API_HOST.base_url}/storage/${item.picture_path}`,
              }}
              name="Test"
              price={formatRupiah(20000)}
            />
            <Gap width={20} />
          </ScrollView>
        </View>
        {/* ATK */}
        <View style={styles.wrapperSlider}>
          <Text style={styles.txtTitleWrapper}>Alat Tulis Kantor</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.slider}>
            <Gap width={24} />
            <ProductCard
              onPress={() => navigation.navigate('ProductDetail')}
              image={{
                uri: `https://www.carolinafarmstewards.org/wp-content/uploads/2017/11/IMG-9844.jpg`,
                // uri: `${API_HOST.base_url}/storage/${item.picture_path}`,
              }}
              name="Test"
              price={formatRupiah(20000)}
            />
            <Gap width={20} />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },

  wrapperSlider: {backgroundColor: colors.white, height: 250},
  slider: {
    flexDirection: 'row',
  },
  txtTitleWrapper: {
    paddingHorizontal: 24,
    paddingBottom: 5,
    fontFamily: fonts.mediumPoppins,
    fontSize: 17,
  },
});
