import { Link , Outlet } from 'react-router-dom'
import './rootLayout.css'
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing key")
}
const queryClient = new QueryClient()
const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
         <QueryClientProvider client={queryClient}>
    <div className='rootLayout'>
        <header>
            <Link to="/" className='logo'>
                <img src="/logo.png" alt="" />
                <span>NOVA AI</span>
            </Link>
            <div className="user">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
    </QueryClientProvider>
    </ClerkProvider>
  )
}

export default RootLayout