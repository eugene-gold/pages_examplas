import styled from '@emotion/styled';

import { device } from 'src/variables/variables';
import { _SelectMain } from 'src/ui/modules/Select/styles';

type InputProps = {
  isInvalid?: boolean | undefined;
};

export const Input = styled.input<InputProps>``;

export const ClientContainerWrapper = styled.div`
  margin-left: 2rem;
  @media ${device.mobile} {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 0.8rem;
  }
`;

export const Title = styled.h2`
  font-family: Montserrat, Arial, sans-serif;
  font-weight: 800;
  font-size: 3.6rem;
  line-height: 2.9rem;
  color: #000000;
  display: flex;
  align-items: flex-end;
  margin-top: 3.2rem;
  @media ${device.mobile} {
    margin-top: 0;
    font-size: 2.8rem;
  }
`;

export const Role = styled.span`
  width: 11.8rem;
  height: 2.2rem;
  margin-left: 2.3rem;
  background-color: #dd951b;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  font-family: Roboto, Arial, sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1rem;
  color: #ffffff;
  @media ${device.mobile} {
    font-size: 1rem;
    margin-left: 1.4rem;
    margin-bottom: 2rem;
    width: 8.3rem;
    height: 2rem;
    align-self: flex-start;
    padding: 0 0.5rem;
  }
`;

type UserFormCursorProps = {
  canBeDeleted?: boolean;
};

export const FormTitle = styled.h3<UserFormCursorProps>`
  font-family: Roboto, Arial, sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2rem;
  color: #000000;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  svg {
    cursor: ${(props) => (props.canBeDeleted ? 'pointer' : 'auto')};
    fill: #d13239;
    opacity: ${(props) => (props.canBeDeleted ? '1' : '0.4')};
    pointer-events: ${(props) => (props.canBeDeleted ? 'all' : 'none')};
  }
  div:first-child {
    opacity: 20%;
    display: flex;
    align-items: center;
    span:first-child {
      text-decoration: line-through;
    }
    span:last-child {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2rem;
      margin-left: 1rem;
    }
  }
  div:last-child {
    display: flex;
    align-items: center;
    span {
      font-weight: 500;
      font-size: 1.4rem;
      margin-right: 1rem;
      color: #00737c;
    }
    @media ${device.mobile} {
      display: none;
    }
  }
`;

type UserFormInputProps = {
  isDisabled?: boolean;
};

export const UserFormInput = styled.div<UserFormInputProps>`
  display: flex;
  align-items: center;
  margin-right: 13rem;
  width: 52.6rem;
  margin-bottom: 1.8rem;
  @media ${device.mobile} {
    margin-bottom: 1.4rem;
    width: 100%;
    &:last-child {
      margin-bottom: 0;
    }
    &:nth-child(2) {
      display: none;
    }
    ${Input} {
      width: 100%;
    }
    ${_SelectMain} {
      width: 100%;
    }
  }
  input {
    width: 34rem;
    height: 4rem;
    border-radius: 0.3rem;
    border: 1px solid #e5e5e5;
    font-family: Roboto, Arial, sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    color: #000000;
    padding-left: 1.3rem;
    background: ${(props) => (props.isDisabled ? '#EBEBEB' : '#FFFFFF')};
    &:focus {
      outline: none;
    }
  }

  label {
    font-family: Roboto, Arial, sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    color: #000000;
    width: 18.6rem;
    @media ${device.mobile} {
      display: none;
    }
  }
  .custom-select__control {
    width: 34rem;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #626262;
    border: 1px solid #e5e5e5;
    @media ${device.mobile} {
      width: 100%;
    }
  }

  .custom-select__control:focus {
    box-shadow: none;
  }

  .custom-select__indicator-separator {
    display: none;
  }
  .custom-select__input-container {
    height: 4rem;
  }
  .custom-select__menu {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #626262;
  }
`;

export const ClientUsers = styled.div`
  margin-top: 5.4rem;
  @media ${device.mobile} {
    margin-top: 2.6rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    ${FormTitle} {
      padding-right: 3rem;
    }
  }
`;

