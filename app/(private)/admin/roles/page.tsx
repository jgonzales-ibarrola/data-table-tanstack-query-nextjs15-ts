import DataTable from '@/components/(private)/admin/roles/DataTable'
import React from 'react'

const RolesPage = () => {
  return (
    <>
        {/* Header */}
        <section className='pb-6'>
            <h1 className='text-4xl font-bold'>Roles</h1>
        </section>

        <section>
            {/* Data Table */}
            <DataTable />
        </section>
    </>
  )
}

export default RolesPage