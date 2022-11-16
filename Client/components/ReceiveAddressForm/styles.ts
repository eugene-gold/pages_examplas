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
    &:nth-child(1) {
      margin-top: 0;
    }
    margin-top: 2rem;
  }
`;

type FormWrapperProps = {
  isOpen: boolean;
};

export const FormWrapper = styled.div<FormWrapperProps>`
  height: ${(props) => (props.isOpen ? '28.2rem' : '0')};
  overflow: hidden;
  transition: 0.2s height ease-in-out;
  @media ${device.mobile} {
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    ${Input} {
      width: 100%;
    }
  }
`;

export const NoDeleteText = styled.div`
  color: #d13239;
  position: absolute;
  right: 0;
  transform: translateX(calc(100% + 2rem));
  opacity: 0.8;
`;
