import '@mantine/core/styles.css';
import React, { ReactNode } from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { ClerkProvider } from '@clerk/nextjs';
import { theme } from '../../theme';
import './style/global.css';
import { ArticleTextProvider } from './_providers/articleTextProvider/ui/ArticleTextProvider';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <ColorSchemeScript />
          <link rel="shortcut icon" href="/favicon.svg" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
        </head>
        <body>
          <MantineProvider theme={theme}>
            <ArticleTextProvider>{children}</ArticleTextProvider>
          </MantineProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
