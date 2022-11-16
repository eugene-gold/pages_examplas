import * as Types from '../../../../gql-types.js';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  Date: any;
  DateTime: any;
  GqlDuration: any;
  JwtPermissions: any;
  Permissions: any;
  Uuid: any;
};

export type AuthorizedUserSnapshot = {
  __typename?: 'AuthorizedUserSnapshot';
  contractorId: Scalars['Uuid'];
  permissions: Scalars['JwtPermissions'];
  userId: Scalars['Uuid'];
};

export type ContractorBindRoleInput = {
  id: Scalars['ID'];
  roleId: Scalars['ID'];
};

export type ContractorBindRoleResult = {
  __typename?: 'ContractorBindRoleResult';
  roleBinding?: Maybe<ContractorRoleBindingType>;
};

export type ContractorCreateInput = {
  contactEmail: Scalars['String'];
  contactPerson: Scalars['String'];
  contactPhone: Scalars['String'];
  correspondenceAddress: Scalars['String'];
  inn: Scalars['String'];
  juridicalAddress: Scalars['String'];
  ogrn: Scalars['String'];
  shortTitle: Scalars['String'];
  title: Scalars['String'];
};

export type ContractorCreateResult = {
  __typename?: 'ContractorCreateResult';
  contractor?: Maybe<ContractorType>;
};

export type ContractorDeleteInput = {
  id: Scalars['ID'];
};

export type ContractorDeleteResult = {
  __typename?: 'ContractorDeleteResult';
  deletedContractorId?: Maybe<Scalars['ID']>;
};

export type ContractorRoleBindingType = {
  __typename?: 'ContractorRoleBindingType';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  role: ContractorRoleType;
};

/** A connection to a list of items. */
export type ContractorRoleBindingTypeConnection = {
  __typename?: 'ContractorRoleBindingTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<ContractorRoleBindingTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type ContractorRoleBindingTypeEdge = {
  __typename?: 'ContractorRoleBindingTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ContractorRoleBindingType>;
};

export type ContractorRoleType = {
  __typename?: 'ContractorRoleType';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userRole?: Maybe<UserRoleType>;
  userRoles: UserRoleTypeConnection;
};

export type ContractorRoleTypeUserRoleArgs = {
  id: Scalars['ID'];
};

export type ContractorRoleTypeUserRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type ContractorRoleTypeConnection = {
  __typename?: 'ContractorRoleTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<ContractorRoleTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type ContractorRoleTypeEdge = {
  __typename?: 'ContractorRoleTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ContractorRoleType>;
};

export type ContractorType = {
  __typename?: 'ContractorType';
  contactEmail: Scalars['String'];
  contactPerson: Scalars['String'];
  contactPhone: Scalars['String'];
  correspondenceAddress: Scalars['String'];
  createdAt: Scalars['DateTime'];
  externalLocations: Array<LocationSnapshot>;
  /** Запрос одного предложения по списку идентификаторов учетной системы поставщика (внешние идентификаторы) */
  externalOffers: Array<OfferType>;
  /** Запрос избранных запчастей для организации, данные организации берутся из токена */
  favoriteProducts: FavoriteProductTypeConnection;
  id: Scalars['ID'];
  inn: Scalars['String'];
  juridicalAddress: Scalars['String'];
  locations: LocationSnapshotConnection;
  /** Запрос предложений поставщика */
  offers: OfferTypeConnection;
  ogrn: Scalars['String'];
  orders: Array<OrderSnapshot>;
  ordersCount: Scalars['Int'];
  reports: ReportTypeConnection;
  roleBindings: ContractorRoleBindingTypeConnection;
  /** Запрос счетчиков количества показов за период */
  searchCountersByPeriod: OfferSearchCounterTypeConnection;
  selectionRequest: Array<SelectionRequestSnapshot>;
  shortTitle: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  users: UserTypeConnection;
};

export type ContractorTypeExternalLocationsArgs = {
  externalIds: Array<Scalars['String']>;
};

export type ContractorTypeExternalOffersArgs = {
  externalIds: Array<Scalars['String']>;
};

export type ContractorTypeFavoriteProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type ContractorTypeLocationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type ContractorTypeOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type ContractorTypeOrdersArgs = {
  number?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type ContractorTypeOrdersCountArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export type ContractorTypeReportsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type ContractorTypeRoleBindingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type ContractorTypeSearchCountersByPeriodArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  from: Scalars['DateTime'];
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  to: Scalars['DateTime'];
};

