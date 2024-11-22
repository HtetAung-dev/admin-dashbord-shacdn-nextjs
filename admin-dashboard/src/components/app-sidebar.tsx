"use client";
import { Calendar, Calculator, CreditCard, Smile, User, Home, Inbox, Search, Settings } from "lucide-react"
import images from "@/constants/images";
import { MenuItems } from "@/constants/menuItems";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import UserItem from "./user-item";
import { group } from "console";
import { useState } from "react";

// Menu items.


export function SidebarCommand() {

    return (
        <Command className="overflow-visible bg-transparent">
            <CommandList className="overflow-visible">
                {MenuItems.map((menu: any, key: number) => (
                    <CommandGroup key={key} heading={menu.group}>
                        {menu.items?.map((item: any, itemKey: number) => (
                            <div key={itemKey} className="flex flex-col text-slate-50">
                                <CommandItem className="text-xl flex gap-2 cursor-pointer" key={itemKey} >
                                    {item.icon && <item.icon />}
                                    <span className="text-[15px]">{item.title}</span>
                                    {item.shorcut && <CommandShortcut key={itemKey}>{item.shorcut}</CommandShortcut>}
                                </CommandItem>
                            </div>

                        ))}
                    </CommandGroup>
                ))}
            </CommandList>
        </Command>
    )
}

export default function AppSidebar() {
    return (
        <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen bg-slate-800 ">
            <div className="flex justify-start font-geist p-2 items-center gap-2 border-b-2 border-slate-600">
                <img src={images.AmuzeLogo.src} alt="logo" className="w-14" />
                <h2 className="font-semibold text-[18px] text-slate-50 w-[200px] whitespace-nowrap overflow-hidden">
                    <span className="animate-marquee inline-block">Amuze Admin Dashboard</span>
                </h2>
            </div>
            <div>
                <UserItem />
            </div>

            <div className="grow min-h-full">
                <SidebarCommand />
            </div>
        </div>
    )
}
