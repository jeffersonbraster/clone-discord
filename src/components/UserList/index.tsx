import React from 'react';

import {Container, Role, User, Avatar} from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Jefferson Brandão" />

      <Role>Indisponível - 23</Role>
      <UserRow nickname="André Brandão" isBot />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
      <UserRow nickname="Liana Sabino" />
    </Container>
  )
};

export default UserInfo;