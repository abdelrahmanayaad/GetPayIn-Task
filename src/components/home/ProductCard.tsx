import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FONTS, FONTS_FAMILY } from '../../utils/constants';
import { COLORS } from '../../utils/theme';
import { CustomButton } from '../ui';
import { ProductInterface } from '../../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const ProductCard = ({ product }: { product: ProductInterface }) => {
  const { isSuperAdmin } = useSelector((state: RootState) => state.auth);
  const trashIcon = require('../../assets/icons/trash.png');

  const handleDelete = () => {
    Alert.alert(
      'Delete Product',
      `Are you sure you want to delete "${product.title}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            Alert.alert('Success', 'Product has been deleted successfully!');
          },
        },
      ],
    );
  };

  return (
    <View style={styles.productCardContainer}>
      <View style={styles.productImageViewStyle}>
        <Image
          resizeMode="cover"
          style={styles.productImageStyle}
          source={{ uri: product.thumbnail }}
        />
        {isSuperAdmin && (
          <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
            <Image source={trashIcon} style={styles.deleteIcon} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.productDetailsStyle}>
        <Text numberOfLines={1} style={styles.productNameStyle}>
          {product.title}
        </Text>
        <Text>{`$${product.price}`}</Text>
      </View>
      <Text numberOfLines={2} style={styles.productDescriptionStyle}>
        {product.description}
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
    position: 'relative',
  },
  productImageStyle: {
    width: '100%',
    height: 150,
  },
  productDetailsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  productNameStyle: {
    fontSize: FONTS.sm,
    fontFamily: FONTS_FAMILY.medium,
    color: COLORS.gray_5d5d5dff,
    width: '70%',
  },
  productDescriptionStyle: {
    fontSize: FONTS.xs,
    color: COLORS.gray_aaa,
    fontFamily: FONTS_FAMILY.light,
    marginBottom: 5,
    paddingHorizontal: 10,
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
    marginRight: 10,
  },
  addToCartTitle: {
    fontSize: FONTS.xs,
    color: COLORS.white,
    fontFamily: FONTS_FAMILY.light,
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    padding: 2,
  },
  deleteIcon: {
    width: 20,
    height: 20,
  },
});

export default ProductCard;
