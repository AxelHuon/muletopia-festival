import './reset.css';
import './reset.css';
import './globals.css';
import StyledComponentsRegistry from '../../lib/registry';

export const metadata = {
  title: 'Muletopia Festival',
  description:
    'Bienvenue sur Muletopia Festival, le festival pour les passionés de coupes mulets !',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <StyledComponentsRegistry>
          <main>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
