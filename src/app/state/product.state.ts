
export enum ProductActionEvents {
  GET_ALL_PRODUCTS = '[Product] Get all products',
  GET_SELECTED_PRODUCTS = '[Product] Get selected products',
  GET_AVAILABLE_PRODUCTS = '[Product] Get available products',
  SEARCH_PRODUCTS = '[Product] Search products',
  NEW_PRODUCT = '[Product] Add product',
  SELECT_PRODUCT = '[Product] Select product',
  DELETE_PRODUCT = '[Product] Delete product',
  EDIT_PRODUCT = '[Product] Edit product'
}

export interface ActionEvent {
  type: ProductActionEvents;
  payload?: any;
}

export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState<T> {
  dataState?: DataStateEnum;
  data?: T;
  errorMessage?: string;
}
