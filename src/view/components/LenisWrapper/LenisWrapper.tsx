'use client';

import ReactLenis from 'lenis/react';
import { ReactNode } from 'react';

export default function LenisWrapper({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
    >
      {children}
    </ReactLenis>
  );
}