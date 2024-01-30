import './reset.css'
import './globals.css'

export const metadata = {
  title: "Muletopia Festival",
  description: "Bienvenue sur Muletopia Festival, le festival pour les passionés de coupes mulets !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
