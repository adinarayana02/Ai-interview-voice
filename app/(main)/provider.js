import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import { AppSidebar } from './_components/AppSlidebar'
import { supabase } from '@/services/supabaseClient';
import { UserDetailContext } from '@/context/UserDetailContext';

function Dashboardprovider({children}) {
  return (
        <SidebarProvider>
            <AppSidebar/>
        <div>
            <SidebarTrigger />
            {children}
        </div>

    </SidebarProvider>

  )
}

export default Dashboardprovider