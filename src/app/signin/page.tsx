// pages/clerk.tsx
'use client'

import React, { useEffect, useRef } from 'react';
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs';

interface ClerkPageProps {
  buttonClassName: string;
}

const ClerkPage: React.FC<ClerkPageProps> = ({ buttonClassName }) => {
  const signInButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const isSignInClicked = localStorage.getItem('isSignInClicked');

    if (signInButtonRef.current && !isSignInClicked) {
      signInButtonRef.current.click();
      localStorage.setItem('isSignInClicked', 'true');
    }
  }, []);

  return (
    <div className="text-center">
      <SignedOut>
        <SignInButton mode="modal">
          <button
            ref={signInButtonRef}
            className="hidden"
          >
            Sign In
          </button>
        </SignInButton>
        <button
          className={buttonClassName}
          onClick={() => signInButtonRef.current?.click()}
        >
          Signup
        </button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default ClerkPage;
