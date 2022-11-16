import React, { FC, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import SVGDelete from '/public/images/ClientSVG/delete.svg';
import SVGOpenList from '/public/images/ClientSVG/triangle.svg';

import { openModal } from 'src/stores/modalsStore';
import {
  LocationSnapshot,
  MyLocationsDocument,
  useLocationCreateMutation,
  useLocationUpdateMutation
} from 'src/containers/Locations/graphql/Locations.generated';
import { useMyContractorQuery } from 'src/containers/Contractor/graphql/Contractor.generated';

import * as C from '../../styles';

import * as S from './styles';

type RecieveAddressFormProps = {
  role: string;
  node?: Partial<LocationSnapshot> | null;
  onRemove?: (b: boolean) => void;
  openModal?: string | undefined;
  canBeDeleted?: boolean;
  setAddRow?: (b: boolean) => void | null;
  newLocation?: boolean;
};

export const ReceiveAddressForm: FC<RecieveAddressFormProps> = ({
  role,
  node,
  canBeDeleted,
  newLocation,
  setAddRow
}) => {
  const [createLocationMutation] = useLocationCreateMutation();
  const { data: contractorData } = useMyContractorQuery();
  const [updateLocationMutation] = useLocationUpdateMutation();
  const [isOpen, setIsOpen] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      contactPhone: node?.contactPhone || '',
      address: node?.address || '',
      title: node?.title || '',
      contactPerson: node?.contactPerson || '',
      id: node?.id || '',
      externalId: node?.externalId,
      description: '',
      contactEmail: ''
    },
    mode: 'onBlur'
  });

  type FormData2 = {
    contactPhone: string;
    address: string;
    title: string;
    contactPerson: string;
    id: string;
    externalId?: string;
    description: string;
    contactEmail: string;
  };

  const onSubmit = async (data: FormData2) => {
    try {
      if (!newLocation) {
        return await updateLocationMutation({
          variables: {
            input: {
              address: data.address,
              contactPerson: data.contactPerson,
              contactPhone: data.contactPhone,
              description: '',
              externalId: node?.externalId || '',
              title: data.title,
              id: data?.id,
              contactEmail: ''
            }
          },
          awaitRefetchQueries: true,
          refetchQueries: [MyLocationsDocument]
        });
      } else {
        return await createLocationMutation({
          variables: {
            input: {
              address: data?.address,
              contactPerson: data?.contactPerson,
              contactPhone: data?.contactPhone,
              description: '',
              externalId: data?.externalId || '',
              title: data?.title,
              contactEmail: '',
              contractorId: contractorData?.myContractor?.id || ''
            }
          },
          awaitRefetchQueries: true,
          refetchQueries: [MyLocationsDocument]
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setAddRow?.(false);
    }
  };

  const onDelete = useCallback(() => {
    if (newLocation) {
      if (setAddRow) {
        setAddRow(false);
      }
      return;
    }
    if (!newLocation) {
      openModal('deleteLocation', { id: node?.id });
    }
  }, [newLocation, node?.id, setAddRow]);
  return (
    <S.UserForm onBlur={handleSubmit(onSubmit)}>
      <C.FormTitle canBeDeleted={canBeDeleted}>
        Адрес получения {node?.title}
        {role === 'customer.admin' && <SVGDelete width="1.4rem" height="1.8rem" onClick={onDelete} />}
        {role === 'customer.manager' && (
          <SVGOpenList width="1.3rem" height="1.1rem" onClick={() => setIsOpen(!isOpen)} />
        )}
        {!canBeDeleted && <S.NoDeleteText>Данный склад не может быть удален</S.NoDeleteText>}
      </C.FormTitle>
      <S.FormWrapper isOpen={isOpen}>
        <C.UserFormInput isDisabled={role !== 'customer.admin'}>
          <label htmlFor="title">Наименование</label>
          <S.Input isInvalid={Boolean(errors?.title)} type="text" {...register('title', { required: true })} />
        </C.UserFormInput>
        <C.UserFormInput isDisabled={role !== 'customer.admin'}>
          <label htmlFor="externalId">Код ИС поставщика</label>
          <S.Input
            isInvalid={Boolean(errors?.externalId)}
            type="text"
            {...register('externalId', { required: true })}
          />
        </C.UserFormInput>
        <C.UserFormInput isDisabled={role !== 'customer.admin'}>
          <label htmlFor="address">Адрес</label>
          <S.Input
            isInvalid={Boolean(errors?.address)}
            type="text"
            {...register('address', { required: true })}
            disabled={role !== 'customer.admin'}
          />
        </C.UserFormInput>
        <C.UserFormInput isDisabled={role !== 'customer.admin'}>
          <label htmlFor="contactPerson">ФИО контактного лица</label>
          <S.Input
            isInvalid={Boolean(errors?.contactPerson)}
            type="text"
            {...register('contactPerson', { required: true })}
            disabled={role !== 'customer.admin'}
          />
        </C.UserFormInput>
        <C.UserFormInput isDisabled={role !== 'customer.admin'}>
          <label htmlFor="contactPhone">Телефон</label>
          <S.Input
            isInvalid={Boolean(errors?.contactPhone)}
            type="text"
            {...register('contactPhone', { required: true })}
            disabled={role !== 'customer.admin'}
          />
        </C.UserFormInput>
      </S.FormWrapper>
    </S.UserForm>
  );
};
