import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const routes = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
];

export const metadata = {
  title: "Nextjs 13 - DEMO by @anthonyycifuentes",
  description: "Nextjs 13 is awesome!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ border: "1px solid blue", margin: "16px", padding: "16px" }}
      >
        <nav>
          {routes.map(({ href, label }) => (
            <div className="nav-item" key={label}>
              <Link key={href} href={href}>
                {label}
              </Link>
            </div>
          ))}
        </nav>
        {children}
      </body>
    </html>
  );
}
