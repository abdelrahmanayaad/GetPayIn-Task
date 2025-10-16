import React from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { FONTS, FONTS_FAMILY } from '../../utils/constants';
import { COLORS } from '../../utils/theme';
import { CustomButton } from '../ui';

const ProductCard = () => {
  return (
    <View style={styles.productCardContainer}>
      <View style={styles.productImageViewStyle}>
        <Image
          resizeMode="cover"
          style={styles.productImageStyle}
          source={require('../../assets/images/chair.png')}
        />
      </View>
      <View style={styles.productDetailsStyle}>
        <Text style={styles.productNameStyle}>Chair</Text>
        <Text>$74.45</Text>
      </View>
      <Text numberOfLines={2} style={styles.productDescriptionStyle}>
        a piece of furniture for one person, typically with a seat, back, and
        legs, made from materials like wood, metal, or plastic
      </Text>
      <CustomButton
        onPress={() =>
          Alert.alert(
            'Products',
            'You added this product to cart successfully!',
          )
        }
        style={styles.addButtonStyle}
        title="Add to cart +"
        titleStyle={styles.addToCartTitle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productCardContainer: {
    width: '47%',
    height: 300,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  productImageViewStyle: {
    width: '100%',
    height: 200,
    backgroundColor: COLORS.gray_f6f6f6ff,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  productImageStyle: {
    width: '100%',
    height: 150,
  },
  productDetailsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  productNameStyle: {
    fontSize: FONTS.sm,
    fontFamily: FONTS_FAMILY.medium,
    color: COLORS.gray_5d5d5dff,
  },
  productDescriptionStyle: {
    fontSize: FONTS.xs,
    color: COLORS.gray_aaa,
    fontFamily: FONTS_FAMILY.light,
    marginBottom: 5,
  },
  addButtonStyle: {
    width: 100,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-end',
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartTitle: {
    fontSize: FONTS.xs,
    color: COLORS.white,
    fontFamily: FONTS_FAMILY.light,
  },
});

export default ProductCard;
