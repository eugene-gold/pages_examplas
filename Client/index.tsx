import React, { FC, useState } from 'react';

import { openModal } from 'src/stores/modalsStore';

import SVGUser from '/public/images/ClientSVG/user.svg';
import SVGPencil from '/public/images/ClientSVG/pencil.svg';
import SVGAdd from '/public/images/ClientSVG/addcross.svg';
import SVGAddSmall from '/public/images/ClientSVG/addcrosssmall.svg';

import {
  MyLocationsDocument,
  useLocationDeleteMutation,
  useMyLocationsQuery
} from '../Locations/graphql/Locations.generated';
import { useRoleBindingQuery } from '../Me/Me.generated';
import { useMyContractorQuery } from '../Contractor/graphql/Contractor.generated';

import {
  ClientContainerWrapper,
  Role,
  ClientUsers,
  UserIcon,
  UserIconWrapper,
  UsersCardsWrapper,
  AddUserCard,
  UserCard,
  UserEmail,
  ReceiveAddressWrapper,
  AddAddressButton,
  FormTitle,
  Title,
  UserCardMobileWrapper,
  AddUserCardMobile,
  UsersCardsContainer
} from './styles';
import { ReceiveAddressForm } from './components/ReceiveAddressForm';
import { UserInfo } from './components/UserInfo';
import { CompanyInfo } from './components/CompanyInfo';
import { EditClientInfo } from './components/EditClientInfo';

export const ClientContainer: FC = () => {
  const { data: roleBindingData, loading: roleBindingLoading, error: roleBindingError } = useRoleBindingQuery();
  const { data, loading, error } = useMyLocationsQuery();
  const { data: contractorData } = useMyContractorQuery();
  const [addRow, setAddRow] = useState(false);
  const userData = contractorData?.myContractor?.users?.edges?.[0]?.node;
  const [removeLocationMutation] = useLocationDeleteMutation();
  const role = roleBindingData?.me?.roleBindings?.edges?.[0]?.node?.role?.slug || '';

  const locations = data?.myContractor?.locations?.edges || [];

  if (roleBindingLoading) {
    return <div>Loading...</div>;
  }

  if (roleBindingError) {
    return <div>Error</div>;
  }
  if (role !== 'customer.admin' && role !== 'customer.manager') {
    return <div>Авторизуйтесь как покупатель</div>;
  }

  const handleDelete = (id: string) =>
    removeLocationMutation({
      variables: {
        input: { id }
      },
      awaitRefetchQueries: true,
      refetchQueries: [MyLocationsDocument]
    });

  return (
    <ClientContainerWrapper>
      <Title>
        Данные клиента
        {role === 'customer.admin' && <Role>администратор</Role>}
      </Title>
      <UserInfo />
      <CompanyInfo />
      {role === 'customer.admin' && (
        <ClientUsers>
          <FormTitle>Управление пользователями клиента</FormTitle>
          <AddUserCardMobile onClick={() => openModal('clientCreate')}>
            <SVGAddSmall />
          </AddUserCardMobile>
          <UsersCardsContainer>
            <UsersCardsWrapper>
              {contractorData?.myContractor?.users?.edges?.map((user) => (
                <UserCard key={user?.node?.id} onClick={() => openModal('editInfo', { data: user?.node })}>
                  <UserEmail>
                    {user?.node?.email}
                    <SVGPencil width="1.35rem" height="1.35rem" />
                  </UserEmail>
                  <Role>{user?.node?.roleBindings?.edges?.[0]?.node?.role?.title}</Role>
                  <UserIconWrapper>
                    <UserIcon>
                      <SVGUser />
                    </UserIcon>
                  </UserIconWrapper>
                </UserCard>
              ))}
              <AddUserCard onClick={() => openModal('clientCreate')}>
                <SVGAdd width="4.5rem" height="4.5rem" />
              </AddUserCard>
            </UsersCardsWrapper>
          </UsersCardsContainer>
        </ClientUsers>
      )}
      <UserCardMobileWrapper>
        <EditClientInfo isEdit clientData={{ data: userData }} />
      </UserCardMobileWrapper>
      <ReceiveAddressWrapper>
        {!loading && !error && (
          <>
            {locations?.map((location) => (
              <ReceiveAddressForm
                key={location?.node?.id}
                node={location?.node}
                role={role}
                onRemove={() => handleDelete(location?.node?.id || '')}
                canBeDeleted={location?.node?.canBeDeleted}
              />
            ))}
          </>
        )}
        {addRow && <ReceiveAddressForm role={role} canBeDeleted newLocation setAddRow={setAddRow} />}
        {role === 'customer.admin' && (
          <AddAddressButton
            onClick={() => {
              setAddRow(true);
            }}
          >
            <SVGAddSmall width="1.8rem" height="1.8rem" />
            <span>Добавить адрес</span>
          </AddAddressButton>
        )}
      </ReceiveAddressWrapper>
    </ClientContainerWrapper>
  );
};
