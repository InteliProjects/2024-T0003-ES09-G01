import { UserProvider } from "@auth0/nextjs-auth0/client";

import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <div className="container">{children}</div>
        </body>
      </UserProvider>
    </html>
  );
}
