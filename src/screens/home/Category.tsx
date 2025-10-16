import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProductCard } from '../../components/home';
import {
  CategoryRouteProp,
  HomeScreenNavigationProp,
} from '../../navigation/types';
import { FONTS, FONTS_FAMILY } from '../../utils/constants';
import { COLORS } from '../../utils/theme';

const Category = ({ route }: { route: CategoryRouteProp }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const category = route.params.category;

  const handleGoBack = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <Pressable onPress={handleGoBack} style={styles.titleContainer}>
            <Image
              style={styles.backIconStyle}
              source={require('../../assets/icons/back-left.png')}
            />
            <Text style={styles.categoriesTitle}>{category}</Text>
          </Pressable>
        }
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={() => <ProductCard />}
        keyExtractor={item => item.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    marginBottom: 20,
  },
  backIconStyle: {
    width: 25,
    height: 25,
    marginEnd: 10,
  },
  categoriesTitle: {
    fontSize: FONTS.xlg,
    fontFamily: FONTS_FAMILY.medium,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default Category;