export type ContractorTypeSelectionRequestArgs = {
  number?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type ContractorTypeUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type ContractorTypeConnection = {
  __typename?: 'ContractorTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<ContractorTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type ContractorTypeEdge = {
  __typename?: 'ContractorTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ContractorType>;
};

export type ContractorUnbindRoleInput = {
  id: Scalars['ID'];
};

export type ContractorUnbindRoleResult = {
  __typename?: 'ContractorUnbindRoleResult';
  deletedRoleBindingId?: Maybe<Scalars['ID']>;
};

export type ContractorUpdateInput = {
  contactEmail: Scalars['String'];
  contactPerson: Scalars['String'];
  contactPhone: Scalars['String'];
  correspondenceAddress: Scalars['String'];
  id: Scalars['ID'];
  inn: Scalars['String'];
  juridicalAddress: Scalars['String'];
  ogrn: Scalars['String'];
  shortTitle: Scalars['String'];
  title: Scalars['String'];
};

export type ContractorUpdateResult = {
  __typename?: 'ContractorUpdateResult';
  contractor?: Maybe<ContractorType>;
};

export type CustomerSearchResult = {
  __typename?: 'CustomerSearchResult';
  id: Scalars['ID'];
  results: Array<CustomerSearchResultItemSnapshot>;
  searchText?: Maybe<Scalars['String']>;
};

export type CustomerSearchResultItemSnapshot = {
  __typename?: 'CustomerSearchResultItemSnapshot';
  id: Scalars['ID'];
  offer: OfferType;
  party: PartySnapshot;
  product: ProductType;
};

export type CustomerSearchResultItemSnapshotConnection = {
  __typename?: 'CustomerSearchResultItemSnapshotConnection';
  edges: Array<CustomerSearchResultItemSnapshotEdge>;
  pageInfo: PageInfo;
  query?: Maybe<Scalars['String']>;
};

export type CustomerSearchResultItemSnapshotEdge = {
  __typename?: 'CustomerSearchResultItemSnapshotEdge';
  cursor: Scalars['String'];
  node: CustomerSearchResultItemSnapshot;
};

/** Объект для создание нового класса техники */
export type EquipmentClassCreateInput = {
  /** Комментарий */
  comment: Scalars['String'];
  /** Ключ для изображения по умолчанию для модели техники, изображение доступно через сервис file-storage */
  defaultModelImage?: InputMaybe<Scalars['Uuid']>;
  /** Массив ключей фотографий класса, сами изображения доступны по ключам через сервис file-storage */
  photos: Array<Scalars['Uuid']>;
  /** Уникальный токен */
  slug?: InputMaybe<Scalars['String']>;
  /** Описание */
  title: Scalars['String'];
  /** Тип класса техники, необходим для сортировки на фронте */
  type: Scalars['String'];
};

/** Результат создания нового класса техники */
export type EquipmentClassCreateResult = {
  __typename?: 'EquipmentClassCreateResult';
  equipmentClass?: Maybe<EquipmentClassType>;
};

/** Объект для удаления класса техники */
export type EquipmentClassDeleteInput = {
  /** Идентификатор класса техники */
  id: Scalars['ID'];
};

/** Результат удаления класса техники */
export type EquipmentClassDeleteResult = {
  __typename?: 'EquipmentClassDeleteResult';
  deletedId?: Maybe<Scalars['ID']>;
};

/** Класс техники */
export type EquipmentClassType = {
  __typename?: 'EquipmentClassType';
  /** Комментарий */
  comment: Scalars['String'];
  /** Дата создания записи */
  createdAt: Scalars['DateTime'];
  /** Ключ к картинке по умолчанию для моделей данного класса техники, доступно через сервис file-storage */
  defaultModelImage?: Maybe<Scalars['Uuid']>;
  /** Идентификатор класса техники */
  id: Scalars['ID'];
  /** Модели принадлежащие данному классу техники */
  models: EquipmentModelTypeConnection;
  /** Массив ключей фотографий, фото хранятся в файловом хранилище, доступ через сервис file-storage */
  photos: Array<Scalars['Uuid']>;
  /** Уникальный токен */
  slug: Scalars['String'];
  /** Описание */
  title: Scalars['String'];
  /** Тип класса техники, используется на фронте для сортировки */
  type: Scalars['String'];
  /** Дата последнего обновления записи */
  updatedAt: Scalars['DateTime'];
};

/** Класс техники */
export type EquipmentClassTypeModelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type EquipmentClassTypeConnection = {
  __typename?: 'EquipmentClassTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<EquipmentClassTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type EquipmentClassTypeEdge = {
  __typename?: 'EquipmentClassTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<EquipmentClassType>;
};

/** Объект для изменения класса техники */
export type EquipmentClassUpdateInput = {
  /** Комментарий */
  comment: Scalars['String'];
  /** Изображение по умолчанию для модели техники */
  defaultModelImage: Scalars['Uuid'];
  /** Идентификатор класса техники */
  id: Scalars['ID'];
  /** Массив ключей фотографий класса техники */
  photos: Array<Scalars['Uuid']>;
  /** Наименование */
  title: Scalars['String'];
};

/** Результат изменения класса техники */
export type EquipmentClassUpdateResult = {
  __typename?: 'EquipmentClassUpdateResult';
  equipmentClass?: Maybe<EquipmentClassType>;
};

/** Объект для создания модели техники */
export type EquipmentModelCreateInput = {
  /** Комментарий */
  comment: Scalars['String'];
  /** Идентификатор класса техники */
  equipmentClassId: Scalars['ID'];
  /** Высота */
  height?: InputMaybe<Scalars['Int']>;
  /** Длина */
  length?: InputMaybe<Scalars['Int']>;
  /** Идентификатор изготовителя техники */
  manufacturerId: Scalars['ID'];
  /** Массив ключей фотографий модели техники */
  photos: Array<Scalars['Uuid']>;
  /** Уникальный токен */
  slug?: InputMaybe<Scalars['String']>;
  /** Наименование */
  title: Scalars['String'];
  /** Вес */
  weight?: InputMaybe<Scalars['Int']>;
  /** Ширина */
  width?: InputMaybe<Scalars['Int']>;
};

/** Результат создания модели техники */
export type EquipmentModelCreateResult = {
  __typename?: 'EquipmentModelCreateResult';
  equipmentModel?: Maybe<EquipmentModelType>;
};

/** Объект для удаления модели техники */
export type EquipmentModelDeleteInput = {
  /** Идентификатор модели техники */
  id: Scalars['ID'];
};

/** Результат удаления модели техники */
export type EquipmentModelDeleteResult = {
  __typename?: 'EquipmentModelDeleteResult';
  deletedId?: Maybe<Scalars['ID']>;
};

/** Модель техники */
export type EquipmentModelType = {
  __typename?: 'EquipmentModelType';
  /** Комментарий */
  comment?: Maybe<Scalars['String']>;
  /** Дата создания записи */
  createdAt: Scalars['DateTime'];
  /** Класс модели техники */
  equipmentClass: EquipmentClassType;
  /** Высота модели */
  height?: Maybe<Scalars['Int']>;
  /** Идентификатор модели техники */
  id: Scalars['ID'];
  /** Длина модели */
  length?: Maybe<Scalars['Int']>;
  /** Производитель модели техники */
  manufacturer: ManufacturerType;
  /** Массив ключей фотографий, фото хранятся в файловом хранилище, доступ через сервис file-storage */
  photos: Array<Scalars['Uuid']>;
  /** Запчасти связанные с моделью техники */
  productsBinding: ProductModelBindingTypeConnection;
  /** Уникальный токен */
  slug?: Maybe<Scalars['String']>;
  /** Описание модели */
  title: Scalars['String'];
  /** Дата последнего изменения записи */
  updatedAt: Scalars['DateTime'];
  /** Вес модели */
  weight?: Maybe<Scalars['Int']>;
  /** Ширина модели */
  width?: Maybe<Scalars['Int']>;
};

/** Модель техники */
export type EquipmentModelTypeProductsBindingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type EquipmentModelTypeConnection = {
  __typename?: 'EquipmentModelTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<EquipmentModelTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type EquipmentModelTypeEdge = {
  __typename?: 'EquipmentModelTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<EquipmentModelType>;
};

/** Объект для изменения модели техники */
export type EquipmentModelUpdateInput = {
  /** Комментарий */
  comment: Scalars['String'];
  /** Высота */
  height?: InputMaybe<Scalars['Int']>;
  /** Идентификатор модели техники */
  id: Scalars['ID'];
  /** Длина */
  length?: InputMaybe<Scalars['Int']>;
  /** Массив ключей фотографий модели техники */
  photos: Array<Scalars['Uuid']>;
  /** Наименование */
  title: Scalars['String'];
  /** Вес */
  weight?: InputMaybe<Scalars['Int']>;
  /** Ширина */
  width?: InputMaybe<Scalars['Int']>;
};

/** Результат изменения модели техники */
export type EquipmentModelUpdateResult = {
  __typename?: 'EquipmentModelUpdateResult';
  equipmentModel?: Maybe<EquipmentModelType>;
};

/** Результат создания новой избранной запчасти */
export type FavoriteProductCreateResult = {
  __typename?: 'FavoriteProductCreateResult';
  favoriteProduct?: Maybe<FavoriteProductType>;
};

/** Результат удаления избранной запчасти */
export type FavoriteProductDeleteResult = {
  __typename?: 'FavoriteProductDeleteResult';
  deletedFavoriteProductId?: Maybe<Scalars['ID']>;
};

/** Избранная запчасть */
export type FavoriteProductType = {
  __typename?: 'FavoriteProductType';
  /** Организация */
  contractor: ContractorType;
  /** Дата создания записи */
  createdAt: Scalars['DateTime'];
  /** Идентификатор избранной запчасти */
  id: Scalars['ID'];
  /** Запчасть */
  product: ProductType;
};

/** A connection to a list of items. */
export type FavoriteProductTypeConnection = {
  __typename?: 'FavoriteProductTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<FavoriteProductTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type FavoriteProductTypeEdge = {
  __typename?: 'FavoriteProductTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<FavoriteProductType>;
};

export type LocationCreateInput = {
  address: Scalars['String'];
  city?: InputMaybe<Scalars['String']>;
  contactEmail: Scalars['String'];
  contactPerson: Scalars['String'];
  contactPhone: Scalars['String'];
  contractorId: Scalars['ID'];
  description: Scalars['String'];
  externalId: Scalars['String'];
  title: Scalars['String'];
};

export type LocationCreateResult = {
  __typename?: 'LocationCreateResult';
  location?: Maybe<LocationSnapshot>;
};

export type LocationDeleteExternalInput = {
  id: Scalars['String'];
  operationId: Scalars['Uuid'];
};

export type LocationDeleteInput = {
  id: Scalars['ID'];
};

export type LocationDeleteResult = {
  __typename?: 'LocationDeleteResult';
  deletedLocationId?: Maybe<Scalars['ID']>;
  operationId: Scalars['Uuid'];
};

export type LocationSnapshot = {
  __typename?: 'LocationSnapshot';
  address: Scalars['String'];
  canBeDeleted: Scalars['Boolean'];
  city: Scalars['String'];
  contactEmail: Scalars['String'];
  contactPerson: Scalars['String'];
  contactPhone: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  externalId: Scalars['String'];
  id: Scalars['ID'];
  parties: PartySnapshotConnection;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type LocationSnapshotPartiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type LocationSnapshotConnection = {
  __typename?: 'LocationSnapshotConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<LocationSnapshotEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type LocationSnapshotEdge = {
  __typename?: 'LocationSnapshotEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<LocationSnapshot>;
};

export type LocationUpdateInput = {
  address: Scalars['String'];
  city?: InputMaybe<Scalars['String']>;
  contactEmail: Scalars['String'];
  contactPerson: Scalars['String'];
  contactPhone: Scalars['String'];
  description: Scalars['String'];
  externalId: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type LocationUpdateResult = {
  __typename?: 'LocationUpdateResult';
  location?: Maybe<LocationSnapshot>;
};

export type LocationUpsertExternalInput = {
  address: Scalars['String'];
  city?: InputMaybe<Scalars['String']>;
  contactEmail: Scalars['String'];
  contactPerson: Scalars['String'];
  contactPhone: Scalars['String'];
  description: Scalars['String'];
  externalId: Scalars['String'];
  operationId: Scalars['Uuid'];
  title: Scalars['String'];
};

export type LocationUpsertExternalResult = {
  __typename?: 'LocationUpsertExternalResult';
  location?: Maybe<LocationSnapshot>;
  operationId: Scalars['Uuid'];
};

export type LotSnapshot = {
  __typename?: 'LotSnapshot';
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  id: Scalars['ID'];
  orderItem?: Maybe<OrderItemSnapshot>;
  price: Scalars['BigDecimal'];
  priceWithoutVat?: Maybe<Scalars['BigDecimal']>;
  updatedAt: Scalars['DateTime'];
};

/** Объект с данным для создания производителя техники */
export type ManufacturerCreateInput = {
  /** Комментарий */
  comment: Scalars['String'];
  /** Страна производителя */
  country: Scalars['String'];
  /** Ключ к изображению с логотипом */
  logoImage?: InputMaybe<Scalars['Uuid']>;
  /** Уникальный токен */
  slug?: InputMaybe<Scalars['String']>;
  /** Описание */
  title: Scalars['String'];
};

/** Объект с результатом создания производителя техники */
export type ManufacturerCreateResult = {
  __typename?: 'ManufacturerCreateResult';
  manufacturer?: Maybe<ManufacturerType>;
};

/** Объект с данными для удаления производителя техники */
export type ManufacturerDeleteInput = {
  /** Идентификатор производителя */
  id: Scalars['ID'];
};

/** Объект с результатом удаления производителя техники */
export type ManufacturerDeleteResult = {
  __typename?: 'ManufacturerDeleteResult';
  deletedId?: Maybe<Scalars['ID']>;
};

/** Производитель техники */
export type ManufacturerType = {
  __typename?: 'ManufacturerType';
  /** Комментарий */
  comment?: Maybe<Scalars['String']>;
  /** Страна производитель */
  country: Scalars['String'];
  /** Дата создания записи */
  createdAt: Scalars['DateTime'];
  /** Идентификатор производителя техники */
  id: Scalars['ID'];
  /** Логотип производителя */
  logoImage?: Maybe<Scalars['Uuid']>;
  /** Модели выпускаемые данным производителем */
  models: EquipmentModelTypeConnection;
  /** Уникальный токен */
  slug: Scalars['String'];
  /** Наименование */
  title: Scalars['String'];
  /** Дата обновления записи */
  updatedAt: Scalars['DateTime'];
};

/** Производитель техники */
export type ManufacturerTypeModelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type ManufacturerTypeConnection = {
  __typename?: 'ManufacturerTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<ManufacturerTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type ManufacturerTypeEdge = {
  __typename?: 'ManufacturerTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ManufacturerType>;
};

/** Объект с данными для изменения производителя техники */
export type ManufacturerUpdateInput = {
  /** Комментарий */
  comment?: InputMaybe<Scalars['String']>;
  /** Страна производителя */
  country: Scalars['String'];
  /** Идентификатор производителя */
  id: Scalars['ID'];
  /** Ключ к изображению с логотипом */
  logoImage?: InputMaybe<Scalars['Uuid']>;
  /** Описание */
  title: Scalars['String'];
};

/** Объект результатом изменения производителя техники */
export type ManufacturerUpdateResult = {
  __typename?: 'ManufacturerUpdateResult';
  manufacturer?: Maybe<ManufacturerType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  contractorBindRole: ContractorBindRoleResult;
  contractorCreate: ContractorCreateResult;
  contractorDelete: ContractorDeleteResult;
  contractorUnbindRole: ContractorUnbindRoleResult;
  contractorUpdate: ContractorUpdateResult;
  draftOrderGetOrCreate: OrderGetOrCreateDraftResult;
  /** Создание нового класса техники */
  equipmentClassCreate: EquipmentClassCreateResult;
  /** Удаление существующего класса техники */
  equipmentClassDelete: EquipmentClassDeleteResult;
  /** Изменение существующего класса техники */
  equipmentClassUpdate: EquipmentClassUpdateResult;
  /** Мутация создание модели техники */
  equipmentModelCreate: EquipmentModelCreateResult;
  /** Мутация удаление модели техники */
  equipmentModelDelete: EquipmentModelDeleteResult;
  /** Мутация изменение модели техники */
  equipmentModelUpdate: EquipmentModelUpdateResult;
  /** Мутация на создание новой избранной запчасти */
  favoriteProductCreate: FavoriteProductCreateResult;
  /** Мутация на удаление избранной запчасти */
  favoriteProductDelete: FavoriteProductDeleteResult;
  locationCreate: LocationCreateResult;
  locationDelete: LocationDeleteResult;
  locationDeleteByExternalId: LocationDeleteResult;
  locationUpdate: LocationUpdateResult;
  locationUpsertByExternalId: LocationUpsertExternalResult;
  locationUpsertByExternalIdUseContractor: LocationUpsertExternalResult;
  /** Создание производителя техники */
  manufacturerCreate: ManufacturerCreateResult;
  /** Удаление производителя техники */
  manufacturerDelete: ManufacturerDeleteResult;
  /** Изменение производителя техники */
  manufacturerUpdate: ManufacturerUpdateResult;
  /** Создание предложения поставщика */
  offerCreate: OfferCreateResult;
  /** Удаление предложения поставщика */
  offerDelete: OfferDeleteResult;
  /** Удаление предложения поставщика по внешнему идентификатору */
  offerDeleteByExternalId: OfferDeleteResult;
  /** Удаление предложения поставщика по внешнему идентификатору */
  offerDeleteByExternalIdUseContractor: OfferDeleteResult;
  /** Удаление счетчика количества показов предложения поставщика */
  offerSearchCounterDelete: OfferSearchCounterDeleteResult;
  /** Изменение предложения поставщика */
  offerUpdate: OfferUpdateResult;
  /** Создание - изменение предложения поставщика по внешнему идентификатору */
  offerUpsertByExternalId: OfferUpsertExternalResult;
  /** Создание - изменение предложения поставщика по внешнему идентификатору, для указанного поставщика */
  offerUpsertByExternalIdUseContractor: OfferUpsertExternalResult;
  orderAgreedWithClient: OrderSnapshot;
  orderAgreedWithSupplier: OrderSnapshot;
  orderCancel: OrderSnapshot;
  orderChangeDestination: OrderChangeDestinationResult;
  /** Временный метод для смены статуса. Уберем после уточнения логики переходов по статусам */
  orderChangeStatus: OrderSnapshot;
  orderClear: OrderClearResult;
  orderComplete: OrderSnapshot;
  orderCreateDraft: OrderCreateDraftResult;
  orderDelete: OrderDeleteResult;
  orderItemAdjustQuantity: OrderItemAdjustQuantityResult;
  /** Временный метод для смены статуса. Уберем после уточнения логики переходов по статусам */
  orderItemChangeStatus: OrderItemSnapshot;
  orderItemCreate: OrderItemCreateResult;
  orderItemDelete: OrderItemDeleteResult;
  orderItemMove: OrderItemMoveResult;
  orderItemReleaseExpiredLots: OrderItemReleaseExpiredLotsResult;
  orderItemRenewLots: OrderItemRenewLotsResult;
  orderSentForDelivery: OrderSnapshot;
  orderSubmitToReturn: OrderSnapshot;
  orderSubmitToWork: OrderGiveToWorkResult;
  partyCreate: PartyCreateResult;
  partyDelete: PartyDeleteResult;
  partyDeleteByExternalId: PartyDeleteResult;
  partyDeleteByExternalIdForContractor: PartyDeleteResult;
  partySetEmptyForContractor: PartySetEmptyResult;
  partySetEmptyForLocation: PartySetEmptyResult;
  partyUpdate: PartyUpdateResult;
  partyUpsertByExternalId: PartyUpsertByExternalIdResult;
  partyUpsertByExternalIdForContractor: PartyUpsertByExternalIdResult;
  /** Создание новой запчасти */
  productCreate: ProductCreateResult;
  /** Удаление запчасти */
  productDelete: ProductDeleteResult;
  /** Создание новой связи запчасти с моделью техники */
  productModelBindingCreate: ProductModelBindingCreateResult;
  /** Удаление связи запчасти с моделью техники */
  productModelBindingDelete: ProductModelBindingDeleteResult;
  /** Создание новой связи запчасти и предложения поставщика */
  productOfferCreate: ProductOfferCreateResult;
  /** Изменение запчасти */
  productUpdate: ProductUpdateResult;
  /** Создание нового отчета */
  reportCreate: ReportCreateResult;
  /** Удаление отчета */
  reportDelete: ReportDeleteResult;
  selectedItemCreate: SelectedItemCreateResult;
  selectedItemDelete: SelectedItemDeleteResult;
  selectedItemUpdate: SelectedItemUpdateResult;
  selectionCreate: SelectionCreateResult;
  selectionCreateMany: SelectionCreateManyResult;
  selectionDelete: SelectionDeleteResult;
  selectionRequestCreate: SelectionRequestCreateResult;
  selectionRequestDelete: SelectionRequestDeleteResult;
  selectionRequestUpdate: SelectionRequestUpdateResult;
  selectionUpdate: SelectionUpdateResult;
  tokenCreate: TokenCreateResult;
  tokenDelete: TokenDeleteResult;
  userBindRole: UserBindRoleResult;
  userCreate: UserCreateResult;
  userDelete: UserDeleteResult;
  userUnbindRole: UserUnbindRoleResult;
  userUpdate: UserUpdateResult;
};

export type MutationContractorBindRoleArgs = {
  input: ContractorBindRoleInput;
};

export type MutationContractorCreateArgs = {
  input: ContractorCreateInput;
};

export type MutationContractorDeleteArgs = {
  input: ContractorDeleteInput;
};

export type MutationContractorUnbindRoleArgs = {
  input: ContractorUnbindRoleInput;
};

export type MutationContractorUpdateArgs = {
  input: ContractorUpdateInput;
};

export type MutationEquipmentClassCreateArgs = {
  input: EquipmentClassCreateInput;
};

export type MutationEquipmentClassDeleteArgs = {
  input: EquipmentClassDeleteInput;
};

export type MutationEquipmentClassUpdateArgs = {
  input: EquipmentClassUpdateInput;
};

export type MutationEquipmentModelCreateArgs = {
  input: EquipmentModelCreateInput;
};

export type MutationEquipmentModelDeleteArgs = {
  input: EquipmentModelDeleteInput;
};

export type MutationEquipmentModelUpdateArgs = {
  input: EquipmentModelUpdateInput;
};

export type MutationFavoriteProductCreateArgs = {
  productId: Scalars['ID'];
};

export type MutationFavoriteProductDeleteArgs = {
  favoriteProductId: Scalars['ID'];
};

export type MutationLocationCreateArgs = {
  input: LocationCreateInput;
};

export type MutationLocationDeleteArgs = {
  input: LocationDeleteInput;
};

export type MutationLocationDeleteByExternalIdArgs = {
  input: LocationDeleteExternalInput;
};

export type MutationLocationUpdateArgs = {
  input: LocationUpdateInput;
};

export type MutationLocationUpsertByExternalIdArgs = {
  input: LocationUpsertExternalInput;
};

export type MutationLocationUpsertByExternalIdUseContractorArgs = {
  contractor: Scalars['ID'];
  input: LocationUpsertExternalInput;
};

export type MutationManufacturerCreateArgs = {
  input: ManufacturerCreateInput;
};

export type MutationManufacturerDeleteArgs = {
  input: ManufacturerDeleteInput;
};

export type MutationManufacturerUpdateArgs = {
  input: ManufacturerUpdateInput;
};

export type MutationOfferCreateArgs = {
  input: OfferCreateInput;
};

export type MutationOfferDeleteArgs = {
  input: OfferDeleteInput;
};

export type MutationOfferDeleteByExternalIdArgs = {
  input: OfferDeleteExternalInput;
};

export type MutationOfferDeleteByExternalIdUseContractorArgs = {
  contractor: Scalars['ID'];
  input: OfferDeleteExternalInput;
};

export type MutationOfferSearchCounterDeleteArgs = {
  input: OfferSearchCounterDeleteInput;
};

export type MutationOfferUpdateArgs = {
  input: OfferUpdateInput;
};

export type MutationOfferUpsertByExternalIdArgs = {
  input: OfferUpsertExternalInput;
};

export type MutationOfferUpsertByExternalIdUseContractorArgs = {
  contractor: Scalars['ID'];
  input: OfferUpsertExternalInput;
};

export type MutationOrderAgreedWithClientArgs = {
  orderId: Scalars['ID'];
};

export type MutationOrderAgreedWithSupplierArgs = {
  orderId: Scalars['ID'];
};

export type MutationOrderCancelArgs = {
  orderId: Scalars['ID'];
};

export type MutationOrderChangeDestinationArgs = {
  destinationId: Scalars['ID'];
  orderId: Scalars['ID'];
};

export type MutationOrderChangeStatusArgs = {
  orderId: Scalars['ID'];
  status: OrderStatus;
};

export type MutationOrderClearArgs = {
  orderId: Scalars['ID'];
};

export type MutationOrderCompleteArgs = {
  orderId: Scalars['ID'];
};

export type MutationOrderDeleteArgs = {
  orderId: Scalars['ID'];
};

export type MutationOrderItemAdjustQuantityArgs = {
  increment: Scalars['Int'];
  orderItemId: Scalars['ID'];
};

export type MutationOrderItemChangeStatusArgs = {
  orderItemId: Scalars['ID'];
  status: OrderItemStatus;
};

export type MutationOrderItemCreateArgs = {
  orderId: Scalars['ID'];
  partyId: Scalars['ID'];
};

export type MutationOrderItemDeleteArgs = {
  orderItemId: Scalars['ID'];
};

export type MutationOrderItemMoveArgs = {
  destinationOrderId: Scalars['ID'];
  orderItemId: Scalars['ID'];
};

export type MutationOrderItemReleaseExpiredLotsArgs = {
  orderItemId: Scalars['ID'];
};

export type MutationOrderItemRenewLotsArgs = {
  orderItemId: Scalars['ID'];
};

export type MutationOrderSentForDeliveryArgs = {
  orderId: Scalars['ID'];
};

export type MutationOrderSubmitToReturnArgs = {
  orderId: Scalars['ID'];
};

export type MutationOrderSubmitToWorkArgs = {
  orderId: Scalars['ID'];
};

export type MutationPartyCreateArgs = {
  input: PartyCreateInput;
};

export type MutationPartyDeleteArgs = {
  input: PartyDeleteInput;
};

export type MutationPartyDeleteByExternalIdArgs = {
  input: PartyDeleteByExternalIdInput;
};

export type MutationPartyDeleteByExternalIdForContractorArgs = {
  contractorId: Scalars['ID'];
  input: PartyDeleteByExternalIdInput;
};

export type MutationPartySetEmptyForContractorArgs = {
  input: PartySetEmptyForContractorInput;
};

export type MutationPartySetEmptyForLocationArgs = {
  input: PartySetEmptyForLocationInput;
};

export type MutationPartyUpdateArgs = {
  input: PartyUpdateInput;
};

export type MutationPartyUpsertByExternalIdArgs = {
  input: PartyUpsertByExternalIdInput;
};

export type MutationPartyUpsertByExternalIdForContractorArgs = {
  contractorId: Scalars['ID'];
  input: PartyUpsertByExternalIdInput;
};

export type MutationProductCreateArgs = {
  input: ProductCreateInput;
};

export type MutationProductDeleteArgs = {
  input: ProductDeleteInput;
};

export type MutationProductModelBindingCreateArgs = {
  input: ProductModelBindingCreateInput;
};

export type MutationProductModelBindingDeleteArgs = {
  input: ProductModelBindingDeleteInput;
};

export type MutationProductOfferCreateArgs = {
  input: ProductOfferCreateInput;
};

export type MutationProductUpdateArgs = {
  input: ProductUpdateInput;
};

export type MutationReportCreateArgs = {
  input: ReportCreateInput;
};

export type MutationReportDeleteArgs = {
  input: ReportDeleteInput;
};

export type MutationSelectedItemCreateArgs = {
  input: SelectedItemCreateInput;
};

export type MutationSelectedItemDeleteArgs = {
  selectedItemFQDN: Scalars['ID'];
};

export type MutationSelectedItemUpdateArgs = {
  input: SelectedItemUpdateInput;
};

export type MutationSelectionCreateArgs = {
  input: SelectionCreateInput;
};

export type MutationSelectionCreateManyArgs = {
  input: SelectionCreateManyInput;
};

export type MutationSelectionDeleteArgs = {
  selectionFQDN: Scalars['ID'];
};

export type MutationSelectionRequestCreateArgs = {
  input: SelectionRequestCreateInput;
};

export type MutationSelectionRequestDeleteArgs = {
  selectionRequestFQDN: Scalars['ID'];
};

export type MutationSelectionRequestUpdateArgs = {
  input: SelectionRequestUpdateInput;
};

export type MutationSelectionUpdateArgs = {
  input: SelectionUpdateInput;
};

export type MutationTokenCreateArgs = {
  input: TokenCreateInput;
};

export type MutationTokenDeleteArgs = {
  input: TokenDeleteInput;
};

export type MutationUserBindRoleArgs = {
  input: UserBindRoleInput;
};

export type MutationUserCreateArgs = {
  input: UserCreateInput;
};

export type MutationUserDeleteArgs = {
  input: UserDeleteInput;
};

export type MutationUserUnbindRoleArgs = {
  input: UserUnbindRoleInput;
};

export type MutationUserUpdateArgs = {
  input: UserUpdateInput;
};

export type NormalizationErrorSnapshot = {
  __typename?: 'NormalizationErrorSnapshot';
  code: Scalars['String'];
  detail: Scalars['String'];
  group: Scalars['String'];
  message: Scalars['String'];
};

export type NormalizedProductCodeSnapshot = {
  __typename?: 'NormalizedProductCodeSnapshot';
  errors: Array<NormalizationErrorSnapshot>;
  value: Scalars['String'];
};

/** Объект для создания предложения поставщика */
export type OfferCreateInput = {
  /** Идентификатор поставщика */
  contractorId: Scalars['ID'];
  /** Массив кроссномеров */
  crossNumbers: Array<Scalars['String']>;
  /** Описание */
  description: Scalars['String'];
  /** Идентификатор предложения в системе поставщика */
  externalId: Scalars['String'];
  /** Высота */
  height?: InputMaybe<Scalars['Int']>;
  /** Длина */
  length?: InputMaybe<Scalars['Int']>;
  /** Производитель */
  manufacturer: Scalars['String'];
  /** Признак оригинальности */
  origin: ProductOrigin;
  /** Код продукта */
  productCode: Scalars['String'];
  /** Состояние запчасти в предложении */
  state: ProductState;
  /** Наименование */
  title: Scalars['String'];
  /** Вес */
  weight?: InputMaybe<Scalars['Int']>;
  /** Ширина */
  width?: InputMaybe<Scalars['Int']>;
};

/** Результат создания предложения поставщика */
export type OfferCreateResult = {
  __typename?: 'OfferCreateResult';
  offer?: Maybe<OfferType>;
};

/** Кросс номер для предложения поставщика */
export type OfferCrossNumberSnapshot = {
  __typename?: 'OfferCrossNumberSnapshot';
  /** Идентификатор кросс номера предложения поставщика */
  id: Scalars['ID'];
  /** Код продукта */
  productCode: ProductCodeSnapshot;
};

/** Результат удаления предложения поставщика */
export type OfferDeleteExternalInput = {
  /** Идентификатор предложения */
  id: Scalars['String'];
  /** Идентификатор выполняемой операции */
  operationId: Scalars['Uuid'];
};

/** Объект для удаления предложения поставщика */
export type OfferDeleteInput = {
  /** Идентификатор предложения */
  id: Scalars['ID'];
};

/** Результат удаления предложения поставщика */
export type OfferDeleteResult = {
  __typename?: 'OfferDeleteResult';
  deletedOfferId?: Maybe<Scalars['ID']>;
  /** Идентификатор выполняемой операции */
  operationId: Scalars['Uuid'];
};

/** Объект для удаления счетчика показов предложения поставщика */
export type OfferSearchCounterDeleteInput = {
  /** Идентификатор счетчика показов предложения */
  id: Scalars['ID'];
};

/** Результат удаления предложения поставщика */
export type OfferSearchCounterDeleteResult = {
  __typename?: 'OfferSearchCounterDeleteResult';
  deletedOfferSearchCounterId?: Maybe<Scalars['ID']>;
  /** Идентификатор выполняемой операции */
  operationId: Scalars['Uuid'];
};

/** Объект для запроса счетчиков количества показов предложения за период */
export type OfferSearchCounterPeriodInput = {
  /** Дата начала периода */
  from: Scalars['DateTime'];
  /** Дата окончания периода */
  to: Scalars['DateTime'];
};

/** Счетчик количества показов предложения в результатах поиска */
export type OfferSearchCounterType = {
  __typename?: 'OfferSearchCounterType';
  /** Количество показов в указанную дату */
  count: Scalars['Int'];
  /** Дата создания записи */
  createdAt: Scalars['DateTime'];
  /** Дата счетчика */
  date: Scalars['Date'];
  /** Идентификатор счетчика */
  id: Scalars['ID'];
  /** Организация поставщик */
  offer: OfferType;
  /** Дата последнего обновления */
  updatedAt: Scalars['DateTime'];
};

/** A connection to a list of items. */
export type OfferSearchCounterTypeConnection = {
  __typename?: 'OfferSearchCounterTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<OfferSearchCounterTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type OfferSearchCounterTypeEdge = {
  __typename?: 'OfferSearchCounterTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<OfferSearchCounterType>;
};

/** Предложение поставщика */
export type OfferType = {
  __typename?: 'OfferType';
  /** Организация поставщик */
  contractor: ContractorType;
  /** Дата создания записи */
  createdAt: Scalars['DateTime'];
  /** Кросс номера для этого предложения */
  crossNumbers: Array<OfferCrossNumberSnapshot>;
  /** Описание */
  description: Scalars['String'];
  /** Идентификатор предложения в системе учета поставщика */
  externalId: Scalars['String'];
  /** Высота */
  height?: Maybe<Scalars['Int']>;
  /** Идентификатор предложения */
  id: Scalars['ID'];
  /** Длина */
  length?: Maybe<Scalars['Int']>;
  /** Производитель */
  manufacturer: Scalars['String'];
  /** Признак оригинальности предложения */
  origin: ProductOrigin;
  parties: PartySnapshotConnection;
  /** Код продукта */
  productCode: ProductCodeSnapshot;
  /** Продукт связанный с этим предложением */
  productOffer?: Maybe<ProductOfferType>;
  /** Запрос счетчиков количества показов за период */
  searchCounterByPeriod: Array<OfferSearchCounterType>;
  /** Статус предложения */
  state: ProductState;
  /** Наименование */
  title: Scalars['String'];
  /** Дата последнего обновления */
  updatedAt: Scalars['DateTime'];
  /** Вес */
  weight?: Maybe<Scalars['Int']>;
  /** Ширина */
  width?: Maybe<Scalars['Int']>;
};

/** Предложение поставщика */
export type OfferTypePartiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** Предложение поставщика */
export type OfferTypeSearchCounterByPeriodArgs = {
  input: OfferSearchCounterPeriodInput;
};

/** A connection to a list of items. */
export type OfferTypeConnection = {
  __typename?: 'OfferTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<OfferTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type OfferTypeEdge = {
  __typename?: 'OfferTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<OfferType>;
};

/** Объект для изменения предложения поставщика */
export type OfferUpdateInput = {
  /** Массив кроссномеров */
  crossNumbers: Array<Scalars['String']>;
  /** Описание */
  description: Scalars['String'];
  /** Идентификатор предложения в системе поставщика */
  externalId: Scalars['String'];
  /** Высота */
  height?: InputMaybe<Scalars['Int']>;
  /** Идентификатор предложения */
  id: Scalars['ID'];
  /** Длина */
  length?: InputMaybe<Scalars['Int']>;
  /** Производитель */
  manufacturer: Scalars['String'];
  /** Признак оригинальности */
  origin: ProductOrigin;
  /** Код продукта */
  productCode: Scalars['String'];
  /** Состояние запчасти в предложении */
  state: ProductState;
  /** Наименование */
  title: Scalars['String'];
  /** Вес */
  weight?: InputMaybe<Scalars['Int']>;
  /** Ширина */
  width?: InputMaybe<Scalars['Int']>;
};

/** Результат изменения предложения поставщика */
export type OfferUpdateResult = {
  __typename?: 'OfferUpdateResult';
  offer?: Maybe<OfferType>;
};

/** Объект для создания - изменения предложения поставщика используя внешний идентификатор */
export type OfferUpsertExternalInput = {
  /** Массив кроссномеров */
  crossNumbers: Array<Scalars['String']>;
  /** Описание */
  description: Scalars['String'];
  /** Идентификатор предложения в системе поставщика */
  externalId: Scalars['String'];
  /** Высота запчасти */
  height?: InputMaybe<Scalars['Int']>;
  /** Длина запчасти */
  length?: InputMaybe<Scalars['Int']>;
  /** Производитель */
  manufacturer: Scalars['String'];
  /** Идентификатор выполняемой операции */
  operationId: Scalars['Uuid'];
  /** Признак оригинальности */
  origin: ProductOrigin;
  /** Код продукта */
  productCode: Scalars['String'];
  /** Состояние запчасти в предложении */
  state: ProductState;
  /** Наименование */
  title: Scalars['String'];
  /** Вес запчасти */
  weight?: InputMaybe<Scalars['Int']>;
  /** Ширина запчасти */
  width?: InputMaybe<Scalars['Int']>;
};

/** Результат создания - изменения предложения поставщика используя внешний идентификатор */
export type OfferUpsertExternalResult = {
  __typename?: 'OfferUpsertExternalResult';
  offer?: Maybe<OfferType>;
  /** Идентификатор выполняемой операции */
  operationId: Scalars['Uuid'];
};

export type OrderChangeDestinationResult = {
  __typename?: 'OrderChangeDestinationResult';
  order: OrderSnapshot;
};

export type OrderClearResult = {
  __typename?: 'OrderClearResult';
  order: OrderSnapshot;
};

export type OrderCreateDraftResult = {
  __typename?: 'OrderCreateDraftResult';
  order: OrderSnapshot;
};

export type OrderDeleteResult = {
  __typename?: 'OrderDeleteResult';
  deletedOrderId?: Maybe<Scalars['ID']>;
};

export type OrderGetOrCreateDraftResult = {
  __typename?: 'OrderGetOrCreateDraftResult';
  order: OrderSnapshot;
};

export type OrderGiveToWorkResult = {
  __typename?: 'OrderGiveToWorkResult';
  order: OrderSnapshot;
};

export type OrderItemAdjustQuantityResult = {
  __typename?: 'OrderItemAdjustQuantityResult';
  orderItem: OrderItemSnapshot;
};

export type OrderItemCreateResult = {
  __typename?: 'OrderItemCreateResult';
  orderItem: OrderItemSnapshot;
};

export type OrderItemDeleteResult = {
  __typename?: 'OrderItemDeleteResult';
  deletedOrderItemId: Scalars['ID'];
};

export type OrderItemMoveResult = {
  __typename?: 'OrderItemMoveResult';
  orderItem: OrderItemSnapshot;
};

export type OrderItemReleaseExpiredLotsResult = {
  __typename?: 'OrderItemReleaseExpiredLotsResult';
  orderItem: OrderItemSnapshot;
};

export type OrderItemRenewLotsResult = {
  __typename?: 'OrderItemRenewLotsResult';
  orderItem: OrderItemSnapshot;
  successful: Scalars['Boolean'];
};

export type OrderItemSnapshot = {
  __typename?: 'OrderItemSnapshot';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lots: Array<LotSnapshot>;
  lotsAreExpired: Scalars['Boolean'];
  lotsCount: Scalars['Int'];
  lotsExpiresAt: Scalars['DateTime'];
  order: OrderSnapshot;
  party: PartySnapshot;
  quantity: Scalars['Int'];
  status: OrderItemStatus;
  updatedAt: Scalars['DateTime'];
};

export type OrderItemSnapshotLotsArgs = {
  number?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type OrderItemSnapshotLotsCountArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export enum OrderItemStatus {
  Agreed = 'AGREED',
  ApprovalRequired = 'APPROVAL_REQUIRED',
  Canceled = 'CANCELED',
  Draft = 'DRAFT',
  ReplacementRequired = 'REPLACEMENT_REQUIRED'
}

export type OrderSnapshot = {
  __typename?: 'OrderSnapshot';
  createdAt: Scalars['DateTime'];
  destination?: Maybe<LocationSnapshot>;
  id: Scalars['ID'];
  items: Array<OrderItemSnapshot>;
  itemsCount: Scalars['Int'];
  number: Scalars['String'];
  orderedBy?: Maybe<UserType>;
  status: OrderStatus;
  statusChangedAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type OrderSnapshotItemsArgs = {
  number?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type OrderSnapshotItemsCountArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export enum OrderStatus {
  AgreedWithClient = 'AGREED_WITH_CLIENT',
  AgreedWithSupplier = 'AGREED_WITH_SUPPLIER',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Delivery = 'DELIVERY',
  Draft = 'DRAFT',
  New = 'NEW',
  Return = 'RETURN'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PartyCreateInput = {
  amount: Scalars['Int'];
  comment?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<Scalars['GqlDuration']>;
  externalId: Scalars['String'];
  factory?: InputMaybe<Scalars['String']>;
  locationId: Scalars['ID'];
  offerId: Scalars['ID'];
  photos?: InputMaybe<Array<Scalars['Uuid']>>;
  price: Scalars['BigDecimal'];
  priceWithoutVat?: InputMaybe<Scalars['BigDecimal']>;
};

export type PartyCreateResult = {
  __typename?: 'PartyCreateResult';
  party?: Maybe<PartySnapshot>;
};

export type PartyDeleteByExternalIdInput = {
  externalId: Scalars['String'];
  operationId: Scalars['Uuid'];
};

export type PartyDeleteInput = {
  operationId: Scalars['Uuid'];
  partyId: Scalars['ID'];
};

export type PartyDeleteResult = {
  __typename?: 'PartyDeleteResult';
  deletedPartyId?: Maybe<Scalars['ID']>;
  operationId: Scalars['Uuid'];
};

export type PartySetEmptyForContractorInput = {
  operationId: Scalars['Uuid'];
};

export type PartySetEmptyForLocationInput = {
  locationId: Scalars['ID'];
  operationId: Scalars['Uuid'];
};

export type PartySetEmptyResult = {
  __typename?: 'PartySetEmptyResult';
  operationId: Scalars['Uuid'];
};

export type PartySnapshot = {
  __typename?: 'PartySnapshot';
  amount: Scalars['Int'];
  available: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  deliveryTime: Scalars['GqlDuration'];
  externalId: Scalars['String'];
  factory?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  location: LocationSnapshot;
  lots: Array<LotSnapshot>;
  lotsCount: Scalars['Int'];
  myDraftOrderItems: Array<OrderItemSnapshot>;
  offer: OfferType;
  photos: Array<Scalars['Uuid']>;
  price: Scalars['BigDecimal'];
  priceWithoutVat?: Maybe<Scalars['BigDecimal']>;
  updatedAt: Scalars['DateTime'];
};

export type PartySnapshotLotsArgs = {
  number?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type PartySnapshotLotsCountArgs = {
  query?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type PartySnapshotConnection = {
  __typename?: 'PartySnapshotConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<PartySnapshotEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type PartySnapshotEdge = {
  __typename?: 'PartySnapshotEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<PartySnapshot>;
};

export type PartyUpdateInput = {
  available: Scalars['Int'];
  comment?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<Scalars['GqlDuration']>;
  externalId?: InputMaybe<Scalars['String']>;
  factory?: InputMaybe<Scalars['String']>;
  locationId?: InputMaybe<Scalars['ID']>;
  partyId: Scalars['ID'];
  photos?: InputMaybe<Array<Scalars['Uuid']>>;
  price: Scalars['BigDecimal'];
  priceWithoutVat?: InputMaybe<Scalars['BigDecimal']>;
};

export type PartyUpdateResult = {
  __typename?: 'PartyUpdateResult';
  party?: Maybe<PartySnapshot>;
};

export type PartyUpsertByExternalIdInput = {
  amount: Scalars['Int'];
  comment?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  deliveryTime?: InputMaybe<Scalars['GqlDuration']>;
  externalId: Scalars['String'];
  factory?: InputMaybe<Scalars['String']>;
  locationId: Scalars['ID'];
  offerId: Scalars['ID'];
  operationId: Scalars['Uuid'];
  photos?: InputMaybe<Array<Scalars['Uuid']>>;
  price: Scalars['BigDecimal'];
  priceWithoutVat?: InputMaybe<Scalars['BigDecimal']>;
};

export type PartyUpsertByExternalIdResult = {
  __typename?: 'PartyUpsertByExternalIdResult';
  operationId: Scalars['Uuid'];
  party?: Maybe<PartySnapshot>;
};

/** Код запчасти */
export type ProductCodeSnapshot = {
  __typename?: 'ProductCodeSnapshot';
  /** Нормализованный код запчаасти */
  normalized: NormalizedProductCodeSnapshot;
  /** Оригинальный код запчасти */
  original: Scalars['String'];
};

/** Объект для создания новой запчасти */
export type ProductCreateInput = {
  /** Описание */
  description: Scalars['String'];
  /** Код запчасти */
  displayCode: Scalars['String'];
  /** Высота запчасти */
  height?: InputMaybe<Scalars['Int']>;
  /** Длина запчасти */
  length?: InputMaybe<Scalars['Int']>;
  /** Производитель */
  manufacturer: Scalars['String'];
  /** Код запчасти, нормализованный */
  normalizedCode: Scalars['String'];
  /** Признак оригинальности */
  origin: ProductOrigin;
  /** Массив ключей фотографий запчасти */
  photos: Array<Scalars['Uuid']>;
  /** Наименование */
  title: Scalars['String'];
  /** Вес запчасти */
  weight?: InputMaybe<Scalars['Int']>;
  /** Ширина запчасти */
  width?: InputMaybe<Scalars['Int']>;
};

/** Результат создания запчасти */
export type ProductCreateResult = {
  __typename?: 'ProductCreateResult';
  product?: Maybe<ProductType>;
};

/** Объект для удаления запчасти */
export type ProductDeleteInput = {
  /** Идентификатор запчасти */
  id: Scalars['ID'];
};

/** Результат удаления запчасти */
export type ProductDeleteResult = {
  __typename?: 'ProductDeleteResult';
  /** Идентификатор запчасти */
  deletedProductId?: Maybe<Scalars['ID']>;
};

/** Объект для создания связи запчасти с моделью техники */
export type ProductModelBindingCreateInput = {
  /** Идентификатор модели техники */
  equipmentModelId: Scalars['ID'];
  /** Идентификатор запчасти */
  productId: Scalars['ID'];
};

/** Результат создания связи запчасти с моделью техники */
export type ProductModelBindingCreateResult = {
  __typename?: 'ProductModelBindingCreateResult';
  productModelBinding?: Maybe<ProductModelBindingType>;
};

/** Объект для удаления связи запчасти с моделью техники */
export type ProductModelBindingDeleteInput = {
  /** Идентификатор связи */
  id: Scalars['ID'];
};

/** Результат удаления связи запчасти с моделью техники */
export type ProductModelBindingDeleteResult = {
  __typename?: 'ProductModelBindingDeleteResult';
  /** Идентификатор связи */
  deletedProductModelBindingId?: Maybe<Scalars['ID']>;
};

/** Связь запчасти и модели техники */
export type ProductModelBindingType = {
  __typename?: 'ProductModelBindingType';
  /** Дата создания связи */
  createdAt: Scalars['DateTime'];
  /** Идентификатор связи */
  id: Scalars['ID'];
  /** Модель техники */
  model: EquipmentModelType;
  /** Запчасть */
  product: ProductType;
};

/** A connection to a list of items. */
export type ProductModelBindingTypeConnection = {
  __typename?: 'ProductModelBindingTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<ProductModelBindingTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type ProductModelBindingTypeEdge = {
  __typename?: 'ProductModelBindingTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ProductModelBindingType>;
};

/** Объект для создания связи запчасти и предложения поставщика */
export type ProductOfferCreateInput = {
  /** Идентификатор предложения */
  offerId: Scalars['ID'];
  /** Идентификатор запчасти */
  productId: Scalars['ID'];
};

/** Результат создания связи запчасти и предложения поставщика */
export type ProductOfferCreateResult = {
  __typename?: 'ProductOfferCreateResult';
  productOffer?: Maybe<ProductOfferType>;
};

/** Объект связка запчасти и предложения поставщика */
export type ProductOfferType = {
  __typename?: 'ProductOfferType';
  createdAt: Scalars['DateTime'];
  /** Идентификатор связки */
  id: Scalars['ID'];
  /** Предложение поставщика */
  offer: OfferType;
  /** Запчасть */
  product: ProductType;
};

/** A connection to a list of items. */
export type ProductOfferTypeConnection = {
  __typename?: 'ProductOfferTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<ProductOfferTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type ProductOfferTypeEdge = {
  __typename?: 'ProductOfferTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ProductOfferType>;
};

export enum ProductOrigin {
  Duplicate = 'DUPLICATE',
  Oem = 'OEM',
  Original = 'ORIGINAL',
  Unknown = 'UNKNOWN'
}

export enum ProductState {
  New = 'NEW',
  Restored = 'RESTORED',
  Unknown = 'UNKNOWN',
  Used = 'USED'
}

/** Запчасть к спец технике */
export type ProductType = {
  __typename?: 'ProductType';
  cheapestOption?: Maybe<CustomerSearchResultItemSnapshot>;
  /** Дата создания записи */
  createdAt: Scalars['DateTime'];
  /** Описание */
  description: Scalars['String'];
  /** Код запчасти */
  displayCode: Scalars['String'];
  /** Высота запчасти */
  height?: Maybe<Scalars['Int']>;
  /** Идентификатор запчасти */
  id: Scalars['ID'];
  /** Длина запчасти */
  length?: Maybe<Scalars['Int']>;
  /** Производитель */
  manufacturer: Scalars['String'];
  /** Модели техники к которым подходит запчасть */
  modelsBinding: ProductModelBindingTypeConnection;
  /** Нормализованный код запчасти */
  normalizedCode: Scalars['String'];
  /** Предложения поставщиков связанные с этой запчастью */
  offers: ProductOfferTypeConnection;
  /** Признак оригинальности запчасти */
  origin: ProductOrigin;
  /** Массив ключей фотографий, фото хранятся в файловом хранилище, доступ через сервис file-storage */
  photos: Array<Scalars['Uuid']>;
  /** Наименование */
  title: Scalars['String'];
  /** Дата последнего изменения записи */
  updatedAt: Scalars['DateTime'];
  /** Вес запчасти */
  weight?: Maybe<Scalars['Int']>;
  /** Ширина запчасти */
  width?: Maybe<Scalars['Int']>;
};

/** Запчасть к спец технике */
export type ProductTypeModelsBindingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** Запчасть к спец технике */
export type ProductTypeOffersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type ProductTypeConnection = {
  __typename?: 'ProductTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<ProductTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type ProductTypeEdge = {
  __typename?: 'ProductTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ProductType>;
};

/** Объект для изменения запчасти */
export type ProductUpdateInput = {
  /** Описание */
  description: Scalars['String'];
  /** Код запчасти */
  displayCode: Scalars['String'];
  /** Высота запчасти */
  height?: InputMaybe<Scalars['Int']>;
  /** Идентификатор запчасти */
  id: Scalars['ID'];
  /** Длина запчасти */
  length?: InputMaybe<Scalars['Int']>;
  /** Производитель */
  manufacturer: Scalars['String'];
  /** Код запчасти, нормализованный */
  normalizedCode: Scalars['String'];
  /** Признак оригинальности */
  origin: ProductOrigin;
  /** Массив ключей фотографий запчасти */
  photos: Array<Scalars['Uuid']>;
  /** Наименование */
  title: Scalars['String'];
  /** Вес запчасти */
  weight?: InputMaybe<Scalars['Int']>;
  /** Ширина запчасти */
  width?: InputMaybe<Scalars['Int']>;
};

/** Результат изменения запчасти */
export type ProductUpdateResult = {
  __typename?: 'ProductUpdateResult';
  product?: Maybe<ProductType>;
};

export type PublicStatsSnapshot = {
  __typename?: 'PublicStatsSnapshot';
  /** Количество зарегистрированных покупателей */
  customersCount: Scalars['Int'];
  /** Количество предложений */
  offersCount: Scalars['Int'];
  /** Количество зарегистрированных поставщиков */
  suppliersCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  contractor?: Maybe<ContractorType>;
  contractorRole?: Maybe<ContractorRoleType>;
  contractorRoleBinding?: Maybe<ContractorRoleBindingType>;
  contractorRoles: ContractorRoleTypeConnection;
  contractors: ContractorTypeConnection;
  contractorsCount: Scalars['Int'];
  customerSearch: CustomerSearchResult;
  customerSearchResultItemSnapshot?: Maybe<CustomerSearchResultItemSnapshot>;
  customerSearchSimple: CustomerSearchResultItemSnapshotConnection;
  /** Запрос класса техники по идентификатору */
  equipmentClass?: Maybe<EquipmentClassType>;
  /** Запрос списка классов техники */
  equipmentClasses: EquipmentClassTypeConnection;
  /** Запрос модели по идентификатору */
  equipmentModel?: Maybe<EquipmentModelType>;
  /** Запрос списка моделей техники */
  equipmentModels: EquipmentModelTypeConnection;
  /** Запрос избранной запчасти по идентификатору, доступны только избранные запчасти организации прописанной в  токене */
  favoriteProduct?: Maybe<FavoriteProductType>;
  location?: Maybe<LocationSnapshot>;
  locationsCount: Scalars['Int'];
  lot: LotSnapshot;
  /** Запрос производителя техники по идентификатору */
  manufacturer?: Maybe<ManufacturerType>;
  /** Запрос производителей техники */
  manufacturers: ManufacturerTypeConnection;
  me?: Maybe<UserType>;
  myContractor?: Maybe<ContractorType>;
  /** Запрос предложения по идентификатору */
  offer?: Maybe<OfferType>;
  /** Запрос счетчика количества показов по идентификатору */
  offerSearchCounter?: Maybe<OfferSearchCounterType>;
  offersCount: Scalars['Int'];
  order: OrderSnapshot;
  orderItem: OrderItemSnapshot;
  orders: Array<OrderSnapshot>;
  party: PartySnapshot;
  /** Запрос запчасти по идентификатору */
  product?: Maybe<ProductType>;
  /** Запрос связи по идентификатору */
  productModel?: Maybe<ProductModelBindingType>;
  /** Запрос по идентификатору связки запчасти и предложения поставщика */
  productOffer?: Maybe<ProductOfferType>;
  /** Запрос запчастей */
  products: ProductTypeConnection;
  /** Группа публичных метрик маркетплейса */
  publicStats: PublicStatsSnapshot;
  /** Запрос отчета по идентификатору */
  report?: Maybe<ReportType>;
  selectedItem: SelectedItemSnapshot;
  selection: SelectionSnapshot;
  selectionRequest: SelectionRequestSnapshot;
  token?: Maybe<TokenType>;
  user?: Maybe<UserType>;
  userAuthenticatedByPassword?: Maybe<AuthorizedUserSnapshot>;
  userRoleBinding?: Maybe<UserRoleBindingType>;
  vendorSearch: CustomerSearchResultItemSnapshotConnection;
};

export type QueryContractorArgs = {
  id: Scalars['ID'];
};

export type QueryContractorRoleArgs = {
  id: Scalars['ID'];
};

export type QueryContractorRoleBindingArgs = {
  id: Scalars['ID'];
};

export type QueryContractorRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QueryContractorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QueryContractorsCountArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export type QueryCustomerSearchArgs = {
  count?: InputMaybe<Scalars['Int']>;
  searchText?: InputMaybe<Scalars['String']>;
};

export type QueryCustomerSearchResultItemSnapshotArgs = {
  id: Scalars['ID'];
};

export type QueryCustomerSearchSimpleArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QueryEquipmentClassArgs = {
  id: Scalars['ID'];
};

export type QueryEquipmentClassesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QueryEquipmentModelArgs = {
  id: Scalars['ID'];
};

export type QueryEquipmentModelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QueryFavoriteProductArgs = {
  id: Scalars['ID'];
};

export type QueryLocationArgs = {
  id: Scalars['ID'];
};

export type QueryLocationsCountArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export type QueryLotArgs = {
  id: Scalars['ID'];
};

export type QueryManufacturerArgs = {
  id: Scalars['ID'];
};

export type QueryManufacturersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QueryOfferArgs = {
  id: Scalars['ID'];
};

export type QueryOfferSearchCounterArgs = {
  id: Scalars['ID'];
};

export type QueryOffersCountArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export type QueryOrderArgs = {
  id: Scalars['ID'];
};

export type QueryOrderItemArgs = {
  id: Scalars['ID'];
};

export type QueryOrdersArgs = {
  number?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QueryPartyArgs = {
  id: Scalars['ID'];
};

export type QueryProductArgs = {
  id: Scalars['ID'];
};

export type QueryProductModelArgs = {
  id: Scalars['ID'];
};

export type QueryProductOfferArgs = {
  id: Scalars['ID'];
};

export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export type QueryReportArgs = {
  id: Scalars['ID'];
};

export type QuerySelectedItemArgs = {
  fqdn: Scalars['ID'];
};

export type QuerySelectionArgs = {
  fqdn: Scalars['ID'];
};

export type QuerySelectionRequestArgs = {
  fqdn: Scalars['ID'];
};

export type QueryTokenArgs = {
  id: Scalars['ID'];
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryUserAuthenticatedByPasswordArgs = {
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type QueryUserRoleBindingArgs = {
  id: Scalars['ID'];
};

export type QueryVendorSearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** Объект для создания новой отчета */
export type ReportCreateInput = {
  /** Id организации для которой создается отчет */
  contractorId: Scalars['ID'];
  /** Дата начала */
  dateFrom: Scalars['DateTime'];
  /** Дата окончания */
  dateTo: Scalars['DateTime'];
  /** Тип отчета */
  species: ReportSpecies;
};

/** Результат создания отчета */
export type ReportCreateResult = {
  __typename?: 'ReportCreateResult';
  report?: Maybe<ReportType>;
};

/** Объект для удаления отчета */
export type ReportDeleteInput = {
  /** Идентификатор отчета */
  id: Scalars['ID'];
};

/** Результат удаления отчета */
export type ReportDeleteResult = {
  __typename?: 'ReportDeleteResult';
  /** Идентификатор отчета */
  deletedReportId?: Maybe<Scalars['ID']>;
};

export enum ReportSpecies {
  OffersSearchCounter = 'OFFERS_SEARCH_COUNTER'
}

/** Отчет по количеству показов предложений поставщика в результатах поиска */
export type ReportType = {
  __typename?: 'ReportType';
  /** Организация запросившая отчет */
  contractor: ContractorType;
  /** Дата создания записи */
  createdAt: Scalars['DateTime'];
  /** Идентификатор отчета */
  id: Scalars['ID'];
  /** Ключ для запроса файла отчета в файловом хранилище */
  reportFileKey?: Maybe<Scalars['String']>;
  /** Статус отчета */
  status: Scalars['String'];
  /** Наименование отчета */
  title: Scalars['String'];
  /** Дата последнего изменения записи */
  updatedAt: Scalars['DateTime'];
};

/** A connection to a list of items. */
export type ReportTypeConnection = {
  __typename?: 'ReportTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<ReportTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type ReportTypeEdge = {
  __typename?: 'ReportTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ReportType>;
};

export type SelectedItemCreateInput = {
  partyFQDN: Scalars['ID'];
  quantity: Scalars['Int'];
  selectionFQDN: Scalars['ID'];
};

export type SelectedItemCreateResult = {
  __typename?: 'SelectedItemCreateResult';
  selectedItem: SelectedItemSnapshot;
};

export type SelectedItemDeleteResult = {
  __typename?: 'SelectedItemDeleteResult';
  deletedSelectedItemId?: Maybe<Scalars['ID']>;
};

export type SelectedItemSnapshot = {
  __typename?: 'SelectedItemSnapshot';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  party: PartySnapshot;
  quantity: Scalars['Int'];
  selection: SelectionSnapshot;
  updatedAt: Scalars['DateTime'];
};

export type SelectedItemUpdateInput = {
  quantity: Scalars['Int'];
  selectedItemFQDN: Scalars['ID'];
};

export type SelectedItemUpdateResult = {
  __typename?: 'SelectedItemUpdateResult';
  selectedItem: SelectedItemSnapshot;
};

export type SelectionCreateInput = {
  desiredQuantity: Scalars['Int'];
  manufacturer: Scalars['String'];
  productCode: Scalars['String'];
  selectionRequestFQDN: Scalars['ID'];
  title: Scalars['String'];
};

export type SelectionCreateManyInput = {
  selectionRequestId: Scalars['ID'];
  selections: Array<SelectionInput>;
};

export type SelectionCreateManyResult = {
  __typename?: 'SelectionCreateManyResult';
  selections: Array<SelectionSnapshot>;
};

export type SelectionCreateResult = {
  __typename?: 'SelectionCreateResult';
  selection: SelectionSnapshot;
};

export type SelectionDeleteResult = {
  __typename?: 'SelectionDeleteResult';
  deletedSelectionId?: Maybe<Scalars['ID']>;
};

export type SelectionInput = {
  desiredQuantity: Scalars['Int'];
  manufacturer: Scalars['String'];
  productCode: Scalars['String'];
  title: Scalars['String'];
};

export type SelectionRequestCreateInput = {
  comment: Scalars['String'];
  selections?: InputMaybe<Array<SelectionInput>>;
};

export type SelectionRequestCreateResult = {
  __typename?: 'SelectionRequestCreateResult';
  selectionRequest: SelectionRequestSnapshot;
};

export type SelectionRequestDeleteResult = {
  __typename?: 'SelectionRequestDeleteResult';
  deletedSelectionRequestId?: Maybe<Scalars['ID']>;
};

export type SelectionRequestSnapshot = {
  __typename?: 'SelectionRequestSnapshot';
  comment?: Maybe<Scalars['String']>;
  contractor: ContractorType;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  selections: Array<SelectionSnapshot>;
  status: SelectionRequestStatus;
  updatedAt: Scalars['DateTime'];
};

export type SelectionRequestSnapshotSelectionsArgs = {
  number?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export enum SelectionRequestStatus {
  InWork = 'IN_WORK',
  New = 'NEW'
}

export type SelectionRequestUpdateInput = {
  comment: Scalars['String'];
  selectionRequestFQDN: Scalars['ID'];
  status: Scalars['String'];
};

export type SelectionRequestUpdateResult = {
  __typename?: 'SelectionRequestUpdateResult';
  selectionRequest: SelectionRequestSnapshot;
};

export type SelectionSnapshot = {
  __typename?: 'SelectionSnapshot';
  createdAt: Scalars['DateTime'];
  desiredQuantity: Scalars['Int'];
  id: Scalars['ID'];
  items: Array<SelectedItemSnapshot>;
  manufacturer: Scalars['String'];
  offeredParties: Array<PartySnapshot>;
  productCode: Scalars['String'];
  selectionRequest: SelectionRequestSnapshot;
  status: SelectionStatus;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SelectionSnapshotItemsArgs = {
  number?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

export enum SelectionStatus {
  InWork = 'IN_WORK',
  New = 'NEW'
}

export type SelectionUpdateInput = {
  desiredQuantity: Scalars['Int'];
  offeredPartyIds: Array<Scalars['ID']>;
  selectionFQDN: Scalars['ID'];
  status: SelectionStatus;
  title: Scalars['String'];
};

export type SelectionUpdateResult = {
  __typename?: 'SelectionUpdateResult';
  selection: SelectionSnapshot;
};

export type TokenCreateInput = {
  description: Scalars['String'];
  title: Scalars['String'];
  userId: Scalars['ID'];
};

export type TokenCreateResult = {
  __typename?: 'TokenCreateResult';
  token?: Maybe<TokenType>;
  tokenData?: Maybe<Scalars['String']>;
};

export type TokenDeleteInput = {
  id: Scalars['ID'];
};

export type TokenDeleteResult = {
  __typename?: 'TokenDeleteResult';
  deletedTokenId?: Maybe<Scalars['ID']>;
};

export type TokenType = {
  __typename?: 'TokenType';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  hash: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type UserBindRoleInput = {
  id: Scalars['ID'];
  roleId: Scalars['ID'];
  subjectContractorId?: InputMaybe<Scalars['ID']>;
};

export type UserBindRoleResult = {
  __typename?: 'UserBindRoleResult';
  roleBinding?: Maybe<UserRoleBindingType>;
};

export type UserCreateInput = {
  contractorId: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  middleName: Scalars['String'];
  phone: Scalars['String'];
};

export type UserCreateResult = {
  __typename?: 'UserCreateResult';
  user?: Maybe<UserType>;
};

export type UserDeleteInput = {
  id: Scalars['ID'];
};

export type UserDeleteResult = {
  __typename?: 'UserDeleteResult';
  deletedUserId?: Maybe<Scalars['ID']>;
};

export type UserRoleBindingType = {
  __typename?: 'UserRoleBindingType';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  role: UserRoleType;
  subjectContractor?: Maybe<ContractorType>;
};

/** A connection to a list of items. */
export type UserRoleBindingTypeConnection = {
  __typename?: 'UserRoleBindingTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<UserRoleBindingTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type UserRoleBindingTypeEdge = {
  __typename?: 'UserRoleBindingTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<UserRoleBindingType>;
};

export type UserRoleType = {
  __typename?: 'UserRoleType';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  permissions: Scalars['Permissions'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/** A connection to a list of items. */
export type UserRoleTypeConnection = {
  __typename?: 'UserRoleTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<UserRoleTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type UserRoleTypeEdge = {
  __typename?: 'UserRoleTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<UserRoleType>;
};

export type UserType = {
  __typename?: 'UserType';
  contractor: ContractorType;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  middleName: Scalars['String'];
  phone: Scalars['String'];
  roleBindings: UserRoleBindingTypeConnection;
  updatedAt: Scalars['DateTime'];
};

export type UserTypeRoleBindingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type UserTypeConnection = {
  __typename?: 'UserTypeConnection';
  /** a list of edges */
  edges?: Maybe<Array<Maybe<UserTypeEdge>>>;
  /** details about this specific page */
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type UserTypeEdge = {
  __typename?: 'UserTypeEdge';
  /** cursor marks a unique position or index into the connection */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<UserType>;
};

export type UserUnbindRoleInput = {
  id: Scalars['ID'];
};

export type UserUnbindRoleResult = {
  __typename?: 'UserUnbindRoleResult';
  deletedRoleBindingId?: Maybe<Scalars['ID']>;
};

export type UserUpdateInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  middleName: Scalars['String'];
  phone: Scalars['String'];
};

export type UserUpdateResult = {
  __typename?: 'UserUpdateResult';
  user?: Maybe<UserType>;
};

export type UserQueryVariables = Types.Exact<{
  userId: Types.Scalars['ID'];
}>;

export type UserQuery = {
  __typename?: 'Query';
  user?: {
    __typename?: 'UserType';
    roleBindings: {
      __typename?: 'UserRoleBindingTypeConnection';
      edges?: Array<{
        __typename?: 'UserRoleBindingTypeEdge';
        node?: { __typename?: 'UserRoleBindingType'; id: string } | null;
      } | null> | null;
    };
  } | null;
};

export type UserUpdateMutationVariables = Types.Exact<{
  input: Types.UserUpdateInput;
}>;

export type UserUpdateMutation = {
  __typename?: 'Mutation';
  userUpdate: {
    __typename?: 'UserUpdateResult';
    user?: {
      __typename?: 'UserType';
      phone: string;
      middleName: string;
      lastName: string;
      id: string;
      email: string;
      firstName: string;
    } | null;
  };
};

export type UserCreateMutationVariables = Types.Exact<{
  input: Types.UserCreateInput;
}>;

export type UserCreateMutation = {
  __typename?: 'Mutation';
  userCreate: {
    __typename?: 'UserCreateResult';
    user?: {
      __typename?: 'UserType';
      lastName: string;
      middleName: string;
      firstName: string;
      email: string;
      id: string;
      phone: string;
      roleBindings: {
        __typename?: 'UserRoleBindingTypeConnection';
        edges?: Array<{
          __typename?: 'UserRoleBindingTypeEdge';
          node?: {
            __typename?: 'UserRoleBindingType';
            id: string;
            role: { __typename?: 'UserRoleType'; id: string; description: string; slug: string; title: string };
          } | null;
        } | null> | null;
      };
    } | null;
  };
};

export type UserBindRoleMutationVariables = Types.Exact<{
  input: Types.UserBindRoleInput;
}>;

export type UserBindRoleMutation = {
  __typename?: 'Mutation';
  userBindRole: {
    __typename?: 'UserBindRoleResult';
    roleBinding?: {
      __typename?: 'UserRoleBindingType';
      id: string;
      role: { __typename?: 'UserRoleType'; title: string; id: string; slug: string };
    } | null;
  };
};

export type UserUnbindRoleMutationVariables = Types.Exact<{
  input: Types.UserUnbindRoleInput;
}>;

export type UserUnbindRoleMutation = {
  __typename?: 'Mutation';
  userUnbindRole: { __typename?: 'UserUnbindRoleResult'; deletedRoleBindingId?: string | null };
};

export type UserDeleteMutationVariables = Types.Exact<{
  input: Types.UserDeleteInput;
}>;

export type UserDeleteMutation = {
  __typename?: 'Mutation';
  userDelete: { __typename?: 'UserDeleteResult'; deletedUserId?: string | null };
};

export const UserDocument = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      roleBindings {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserQuery(baseOptions: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UserUpdateDocument = gql`
  mutation UserUpdate($input: UserUpdateInput!) {
    userUpdate(input: $input) {
      user {
        phone
        middleName
        lastName
        id
        email
        firstName
      }
    }
  }
`;
export type UserUpdateMutationFn = Apollo.MutationFunction<UserUpdateMutation, UserUpdateMutationVariables>;

/**
 * __useUserUpdateMutation__
 *
 * To run a mutation, you first call `useUserUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUpdateMutation, { data, loading, error }] = useUserUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserUpdateMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UserUpdateMutation, UserUpdateMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<UserUpdateMutation, UserUpdateMutationVariables>(UserUpdateDocument, options);
}
export type UserUpdateMutationHookResult = ReturnType<typeof useUserUpdateMutation>;
export type UserUpdateMutationResult = Apollo.MutationResult<UserUpdateMutation>;
export type UserUpdateMutationOptions = Apollo.BaseMutationOptions<UserUpdateMutation, UserUpdateMutationVariables>;
export const UserCreateDocument = gql`
  mutation UserCreate($input: UserCreateInput!) {
    userCreate(input: $input) {
      user {
        lastName
        middleName
        firstName
        email
        id
        phone
        roleBindings {
          edges {
            node {
              id
              role {
                id
                description
                slug
                title
              }
            }
          }
        }
      }
    }
  }
`;
export type UserCreateMutationFn = Apollo.MutationFunction<UserCreateMutation, UserCreateMutationVariables>;

/**
 * __useUserCreateMutation__
 *
 * To run a mutation, you first call `useUserCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userCreateMutation, { data, loading, error }] = useUserCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserCreateMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UserCreateMutation, UserCreateMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<UserCreateMutation, UserCreateMutationVariables>(UserCreateDocument, options);
}
export type UserCreateMutationHookResult = ReturnType<typeof useUserCreateMutation>;
export type UserCreateMutationResult = Apollo.MutationResult<UserCreateMutation>;
export type UserCreateMutationOptions = Apollo.BaseMutationOptions<UserCreateMutation, UserCreateMutationVariables>;
export const UserBindRoleDocument = gql`
  mutation UserBindRole($input: UserBindRoleInput!) {
    userBindRole(input: $input) {
      roleBinding {
        id
        role {
          title
          id
          slug
        }
      }
    }
  }
`;
export type UserBindRoleMutationFn = Apollo.MutationFunction<UserBindRoleMutation, UserBindRoleMutationVariables>;

/**
 * __useUserBindRoleMutation__
 *
 * To run a mutation, you first call `useUserBindRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserBindRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userBindRoleMutation, { data, loading, error }] = useUserBindRoleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserBindRoleMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UserBindRoleMutation, UserBindRoleMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<UserBindRoleMutation, UserBindRoleMutationVariables>(
    UserBindRoleDocument,
    options
  );
}
export type UserBindRoleMutationHookResult = ReturnType<typeof useUserBindRoleMutation>;
export type UserBindRoleMutationResult = Apollo.MutationResult<UserBindRoleMutation>;
export type UserBindRoleMutationOptions = Apollo.BaseMutationOptions<
  UserBindRoleMutation,
  UserBindRoleMutationVariables
>;
export const UserUnbindRoleDocument = gql`
  mutation UserUnbindRole($input: UserUnbindRoleInput!) {
    userUnbindRole(input: $input) {
      deletedRoleBindingId
    }
  }
`;
export type UserUnbindRoleMutationFn = Apollo.MutationFunction<UserUnbindRoleMutation, UserUnbindRoleMutationVariables>;

/**
 * __useUserUnbindRoleMutation__
 *
 * To run a mutation, you first call `useUserUnbindRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserUnbindRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUnbindRoleMutation, { data, loading, error }] = useUserUnbindRoleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserUnbindRoleMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UserUnbindRoleMutation, UserUnbindRoleMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<UserUnbindRoleMutation, UserUnbindRoleMutationVariables>(
    UserUnbindRoleDocument,
    options
  );
}
export type UserUnbindRoleMutationHookResult = ReturnType<typeof useUserUnbindRoleMutation>;
export type UserUnbindRoleMutationResult = Apollo.MutationResult<UserUnbindRoleMutation>;
export type UserUnbindRoleMutationOptions = Apollo.BaseMutationOptions<
  UserUnbindRoleMutation,
  UserUnbindRoleMutationVariables
>;
export const UserDeleteDocument = gql`
  mutation UserDelete($input: UserDeleteInput!) {
    userDelete(input: $input) {
      deletedUserId
    }
  }
`;
export type UserDeleteMutationFn = Apollo.MutationFunction<UserDeleteMutation, UserDeleteMutationVariables>;

/**
 * __useUserDeleteMutation__
 *
 * To run a mutation, you first call `useUserDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userDeleteMutation, { data, loading, error }] = useUserDeleteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserDeleteMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UserDeleteMutation, UserDeleteMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<UserDeleteMutation, UserDeleteMutationVariables>(UserDeleteDocument, options);
}
export type UserDeleteMutationHookResult = ReturnType<typeof useUserDeleteMutation>;
export type UserDeleteMutationResult = Apollo.MutationResult<UserDeleteMutation>;
export type UserDeleteMutationOptions = Apollo.BaseMutationOptions<UserDeleteMutation, UserDeleteMutationVariables>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {}
};
export default result;
