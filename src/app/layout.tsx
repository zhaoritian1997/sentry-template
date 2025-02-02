import Favicon from "./favicon.svg";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" id="viewport"
          content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, viewport-fit=cover" />
        <meta content="telephone=no" name="format-detection" />
        <title>Performance — Sentry</title>
        <link rel="icon" href={Favicon.src} />
      </head>
      <body className={` antialiased w-screen h-screen`}>
        {children}
      </body>
    </html>
  );
}
