'use client';
import './reset.css';
import './globals.css';
import StyledComponentsRegistry from '../../lib/registry';
import styled from 'styled-components';

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <StyledComponentsRegistry>
          <MainContainer>{children}</MainContainer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
