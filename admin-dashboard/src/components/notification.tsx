'use client';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BellIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react";

export default function NotificationComponent({ noti }: any) {

    const [notifications, setNotifications] = useState(noti);

    const readNotification = (notification: any) => {

    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className="">

                    <Button variant="outline" size="icon" className="shadow-sm relative flex items-center justify-center">
                        <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                            {notifications.length}
                        </span>
                        <BellIcon className="h-4 w-4 text-blue-500" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {notifications.map((notification: any, key: number) =>
                        <DropdownMenuItem key={key} onClick={readNotification} className={`py-2 px-3 hover:bg-neutral-50 transition flex items-start gap-2 cursor-pointer ${notification.read ? 'bg-white' : 'bg-neutral-100'}`}>
                            <div className={`h-3 w-3 rounded-full my-1 ${notification.read ? 'bg-blue-600' : 'bg-neutral-200'}`}> </div>
                            <div>
                                <p>{notification.title}</p>
                                <p className="text-xs text-neutral-500">{notification.date}</p>
                            </div>


                        </DropdownMenuItem>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}