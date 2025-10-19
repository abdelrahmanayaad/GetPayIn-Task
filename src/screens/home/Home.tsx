import React, { useEffect } from 'react';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../utils/theme';
import {
  HomeBanner,
  HomeCategories,
  HomeHeader,
  HomeProducts,
} from '../../components/home';
import { useAllCategories, useAllProducts } from '../../apis/products/Products';
import { useDispatch } from 'react-redux';
import { hideLoader, showLoader } from '../../store/loader';

const Home = () => {
  const dispatch = useDispatch();
  const { data, isLoading, refetch, isRefetching } = useAllCategories();
  const {
    data: products,
    isLoading: isProductsLoading,
    refetch: productRefetch,
    isRefetching: isProductsRefetching,
  } = useAllProducts();

  useEffect(() => {
    if (isLoading || isProductsLoading) {
      dispatch(showLoader());
    } else {
      dispatch(hideLoader());
    }
  }, [isLoading, isProductsLoading, dispatch]);
  if (isLoading || isProductsLoading || !data || !products) {
    return null;
  }

  const handleRefresh = () => {
    refetch();
    productRefetch();
  };

  const isRefreshing = isRefetching || isProductsRefetching;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={[COLORS.primary]}
            tintColor={COLORS.primary}
          />
        }
      >
        <HomeHeader />
        <HomeBanner />
        <HomeCategories categories={data} />
        <HomeProducts products={products.products} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
  },
});

export default Home;
