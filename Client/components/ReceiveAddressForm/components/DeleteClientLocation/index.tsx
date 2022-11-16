import React, { FC } from 'react';

import SVGCrossButton from 'public/images/cross_button.svg';
import SVGArrowButton from 'public/images/arrow_button.svg';
import { closeModal } from 'src/stores/modalsStore';
import { MyLocationsDocument, useLocationDeleteMutation } from 'src/containers/Locations/graphql/Locations.generated';

import * as S from './styles';

type ModalProps = {
  id?: string | unknown;
};

export const DeleteClientLocation: FC<ModalProps> = ({ id }) => {
  const [removeLocationMutation] = useLocationDeleteMutation();

  const handleDelete = () =>
    removeLocationMutation({
      variables: {
        input: {
          id: String(id) || ''
        }
      },
      awaitRefetchQueries: true,
      refetchQueries: [MyLocationsDocument],
      onCompleted: () => closeModal('deleteLocation')
    });
  return (
    <S.Body>
      <S.Buttons>
        <S.ButtonDelete onClick={handleDelete}>
          <S.IconCross>
            <SVGCrossButton />
          </S.IconCross>
          Да, удалить
        </S.ButtonDelete>
        <S.BtnCancel onClick={() => closeModal('deleteLocation')}>
          <S.IconArrow>
            <SVGArrowButton />
          </S.IconArrow>
          Отменить удаление
        </S.BtnCancel>
      </S.Buttons>
    </S.Body>
  );
};
