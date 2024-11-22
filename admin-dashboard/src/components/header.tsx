'use client';

import { BellIcon, LogOut } from "lucide-react";
import { CommandComponent } from "./Command";
import { Button } from "./ui/button";

import { useState } from "react";
import NotificationComponent from "./notification";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"



export default function Header() {
    const [notifications, setNotifications] = useState<any>([
        {
            title: "This is a notification",
            date: "04-11-2024",
            read: true
        },
        {
            title: "This is a notification",
            date: "03-11-2024",
            read: false
        },
        {
            title: "This is a notification",
            date: "03-11-2024",
            read: false
        },
        {
            title: "This is a notification",
            date: "02-11-2024",
            read: false
        },
        {
            title: "This is a notification",
            date: "01-11-2024",
            read: true
        },
        {
            title: "This is a notification",
            date: "01-11-2024",
            read: false
        },
    ]);

    return (
        <div className="w-full grid grid-cols-2 gap-4 p-4 border-b">
            <CommandComponent />
            <div className="flex gap-2 items-center justify-end">
                <NotificationComponent noti={notifications} />
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button className="" variant="ghost">
                                <LogOut className="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Logout</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>


            </div>
        </div>
    )
}