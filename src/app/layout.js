import './reset.css';
import './reset.css';
import './globals.css';
import LoaderLayout from '../../layout/LoaderLayout/LoaderLayout';

export const metadata = {
  title: 'Muletopia Festival',
  description:
    'Bienvenue sur Muletopia Festival, le festival pour les passionés de coupes mulets !',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
