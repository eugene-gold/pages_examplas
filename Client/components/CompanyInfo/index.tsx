import React from 'react';
import { useForm } from 'react-hook-form';

import { useRoleBindingQuery } from 'src/containers/Me/Me.generated';
import {
  MyContractorDocument,
  useContractorUpdateMutation,
  useMyContractorQuery
} from 'src/containers/Contractor/graphql/Contractor.generated';

import { FormTitleMobile } from '../UserInfo/styles';

import * as S from './styles';

export const CompanyInfo = () => {
  const { data: roleBindingData, loading: roleBindingLoading, error: roleBindingError } = useRoleBindingQuery();
  const { data: contractorData } = useMyContractorQuery();
  const [updateContractorMutation] = useContractorUpdateMutation();
  const role = roleBindingData?.me?.roleBindings?.edges?.[0]?.node?.role?.slug || '';

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: contractorData?.myContractor?.title || '',
      shortTitle: contractorData?.myContractor?.shortTitle || '',
      correspondenceAddress: contractorData?.myContractor?.correspondenceAddress || '',
      contactEmail: contractorData?.myContractor?.contactEmail || '',
      contactPhone: contractorData?.myContractor?.contactPhone || '',
      contactPerson: contractorData?.myContractor?.contactPerson || '',
      inn: contractorData?.myContractor?.inn || '',
      juridicalAddress: contractorData?.myContractor?.juridicalAddress || '',
      ogrn: contractorData?.myContractor?.ogrn || '',
      id: contractorData?.myContractor?.id || ''
    },
    mode: 'onBlur'
  });
  type FormData = {
    title?: string;
    shortTitle?: string;
    correspondenceAddress?: string;
    contactEmail?: string;
    contactPhone?: string;
    contactPerson: string;
    inn: string;
    juridicalAddress: string;
    ogrn: string;
    id: string;
  };

  const onSubmit = async (data: FormData) => {
    try {
      return await updateContractorMutation({
        variables: {
          input: {
            title: data?.title || '',
            shortTitle: data?.shortTitle || '',
            correspondenceAddress: data?.correspondenceAddress || '',
            contactEmail: data?.contactEmail || '',
            contactPhone: data?.contactPhone || '',
            contactPerson: contractorData?.myContractor?.contactPerson || '',
            inn: contractorData?.myContractor?.inn || '',
            juridicalAddress: contractorData?.myContractor?.juridicalAddress || '',
            ogrn: contractorData?.myContractor?.ogrn || '',
            id: contractorData?.myContractor?.id || ''
          }
        },
        awaitRefetchQueries: true,
        refetchQueries: [MyContractorDocument]
      });
    } catch (e) {
      console.error(e);
    }
  };

  if (roleBindingLoading) {
    return <div>Loading...</div>;
  }

  if (roleBindingError) {
    return <div>Error</div>;
  }

  return (
    <S.UserForm onBlur={handleSubmit(onSubmit)}>
      <S.FormTitle>Основные данные компании-клиента</S.FormTitle>
      <S.FormTitleMobile>Компания-клиент</S.FormTitleMobile>
      <S.UserFormInput isDisabled={role !== 'customer.admin'}>
        <label htmlFor="companyName">Полное наименование</label>
        <S.Input
          isInvalid={Boolean(errors?.title)}
          type="text"
          {...register('title', { required: true })}
          disabled={role !== 'customer.admin'}
        />
      </S.UserFormInput>
      <S.UserFormInput isDisabled={role !== 'customer.admin'}>
        <label htmlFor="shortName">Краткое наименование</label>
        <S.Input
          isInvalid={Boolean(errors?.shortTitle)}
          type="text"
          {...register('shortTitle', { required: true })}
          disabled={role !== 'customer.admin'}
        />
      </S.UserFormInput>
      <S.UserFormInput isDisabled={role !== 'customer.admin'}>
        <label htmlFor="address">Адрес получения корреспонденции</label>
        <S.Input
          isInvalid={Boolean(errors?.correspondenceAddress)}
          type="text"
          {...register('correspondenceAddress', { required: true })}
          disabled={role !== 'customer.admin'}
        />
      </S.UserFormInput>
      <S.UserFormInput isDisabled={role !== 'customer.admin'}>
        <label htmlFor="companyEmail">E-mail</label>
        <S.Input
          isInvalid={Boolean(errors?.contactEmail)}
          type="text"
          {...register('contactEmail', { required: true })}
          disabled={role !== 'customer.admin'}
        />
      </S.UserFormInput>
      <S.UserFormInput isDisabled={role !== 'customer.admin'}>
        <label htmlFor="companyPhone">Телефон</label>
        <S.Input
          isInvalid={Boolean(errors?.contactPhone)}
          type="text"
          {...register('contactPhone', { required: true })}
          disabled={role !== 'customer.admin'}
        />
      </S.UserFormInput>
    </S.UserForm>
  );
};
