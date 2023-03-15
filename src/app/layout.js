import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ul className="flex gap-4 bg-indigo-900  px-4 py-3">
          <li>
            <Link className="hover:text-indigo-200 text-indigo-50" href="/">Home</Link>
          </li>
          <li>
            <Link className="hover:text-indigo-200 text-indigo-50" href="/number-to-word">Numbertoword</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
