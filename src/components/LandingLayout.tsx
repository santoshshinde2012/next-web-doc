'use client'

import { useEffect, useState } from 'react';
import Header from './Header';

export function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col">
      <Header />
      {children}
    </div>
  )
}
