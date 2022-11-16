import React from 'react';
import { useForm } from 'react-hook-form';

import { useRoleBindingQuery } from 'src/containers/Me/Me.generated';

import { UserDocument, useUserUpdateMutation } from '../EditClientInfo/User.generated';

import { UserForm, FormTitle, FormTitleMobile, UserFormInput, Input } from './styles';

export const UserInfo = () => {
  const { data: roleBindingData, loading: roleBindingLoading, error: roleBindingError } = useRoleBindingQuery();
  const [updateUserMutation] = useUserUpdateMutation();
  const role = roleBindingData?.me?.roleBindings?.edges?.[0]?.node?.role?.slug || '';
  const me = roleBindingData?.me;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      lastName: me?.lastName || '',
      firstName: me?.firstName || '',
      middleName: me?.middleName || '',
      phoneNumber: me?.phone || '',
      email: me?.email || ''
    }
  });

  type FormData = {
    lastName: string;
    firstName: string;
    middleName: string;
    phoneNumber: string;
    email: string;
  };

  const onSubmit = async (data: FormData) => {
    try {
      return await updateUserMutation({
        variables: {
          input: {
            email: data.email,
            firstName: data.firstName,
            id: me?.id || '',
            lastName: data.lastName,
            middleName: data.middleName,
            phone: data.phoneNumber
          }
        },
        awaitRefetchQueries: true,
        refetchQueries: [UserDocument],
        onError(err) {
          console.error('updateUserMutation error', err);
        }
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
  // if (role !== 'customer.admin' && role !== 'customer.manager') {
  //   return <div>Авторизуйтесь как покупатель</div>;
  // }

  return (
    <UserForm onBlur={handleSubmit(onSubmit)}>
      <FormTitle>Основные данные пользователя</FormTitle>
      <FormTitleMobile>Пользователь</FormTitleMobile>
      <UserFormInput>
        <label htmlFor="lastName">Фамилия</label>
        <Input isInvalid={Boolean(errors?.lastName)} type="text" {...register('lastName', { required: true })} />
      </UserFormInput>
      <UserFormInput>
        <label htmlFor="phoneNumber">Телефон</label>
        <Input isInvalid={Boolean(errors?.phoneNumber)} type="text" {...register('phoneNumber', { required: true })} />
      </UserFormInput>
      <UserFormInput>
        <label htmlFor="firstName">Имя</label>
        <Input isInvalid={Boolean(errors?.firstName)} type="text" {...register('firstName', { required: true })} />
      </UserFormInput>
      <UserFormInput isDisabled={role !== 'customer.admin'}>
        <label htmlFor="email">E-mail</label>
        <Input
          isInvalid={Boolean(errors?.email)}
          type="text"
          {...register('email', { required: true })}
          disabled={role !== 'customer.admin'}
        />
      </UserFormInput>
      <UserFormInput>
        <label htmlFor="middleName">Отчество</label>
        <Input isInvalid={Boolean(errors?.middleName)} type="text" {...register('middleName', { required: true })} />
      </UserFormInput>
    </UserForm>
  );
};
