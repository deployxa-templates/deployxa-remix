import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
export default function App() {
  return (
    <html>
      <head><Meta /><Links /></head>
      <body style={{ backgroundColor: '#0f172a', color: '#f8fafc' }}>
        <Outlet /><ScrollRestoration /><Scripts />
      </body>
    </html>
  );
}
