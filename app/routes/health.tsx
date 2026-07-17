import { json } from "@remix-run/node";
export function loader() {
  return json({ status: "healthy", timestamp: new Date().toISOString() });
}
