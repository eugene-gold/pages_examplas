import styled from '@emotion/styled';

import { device } from 'src/variables/variables';

type InputProps = {
  isInvalid?: boolean | undefined;
};

export const Input = styled.input<InputProps>``;

export const UserForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5rem;
  @media ${device.mobile} {
    margin-top: 2.7rem;
    flex-direction: column;
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
  @media ${device.mobile} {
    display: none;
  }
`;

export const FormTitleMobile = styled.h3<UserFormCursorProps>`
  display: none;
  @media ${device.mobile} {
    font-family: Roboto, Arial, sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2rem;
    color: #000000;
    margin-bottom: 2rem;
    width: 100%;
    display: flex;
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
    margin-bottom: 1.5rem;
    margin-right: 0;
    width: 100%;
    &:last-child {
      margin-bottom: 0;
    }
    ${Input} {
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
  &:nth-child(4) {
    @media ${device.mobile} {
      display: none;
    }
  }
  &:nth-child(6) {
    @media ${device.mobile} {
      display: none;
    }
  }
`;
