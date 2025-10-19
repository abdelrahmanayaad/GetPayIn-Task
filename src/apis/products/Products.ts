import { useQuery } from '@tanstack/react-query';
import apiRequest from '../apiRequest';

const ProductsService = {
  getAllProducts: async () => {
    const { data } = await apiRequest.get('/products');
    return data;
  },
  getCategories: async () => {
    const { data } = await apiRequest.get('/products/categories');
    return data;
  },
  getProductsByCategory: async (category: string) => {
    const { data } = await apiRequest.get(`/products/category/${category}`);
    return data;
  },
};

export const useAllProducts = () =>
  useQuery({
    queryKey: ['allProducts'],
    queryFn: ProductsService.getAllProducts,
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

export const useAllCategories = () =>
  useQuery({
    queryKey: ['allCategories'],
    queryFn: ProductsService.getCategories,
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });

export const useProductsByCategory = (category: string) =>
  useQuery({
    queryKey: ['productsByCategory', category],
    queryFn: () => ProductsService.getProductsByCategory(category),
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });
