import './globals.css';
import NavBar from '../components/nav-bar';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export const metadata = {
  title: 'My Cool App',
  description: 'An amazing app with cool features',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="">
          <NavBar>
            {/* Clerk components inside the navbar */}
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </NavBar>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}