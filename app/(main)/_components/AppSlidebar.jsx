"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
  } from "@/components/ui/sidebar"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { SideBarOptions } from "@/services/Constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
  
  export function AppSidebar() {
    const path = usePathname();
    console.log(path);
    return (
      <Sidebar>
        <SidebarHeader className='flex items-center mt-5' >
            <Image 
              src={'/logo.png'} 
              alt="logo" 
              width={200}
              height={100}
              className="w-[100px]"
            />
            <Button className ='w-full'>
                <Plus className="mr-2 h-4 w-4" />
                Create new Interview
            </Button>
        </SidebarHeader >
        <SidebarContent>
            <SidebarGroup>
                <SidebarContent>
                    <SidebarMenu>
                        {SideBarOptions.map((option,index)=>(
                            <SidebarMenuItem key={index} className='p-1'>
                                <SidebarMenuButton asChild className={`p-5 ${path==option.path && 'bg-blue-200'}`}>
                                    <Link href={option.path}>
                                    <option.icon className={`mr-2 h-4 w-4 ${path === option.path ? 'text-primary' : ''}`} />
                                    <span className={`text-[16px] font-medium ${path === option.path ? 'text-primary' : ''}`}>{option.name}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  