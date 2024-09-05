import NavBar from "@/components/nav-bar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <NavBar /> */}
      <body className="">{children}</body>
    </html>
  );
}
