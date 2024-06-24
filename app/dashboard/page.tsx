'use client'
'use strict'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Dashboard = () => {

  const pathname = usePathname()
  useEffect(() => {
    console.log('Dashboard:', pathname)
  }, [pathname])

  return <div className={'m-4 text-orange-500 text-2xl'}>
    <h1>Dashboard</h1>
    <div ><Link href={'/'} className={'underline hover:no-underline'}>link home</Link></div>
    <div ><Link href={'/about'} className={'underline hover:no-underline'}>link about</Link></div>
    <div ><Link href={'/about/xt/crm'} className={'underline hover:no-underline'}>link about xt/CRM</Link></div>
    <div ><Link href={'/blog'} className={'underline hover:no-underline'}>link blog</Link></div>
    <div><a href={'/gallery'} className={'underline hover:no-underline'}>a {'->'} link gallery</a></div>
  </div >
}

export default Dashboard