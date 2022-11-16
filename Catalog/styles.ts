import styled from '@emotion/styled';

import { device } from 'src/variables/variables';

export const CatalogWrapper = styled.section``;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: 2.6rem;
  margin-top: 3.2rem;
  margin-right: 3.4rem;
  @media ${device.mobile} {
    margin-left: 1.5rem;
    margin-top: 1.9rem;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-family: 'Montserrat', Roboto, Arial, sans-serif;
  font-weight: 800;
  font-size: 3.6rem;
  line-height: 2.9rem;
  color: #000000;
  @media ${device.mobile} {
    font-size: 2.8rem;
  }
  span {
    @media ${device.mobile} {
      display: none;
    }
  }
`;

export const EditCatalog = styled.div`
  display: flex;
  align-items: center;
`;

export const EditTitle = styled.h3`
  margin: 0;
  margin-left: 1rem;
  font-family: Roboto, Arial, sans-serif;
  font-style: normal;
  font-size: 1.4rem;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 1.6rem;
  grid-row-gap: 1.6rem;
  margin-top: 5rem;
  margin-left: 1.7rem;
  padding: 1rem;
  max-height: calc(100vh - 20rem);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
  scrollbar-width: none;
  @media ${device.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(17.6rem, 1fr));
    grid-column-gap: 0.2rem;
    grid-row-gap: 0.2rem;
    margin: 1.9rem 1rem 1rem;
    padding: 0;
  }
`;

export const Card = styled.div`
  padding: 2rem 2.1rem 0.4rem 2.9rem;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(60, 155, 147, 0.2);
  cursor: pointer;
  @media ${device.mobile} {
    padding: 0;
    min-height: 12.4rem;
  }
`;

export const CardLogo = styled.div`
  position: relative;
  margin-right: 0.3rem;
  width: 9.1rem;
  height: 9.1rem;
  align-self: end;
  @media ${device.mobile} {
    width: 6.2rem;
    height: 6.2rem;
    margin-top: 1.7rem;
    margin-right: 1.6rem;
  }
`;

export const CardTitle = styled.h2`
  margin: 0;
  margin-top: 2.3rem;
  font-family: Roboto, Arial, sans-serif;
  font-style: normal;
  font-size: 1.6rem;
  line-height: 2.9rem;
  color: #000000;
  @media ${device.mobile} {
    font-size: 1.6rem;
    margin: 1rem 7.5rem 2.1rem 1.8rem;
    line-height: inherit;
  }
`;

export const CardDescription = styled.p`
  margin: 0;
  margin-top: 2rem;
  font-family: Roboto, Arial, sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #626262;
  padding-bottom: 3.7rem;
  @media ${device.mobile} {
    display: none;
  }
`;
