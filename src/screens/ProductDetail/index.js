import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {ICArrowBackWhiteSVG} from '../../assets';
import {Button, Counter, Gap, Header} from '../../components';
import {colors, fonts, formatRupiah} from '../../utils';

const ProductDetail = ({navigation}) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    onValueChange(value);
  }, []);

  const onValueChange = (value) => {
    setValue(value);
  };

  const onCount = (type) => {
    let result = value;
    if (type === 'plus') {
      console.log('add');
      result = value + 1;
    }
    if (type === 'minus') {
      console.log('min');
      if (value > 1) {
        result = value - 1;
      }
    }
    console.log(result);
    setValue(result);
    onValueChange(result);
  };

  return (
    <View style={styles.page}>
      <ImageBackground
        source={{
          uri: `https://www.carolinafarmstewards.org/wp-content/uploads/2017/11/IMG-9844.jpg`,
          // uri: `${API_HOST.base_url}/storage/${item.picture_path}`,
        }}
        style={styles.coverImg}>
        <Header type="header-detail" onPressBack={() => navigation.goBack()} />
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productCounter}>
            <View style={{width: '70%'}}>
              <Text style={styles.title}>Nama</Text>
              <Text style={styles.label}>Category</Text>
              <Text style={styles.label}>Stok</Text>
            </View>
            <View>
              <Counter
                onPressAddCount={() => onCount('plus')}
                onPressMinCount={() => onCount('minus')}
                value={value}
              />
            </View>
          </View>
          <Gap height={15} />
          <Text style={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.wrapperPrice}>
            <Text style={styles.label}>Harga</Text>
            <Text style={styles.title}>Rp{formatRupiah(20000)}</Text>
          </View>
          <View style={styles.wrapperBtn}>
            <Button
              type="shopping-cart"
              text="Masukkan ke Keranjang"
              // onPress={addToCart}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  coverImg: {
    height: 330,
  },
  content: {
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
    // borderColor: colors.greyLight,
    // borderWidth: 1,
    elevation: 20,
  },
  productCounter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainContent: {flex: 1},
  title: {
    fontSize: 20,
    fontFamily: fonts.mediumPoppins,
    color: colors.black,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.lightPoppins,
    color: colors.greyLight2,
    textTransform: 'uppercase',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.regularPoppins,
    color: colors.black,
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperPrice: {flex: 1},
  wrapperBtn: {
    width: 100,
  },
});
