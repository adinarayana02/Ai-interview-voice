import { Calendar, Home, Users, Settings } from 'lucide-react'

export const SideBarOptions = [
    {
        name: 'Dashboard',
        icon: Home,
        path: '/dashboard'
    },
    {
        name: 'Scheduled Interview',
        icon: Calendar,
        path: '/scheduled-interview'
    },
    {
        name: 'Team',
        icon: Users,
        path: '/team'
    },
    {
        name: 'Settings',
        icon: Settings,
        path: '/settings'
    }
]