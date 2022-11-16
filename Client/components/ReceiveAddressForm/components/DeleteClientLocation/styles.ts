import styled from '@emotion/styled';

import { ButtonMain, ButtonCancel } from 'src/variables/mixins';

export const ModalText = styled.p`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #000000;
  margin-bottom: 2.4rem;
`;

export const Body = styled.div`
  margin-top: 6rem;
`;

export const Buttons = styled.div`
  display: flex;
`;

export const ButtonDelete = styled(ButtonMain)`
  display: flex;
  align-items: center;
  margin-right: 0.8rem;
  cursor: pointer;
`;

export const IconCross = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const BtnCancel = styled(ButtonCancel)`
  display: flex;
  align-items: center;
  margin-right: 0.8rem;
  cursor: pointer;
`;

export const IconArrow = styled.div`
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;
