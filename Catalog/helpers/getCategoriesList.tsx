import { EquipmentClassTypeEdge } from '../graphql/Catalog.generated';

export const getCategoriesList = (categories: Array<EquipmentClassTypeEdge>) => {
  if (!categories || !categories?.length) return [];
  const others = categories.find((model) => model?.node?.slug === 'Other equipment');
  return others ? [...categories.filter((model) => model?.node?.slug !== 'Other equipment'), others] : categories;
};
