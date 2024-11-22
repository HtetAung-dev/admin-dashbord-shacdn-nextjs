'use client';

import { useState } from "react";

export default function TotalUser({ userList }: any){
    const [userData] = useState(userList);

    return (
        <div className="grid grid-cols-3 col-span-2 gap-2 w-full max-h-[150px] cursor-pointer">
            <div className="card shadow-2xl bg-slate-800 p-2 rounded-lg text-slate-50">
                <p>⭐Total Users :</p>
                <h4 className="text-5xl font-thin text-end mt-10">{userData.total}</h4>
            </div>
            <div className="card shadow-2xl bg-slate-500 p-2 rounded-lg text-slate-50">
                <p>📖Readers :</p>
                <h4 className="text-5xl font-thin text-end mt-10">{userData.readers}</h4>
            </div>
            <div className="card shadow-2xl bg-slate-100 p-2 rounded-lg">
                <p>✍️Creators :</p>
                <h4 className="text-5xl font-thin text-end mt-10">{userData.creators}</h4>
            </div>
        </div>
    )
}