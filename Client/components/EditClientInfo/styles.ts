import styled from '@emotion/styled';

import { device } from 'src/variables/variables';

export const EditUserInfoWrapper = styled.div`
  @media ${device.mobile} {
    width: 100%;
    padding-bottom: 1rem;
  }
`;
export const EditUserForm = styled.form``;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 18.6rem;
  @media ${device.mobile} {
    margin-left: 0;
    justify-content: space-between;
  }
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.7rem;
  height: 3.2rem;
  font-family: Roboto, Arial, sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  background-color: #00737c;
  border-radius: 0.4rem;
  color: #ffffff;
  cursor: pointer;
  border: none;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d13239;
  border-radius: 0.4rem;
  background-color: #f9f9f9;
  margin-left: 1rem;
  border: none;
  font-family: Roboto, Arial, sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  cursor: pointer;
  svg {
    margin-right: 1rem;
  }
  @media ${device.mobile} {
    height: 3.2rem;
  }
`;
