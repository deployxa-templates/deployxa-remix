import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ margin: 0, backgroundColor: '#0f172a', color: '#f8fafc', fontFamily: 'sans-serif' }}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
