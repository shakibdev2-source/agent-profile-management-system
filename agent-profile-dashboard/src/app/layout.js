import './globals.css';

export const metadata = {
  title: 'Agent Profile Dashboard',
  description: 'Classified Spy Management System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
