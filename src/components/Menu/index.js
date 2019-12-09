import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header } from './styles';

export default function Menu() {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/profile">
            <img
              src="https://api.adorable.io/avatars/75/abott@adorable.png"
              alt="UserAvatar"
            />
            <strong>User name</strong>
          </Link>
        </nav>
      </Header>
    </Container>
  );
}
