// global state types
export interface LoaderInitialStateInterface {
  isLoading: boolean;
}
export interface UserInterface {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
}
export interface AuthInitialStateInterface {
  token: string | null;
  user: UserInterface | null;
  isSuperAdmin: boolean;
  isAuthenticated: boolean;
  isLocked: boolean;
}

// APIs requests types
export interface LoginRequestInterface {
  username: string;
  password: string;
}

//APIs responses types
export interface LoginResponseInterface {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

// Products types
export interface ProductInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
  brand?: string;
  stock: number;
}

export interface HomeProductsInterface {
  products: ProductInterface[];
}

// Categories types
export interface CategoryInterface {
  slug: string;
  name: string;
  url: string;
}
export interface HomeCategoriesInterface {
  categories: CategoryInterface[];
}
