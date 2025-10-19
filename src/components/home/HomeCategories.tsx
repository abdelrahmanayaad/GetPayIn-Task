import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { CategoryInterface, HomeCategoriesInterface } from '../../types/types';
import { FONTS, FONTS_FAMILY } from '../../utils/constants';
import { COLORS } from '../../utils/theme';
import { useProductsByCategory } from '../../apis/products/Products';
import { useDispatch } from 'react-redux';
import { hideLoader, showLoader } from '../../store/loader';

const HomeCategories = ({ categories }: HomeCategoriesInterface) => {
  const [selectedItem, setSelectedItem] = useState<string>('');
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useDispatch();

  const { data, isFetching } = useProductsByCategory(selectedItem);

  useEffect(() => {
    if (selectedItem && data && !isFetching) {
      dispatch(hideLoader());
      const selectedCategory = categories.find(
        cat => cat.slug === selectedItem,
      );
      if (selectedCategory) {
        navigation.navigate('Category', {
          category: selectedCategory.name,
          products: data.products,
        });
      }
      setSelectedItem('');
    }
  }, [data, isFetching, selectedItem, navigation, dispatch, categories]);

  const handleCategoryPress = (item: CategoryInterface) => {
    setSelectedItem(item.slug);
    dispatch(showLoader());
  };

  const CategoryItem = ({ item }: { item: CategoryInterface }) => (
    <Pressable
      onPress={() => handleCategoryPress(item)}
      style={styles.categoryItemContainer}
    >
      <View style={styles.categoryViewStyle}>
        <Image
          source={require('../../assets/icons/category.png')}
          style={styles.categoryLogoStyle}
        />
      </View>
      <Text style={styles.labelStyle}>{item.name}</Text>
    </Pressable>
  );

  return (
    <View style={styles.categoriesContainer}>
      <Text style={styles.categoriesTitle}>Categories</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={({ item }) => <CategoryItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    marginBottom: 20,
  },
  categoriesTitle: {
    fontSize: FONTS.lg,
    fontFamily: FONTS_FAMILY.medium,
    marginBottom: 20,
  },
  categoryItemContainer: {
    alignItems: 'center',
    marginEnd: 20,
  },
  categoryViewStyle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: COLORS.gray_f6f6f6ff,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryLogoStyle: {
    width: 25,
    height: 25,
    tintColor: COLORS.primary,
  },
  labelStyle: {
    fontSize: FONTS.xs,
    fontFamily: FONTS_FAMILY.regular,
    color: COLORS.gray_5d5d5dff,
  },
});

export default HomeCategories;
