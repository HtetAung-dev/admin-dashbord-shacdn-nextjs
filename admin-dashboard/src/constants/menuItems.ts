import { BadgeInfo, BellDot, BookOpen, BookOpenCheck, GraduationCap, LayoutDashboard, LayoutList, Podcast, Settings, ShieldHalf, SquarePlay, TicketPercent, UserRoundCheck, UserRoundCog, Users } from "lucide-react"
export const MenuItems = [
    {
        group: "General",
        items: [
            {
                title: "Dashboard",
                url: "/",
                icon:LayoutDashboard,
            },
            {
                title: "Promo Codes",
                url: "/promocodes",
                icon: TicketPercent
            },
            {
                title: "Notifications",
                url: "/notifications",
                icon: BellDot
            },
            {
                title: "Features",
                url: "/features",
                icon: LayoutList,
                submenu: [
                    {
                        title: "Webtoon",
                        url: "/webtoon",
                        icon: BookOpen
                    },
                    {
                        title: "Reels",
                        url: "/reels",
                        icon: SquarePlay
                    },
                    {
                        title: "Education",
                        url: "/education",
                        icon: GraduationCap
                    },
                    {
                        title: "Radio Station",
                        url: "/radio-station",
                        icon: Podcast
                    }
                ]
            }
        ],
    },
    {
        group: "User Management",
        items: [
            {
                title: "Admin Lists",
                url: "/admin-lists",
                icon: ShieldHalf
            },
            {
                title: "User List",
                url: "/user-lists",
                icon: Users
            },
            {
                title: "Request Approvals",
                url: "/request-approvals",
                icon: UserRoundCheck
            },
            {
                title: "Publish Approvals",
                url: "/publish-approvals",
                icon: BookOpenCheck
            },
        ],

    },
    {
        group: "Settings",
        items: [
            {
                title: "Profile",
                url: "/profile",
                icon: UserRoundCog,
                shorcut: "⌘P"
            },
            {
                title: "About App",
                url: "/about-app",
                icon: BadgeInfo,
                shorcut: "⌘I"
            },
            {
                title: "Settings",
                url: "/setting",
                icon: Settings,
                shorcut: "⌘S"
            }
        ]
    }
]