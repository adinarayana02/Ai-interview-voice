import React from 'react'
import Dashboardprovider from './provider'

function DashboardLayout({childern}) {
  return (
    <div className='bg-secondary'>
        <Dashboardprovider>
            
            <div className='p-10'>
                {childern}

            </div>
        </Dashboardprovider>
        </div>
  )
}

export default DashboardLayout