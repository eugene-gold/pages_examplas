import React, { FC, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import SVGRedCross from '/public/images/ClientSVG/redcross.svg';

import { CustomSelect } from 'src/ui';
import {
  Maybe,
  MyContractorDocument,
  useMyContractorQuery,
  UserRoleTypeEdge
} from 'src/containers/Contractor/graphql/Contractor.generated';

import * as C from '../../styles';
import { closeModal } from '../../../../stores';

import * as S from './styles';
import {
  UserDocument,
  useUserBindRoleMutation,
  useUserCreateMutation,
  useUserDeleteMutation,
  useUserQuery,
  useUserUnbindRoleMutation,
  useUserUpdateMutation
} from './User.generated';

type EditClientInfoProps = {
  isEdit: boolean;
  clientData?: any;
};

export const EditClientInfo: FC<EditClientInfoProps> = ({ isEdit, clientData }) => {
  const [updateUserMutation] = useUserUpdateMutation();
  const [deleteUserMutation] = useUserDeleteMutation();
  const [createUserMutation] = useUserCreateMutation();
  const [userBindRoleMutation] = useUserBindRoleMutation();
  const [userUnbindRoleMutation] = useUserUnbindRoleMutation();
  const { data: userData } = useUserQuery({ variables: { userId: clientData?.data?.id } });
  const { data: contractorData } = useMyContractorQuery();
  const roles: Maybe<Array<Maybe<UserRoleTypeEdge>>> | null | undefined =
    contractorData?.myContractor?.roleBindings?.edges?.[0]?.node?.role?.userRoles.edges;
  const subjectContractorId = userData?.user?.roleBindings?.edges?.[0]?.node?.id;
  type Option = {
    label: string;
    value: string;
  };

  const getOptions = useCallback((roles: Maybe<Array<Maybe<UserRoleTypeEdge>>> | undefined | null) => {
    const options: Array<Option> = [];
    if (roles) {
      roles.map((role: Maybe<UserRoleTypeEdge>) => {
        options.push({ value: role?.node?.id || '', label: role?.node?.title || '' });
      });
    }
    return options;
  }, []);
  const [currentRole, setCurrentRole] = useState(
    clientData ? clientData?.data?.roleBindings?.edges?.[0]?.node?.role?.id : getOptions(roles)?.[0]?.value
  );

  const getRole = useCallback(
    (roleId: string, roles: Array<Option>) => roles?.filter((role: Option) => role.value === roleId)[0],
    []
  );
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      lastName: clientData?.data?.lastName || '',
      firstName: clientData?.data?.firstName || '',
      middleName: clientData?.data?.middleName || '',
      contactEmail: clientData?.data?.email || '',
      contactPhone: clientData?.data?.phone || ''
    },
    mode: 'onBlur'
  });

  const onDelete = async () => {
    try {
      return await deleteUserMutation({
        variables: {
          input: {
            id: clientData?.data?.id || ''
          }
        },
        awaitRefetchQueries: true,
        refetchQueries: [MyContractorDocument]
      });
    } catch (e) {
      console.error(e);
    } finally {
      closeModal('editInfo');
    }
  };

  const onSubmit = async (data: any) => {
    try {
      if (isEdit) {
        return await updateUserMutation({
          variables: {
            input: {
              email: data.contactEmail,
              firstName: data.firstName,
              id: clientData?.data?.id,
              lastName: data.lastName,
              middleName: data.middleName,
              phone: data.contactPhone
            }
          },
          awaitRefetchQueries: true,
          refetchQueries: [UserDocument],
          onError(err) {
            console.error('updateUserMutation error', err);
          },
          onCompleted() {
            userUnbindRoleMutation({
              variables: {
                input: {
                  id: subjectContractorId || ''
                }
              },
              onError(err) {
                console.error('userUnbindRoleMutation error', err);
              },
              onCompleted() {
                userBindRoleMutation({
                  variables: {
                    input: {
                      id: clientData?.data?.id,
                      roleId: currentRole,
                      subjectContractorId: contractorData?.myContractor?.id || ''
                    }
                  },
                  awaitRefetchQueries: true,
                  refetchQueries: [MyContractorDocument],
                  onError(err) {
                    console.error('userBindRoleMutation error', err);
                  }
                });
              }
            });
          }
        });
      } else {
        return await createUserMutation({
          variables: {
            input: {
              contractorId: contractorData?.myContractor?.id || '',
              email: data.contactEmail,
              firstName: data.firstName,
              lastName: data.lastName,
              middleName: data.middleName,
              phone: data.contactPhone
            }
          },
          onError(err) {
            console.error('createUserMutation error', err);
          },
          onCompleted(createUserData) {
            userBindRoleMutation({
              variables: {
                input: {
                  id: createUserData?.userCreate?.user?.id || '',
                  roleId: currentRole,
                  subjectContractorId: contractorData?.myContractor?.id || ''
                }
              },
              awaitRefetchQueries: true,
              refetchQueries: [MyContractorDocument],
              onError(err) {
                console.error('userBindRoleMutation error', err);
              }
            });
          }
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      closeModal('editInfo');
      closeModal('clientCreate');
    }
  };

  return (
    <S.EditUserInfoWrapper>
      <S.EditUserForm onSubmit={handleSubmit(onSubmit)}>
        <C.UserFormInput>
          <label htmlFor="lastName">Фамилия</label>
          <C.Input isInvalid={Boolean(errors?.lastName)} type="text" {...register('lastName', { required: true })} />
        </C.UserFormInput>
        <C.UserFormInput>
          <label htmlFor="firstName">Имя</label>
          <C.Input isInvalid={Boolean(errors?.firstName)} type="text" {...register('firstName', { required: true })} />
        </C.UserFormInput>
        <C.UserFormInput>
          <label htmlFor="middleName">Отчество</label>
          <C.Input
            isInvalid={Boolean(errors?.middleName)}
            type="text"
            {...register('middleName', { required: true })}
          />
        </C.UserFormInput>

        <C.UserFormInput>
          <label htmlFor="contactEmail">E-mail</label>
          <C.Input
            isInvalid={Boolean(errors?.contactEmail)}
            type="text"
            {...register('contactEmail', { required: true })}
          />
        </C.UserFormInput>
        <C.UserFormInput>
          <label htmlFor="contactPhone">Телефон</label>
          <C.Input
            isInvalid={Boolean(errors?.contactPhone)}
            type="text"
            {...register('contactPhone', { required: true })}
          />
        </C.UserFormInput>
        <C.UserFormInput>
          <label>Роль</label>
          <CustomSelect
            type="simple"
            width="34rem"
            height="4rem"
            options={getOptions(roles)}
            defaultValue={getRole(clientData?.data?.roleBindings?.edges?.[0]?.node?.role?.id, getOptions(roles))}
            setSelectValue={setCurrentRole}
          />
        </C.UserFormInput>
        <S.ButtonWrapper>
          <S.SaveButton type="submit">Сохранить</S.SaveButton>
          <S.DeleteButton onClick={onDelete}>
            <SVGRedCross width="1.2rem" height="1.2rem" />
            Удалить пользователя
          </S.DeleteButton>
        </S.ButtonWrapper>
      </S.EditUserForm>
    </S.EditUserInfoWrapper>
  );
};
