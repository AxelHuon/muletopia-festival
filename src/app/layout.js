import StyledComponentsRegistry from '../../lib/registry';
import '../styles/globals.css';
import '../styles/reset.css';
import '../styles/tanker.css';
import '../styles/colors.css';

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
