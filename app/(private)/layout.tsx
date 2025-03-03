'use client';

import React, { ReactNode } from 'react'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import SideNav from '@/components/(private)/SideNav';
  

const PrivateLayout = ({children} : {
    children: ReactNode
}) => {
    const queryClient = new QueryClient()
  return (
    <>
        <QueryClientProvider client={queryClient}>
            <div className='flex'>
                <SideNav />
                <main className='flex-1 bg-gray-200 h-screen overflow-y-scroll p-4'>
                {children}
                </main>
            </div>
        </QueryClientProvider>
    </>
  )
}
``
export default PrivateLayout