export const UserCardMobileWrapper = styled.div`
  display: none;
  @media ${device.mobile} {
    display: flex;
    margin-top: 2.2rem;
    div:nth-of-type(2) {
      display: flex;
    }
  }
`;

export const UsersCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media ${device.mobile} {
    mask-image: linear-gradient( 90deg,#000 calc(100% - 2rem),rgba(0,0,0,0.25) calc(100% - 1rem),transparent );
    );
    overflow-x: auto;
  }
  &:before {
    position: absolute;
    content: '';
    bottom: 1.5rem;
    left: -1.9rem;
    right: 0;
    top: 1rem;
    border-radius: 0.3rem 0;
    border-bottom: 0.1rem solid #e5e5e5;
    border-right: 0.1rem solid #e5e5e5;
    width: 2rem;
  }
`;

export const UsersCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 20.4rem);
  grid-template-rows: repeat(auto-fill, 12.4rem);
  gap: 1.1rem;
  @media ${device.mobile} {
    display: flex;
    max-width: 20rem;
    flex-direction: row;
    gap: 0.2rem;
  }
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 20.4rem;
  height: 12.4rem;
  background-color: rgba(0, 115, 124, 0.05);
  border-radius: 0.3rem;
  padding-left: 1.3rem;
  padding-top: 1rem;
  padding-right: 1.7rem;
  span {
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
    @media ${device.mobile} {
      margin-top: 0.8rem;
      margin-bottom: 0;
      margin-left: 0;
    }
  }
  cursor: pointer;
  @media ${device.mobile} {
    max-width: 12.3rem;
    max-height: 6.1rem;
    padding-left: 1.2rem;
    padding-top: 0.8rem;
    padding-right: 1.2rem;
    &:first-child {
      background-color: #ffffff;
      border: 1px solid #e5e5e5;
      border-bottom: none;
      border-radius: 0.3rem 0.3rem 0 0;
      margin-bottom: 0.3rem;
      &:before {
        position: absolute;
        content: '';
        bottom: 0;
        left: -1.9rem;
        right: 0;
        top: 1rem;
        border-radius: 0.3rem 0;
        border-bottom: 0.1rem solid #e5e5e5;
        border-right: 0.1rem solid #e5e5e5;
        width: 2rem;
      }
      &:after {
        position: absolute;
        content: '';
        bottom: 0;
        left: 11.42rem;
        right: 0;
        top: 80%;
        border-radius: 0 0.3rem;
        border-bottom: 1px solid #e5e5e5;
        border-left: 1px solid #e5e5e5;
        width: 85%;
      }
    }
  }
`;

export const UserEmail = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: Roboto, Arial, sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #000000;
  svg {
    margin-left: 0.7rem;
    @media ${device.mobile} {
      display: none;
    }
  }
`;

export const UserIconWrapper = styled.div`
  display: flex;
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  @media ${device.mobile} {
    display: none;
  }
`;

export const UserIcon = styled.div`
  width: 2.5rem;
  height: 2.4rem;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const AddUserCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(229, 229, 229, 0.2);
  cursor: pointer;
  border-radius: 0.3rem;
  @media ${device.mobile} {
    display: none;
  }
`;

export const AddUserCardMobile = styled.div`
  display: none;
  @media ${device.mobile} {
    display: flex;
    width: 1.8rem;
    height: 1.8rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    right: 1rem;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ReceiveAddressWrapper = styled.div`
  display: flex;
  width: 52.6rem;
  flex-direction: column;
  button {
    margin-top: 4rem;
    @media ${device.mobile} {
      margin-top: 3rem;
    }
  }
  @media ${device.mobile} {
    margin-top: 3.4rem;
    width: 100%;
  }
`;

export const AddAddressButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 17.5rem;
  height: 4rem;
  border: 0.1rem solid rgba(0, 115, 124, 0.1);
  cursor: pointer;
  background-color: #ffffff;
  padding-left: 1.3rem;
  margin-bottom: 6rem;
  span {
    font-family: Roboto, Arial, sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2.9rem;
    color: #00737c;
    margin-left: 1.5rem;
  }
`;
