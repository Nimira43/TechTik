'use client'

import Link from 'next/link'
import React from 'react'

const MainNavLinks = () => {
  const links = [
    {label: 'Dashboard', href: '/'},
    {label: 'Tickets', href: '/tickets'},
    {label: 'Users', href: '/users'}
  ]

  return (
    <div className='flex items-center gap-2'>
      {links.map((link) => (
        <Link href={link.href} className='navbar-link' key={link.label}>
          {link.label}
        </Link>
      ))}      
    </div>
  )
}

export default MainNavLinks
