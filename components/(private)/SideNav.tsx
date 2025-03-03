import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaClipboardUser } from 'react-icons/fa6';
import { TbPresentationAnalyticsFilled } from 'react-icons/tb'

const SideNav = () => {
    const pathname = usePathname();

    const links = [
        {
            href: '/admin',
            label: 'Analytics',
            icon: <TbPresentationAnalyticsFilled />,
            isActive: pathname === '/admin'
        },
        {
            href: '/admin/roles',
            label: 'Roles',
            icon: <FaClipboardUser />,
            isActive: pathname === '/admin/roles'
        },
    ]

    const navLinkItems = links.map((link) => {
        const {href, icon, isActive, label} = link;

        return (
            <li key={href+label} className={`${isActive ?'bg-yellow-300' : 'bg-gray-100' } text-black p-3`}>
                <Link href={href} className='flex gap-1 items-center'>
                    {icon}{label}
                </Link>
            </li>
        )
    })

  return (
    <div className='flex-none w-64 bg-white'>
        <ul className='grid'>
            {navLinkItems}
        </ul>
    </div>
  )
}

export default SideNav