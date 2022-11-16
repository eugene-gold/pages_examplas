import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import getConfig from 'next/config';

import {
  CatalogWrapper,
  ContainerHeader,
  Card,
  Cards,
  CardDescription,
  CardLogo,
  CardTitle,
  Title,
  EditCatalog,
  EditTitle
} from './styles';

const { publicRuntimeConfig } = getConfig();

import { EquipmentClassTypeEdge, useCatalogCategoriesQuery } from './graphql/Catalog.generated';
import { getCategoriesList } from './helpers/getCategoriesList';

export const CatalogContainer: FC = () => {
  const { data } = useCatalogCategoriesQuery();
  return (
    <CatalogWrapper>
      <ContainerHeader>
        <Title>
          Каталог <span>техники</span>
        </Title>
        {/*<EditCatalog>*/}
        {/*  <SVGTumbler width="3.3rem" height="1.9rem" />*/}
        {/*  <EditTitle>Редактировать каталог</EditTitle>*/}
        {/*</EditCatalog>*/}
      </ContainerHeader>

      <Cards>
        {getCategoriesList(data?.equipmentClasses?.edges as Array<EquipmentClassTypeEdge>).map((category, key) => (
          <Link key={key} href={`/catalog/${category?.node?.slug}`}>
            <Card>
              <CardLogo>
                <Image
                  layout="fill"
                  alt="category"
                  src={
                    category?.node?.photos[0]
                      ? `${publicRuntimeConfig?.marketplaceFilesUrl}/${category?.node?.photos[0]}`
                      : '/images/gears_default.svg'
                  }
                />
              </CardLogo>
              <CardTitle>
                <span>{category?.node?.title}</span>
              </CardTitle>
              <CardDescription>{category?.node?.comment}</CardDescription>
            </Card>
          </Link>
        ))}
      </Cards>
    </CatalogWrapper>
  );
};
