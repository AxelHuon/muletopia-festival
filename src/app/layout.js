import './reset.css';

export const metadata = {
  title: 'Muletopia Festival',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
