"use client";


import { useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function UserGreeting({ user }: any){
    const [userInfo, setUserInfo] = useState(user);
    return (
        <div className="card w-[400px] h-[150px] rounded-xl shadow-xl p-4 bg-amber-50">
            <h3 className="text-2xl font-bold">Welcome, <span className="text-blue-400">{userInfo.name}</span></h3>
            <p className="text-sm mt-4">Easy and ready to manage the administrative features➡️.</p>
            <Separator orientation="horizontal" className="mt-5"/>
            <Button variant="link" className="p-0 ">
                👁️View your activities &gt;&gt;
            </Button>
        </div>
    )
}