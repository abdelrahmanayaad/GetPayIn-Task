import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { CategoryType } from '../../types/types';
import { categories, FONTS, FONTS_FAMILY } from '../../utils/constants';
import { COLORS } from '../../utils/theme';

const HomeCategories = () => {
  const renderCategories = ({ item }: { item: CategoryType }) => {
    return (
      <Pressable onPress={item.onPress} style={styles.categoryItemContainer}>
        <View style={styles.categoryViewStyle}>
          <Image source={item.image} style={styles.categoryLogoStyle} />
        </View>
        <Text style={styles.labelStyle}>{item.name}</Text>
      </Pressable>
    );
  };
  return (
    <View style={styles.categoriesContainer}>
      <Text style={styles.categoriesTitle}>Categories</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={renderCategories}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    marginBottom: 20,
  },
  categoriesTitle: {
    fontSize: FONTS.xlg,
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
