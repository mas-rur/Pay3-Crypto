import './globals.css';

export const metadata = {
  title: 'Pay3 — $PAY3 · Decentralized Payment Protocol',
  description:
    'Pay3 is a decentralized payment protocol for simple, secure, efficient crypto transactions between users and merchants — live on Polygon.',
  metadataBase: new URL('https://pay3.space'),
  openGraph: {
    title: 'Pay3 — $PAY3',
    description:
      'A decentralized payment protocol for secure, efficient crypto transactions. Live on Polygon.',
    type: 'website',
  },
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fallback web fonts — swap for your local font.ttf via the
            @font-face rule at the top of globals.css and these will
            only be used until that loads / for characters it lacks. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
