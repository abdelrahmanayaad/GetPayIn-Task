import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { HomeProductsInterface } from '../../types/types';
import { FONTS, FONTS_FAMILY } from '../../utils/constants';
import ProductCard from './ProductCard';

const HomeProducts = ({ products }: HomeProductsInterface) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const handleSeeAll = () => navigation.navigate('Products', { products });

  return (
    <View style={styles.productsContainer}>
      <View style={styles.productHeaderStyle}>
        <Text style={styles.productTitle}>Recommended products</Text>
        <Pressable style={styles.seeAllButtonStyle} onPress={handleSeeAll}>
          <Text style={styles.seeAllStyle}>See all</Text>
          <Image
            style={styles.iconStyle}
            source={require('../../assets/icons/back-right.png')}
          />
        </Pressable>
      </View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        data={products.slice(0, 4)}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productsContainer: {
    marginBottom: 20,
  },
  productHeaderStyle: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productTitle: {
    fontSize: FONTS.lg,
    fontFamily: FONTS_FAMILY.medium,
  },
  seeAllButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllStyle: {
    fontSize: FONTS.sm,
    fontFamily: FONTS_FAMILY.regular,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
export default HomeProducts;
