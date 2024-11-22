'use client'
import AppSidebar from "@/components/app-sidebar";
import Header from "@/components/header";
import SplashScreen from "@/components/splash-screen";
import React, { useState, useEffect } from "react";

export default function DashboardLayout({children}: {children: React.ReactNode}) {

    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);
        return () => clearTimeout(timer);

    }, []);
    return (
        <>
            {showSplash ? 
                <SplashScreen />
             : <>
                <AppSidebar />
                <div className="grid w-full h-full pl-[300px] bg-blue-50 overflow-x-hidden">
                  <Header />  
                  <div className="p-8 ">
                  {children}
                  </div>
                </div>
                </> 
            }
        </>
    )
}