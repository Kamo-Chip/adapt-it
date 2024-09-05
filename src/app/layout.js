import "./globals.css";
import NavBar from "../components/nav-bar"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {
        
      }
      <body className="">
      <NavBar>
          
          </NavBar>
        {children}
      </body>
    </html>
  );
}
