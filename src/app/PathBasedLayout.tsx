'use client'

import { usePathname } from 'next/navigation'
import { Layout } from '@/components/Layout'
import { LandingLayout } from '@/components/LandingLayout'


export default function PathBasedLayout({
  children,
  specialPaths = [],
}: {
  children: React.ReactNode
  specialPaths?: string[]
}) {
  const pathname = usePathname()

  // Check if current path is in the list of special paths or starts with any of them
  const isSpecialPath = specialPaths.some((path) => pathname === path)

  if (isSpecialPath) {
    return <LandingLayout>{children}</LandingLayout>
  }

  return <Layout>{children}</Layout>
}
