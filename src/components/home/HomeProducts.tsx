import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { FONTS, FONTS_FAMILY } from '../../utils/constants';
import ProductCard from './ProductCard';

const HomeProducts = () => {
  return (
    <View style={styles.productsContainer}>
      <Text style={styles.productTitle}>Products</Text>
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        data={[1, 2, 3, 4, 5]}
        renderItem={() => <ProductCard />}
        keyExtractor={item => item.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productsContainer: {
    marginBottom: 20,
  },
  productTitle: {
    fontSize: FONTS.xlg,
    fontFamily: FONTS_FAMILY.medium,
    marginBottom: 20,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
export default HomeProducts;
