"use client";
import FeaturesPie from "@/components/reports/features-pie";
import PaymentReport from "@/components/reports/payment-report";
import TotalUser from "@/components/total-user";
import UserGreeting from "@/components/user-greeting";
import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/reports/user-purchase";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

export type Payment = {
    id: string
    name: string
    amount: number
    status: "Valid" | "Expire"
    email: string
    purchaseTimes: number
}

export default function DashboardPage() {
    const [user, setUser] = useState({
        name: "Htet Aung",
        email: "administrator.amuze@gmail.com",
        role: "Admin"
    });

    const [userList, setUserList] = useState({
        total: 1980,
        readers: 1532,
        creators: 448,
    });

    // table columns
    const columns: ColumnDef<Payment>[] = [
        {
            accessorKey: "name",
            header: "Name",
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("status")}</div>
            ),
        },
        {
            accessorKey: "email",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Email
                        <ArrowUpDown />
                    </Button>
                )
            },
            cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
        },
        {
            accessorKey: "amount",
            header: () => <div className="text-right">Amount</div>,
            cell: ({ row }) => {
                const amount = parseFloat(row.getValue("amount"))
    
                // Format the amount as a dollar amount
                const formatted = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(amount)
    
                return <div className="text-right font-medium">{formatted}</div>
            },
        },
        // {
        //     accessorKey: "purchaseTimes",
        //     header: "Purchases Times",
        // },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                const payment = row.original
    
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(payment.id)}
                            >
                                Copy payment ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View customer</DropdownMenuItem>
                            <DropdownMenuItem>View payment details</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]

    // table data
    const data: Payment[] = [
        {
            id: "m5gr84i9",
            name: "Kenny",
            amount: 3160,
            status: "Valid",
            email: "ken99@yahoo.com",
            purchaseTimes: 58
          },
          {
            id: "3u1reuv4",
            name: "Abe Dabby",
            amount: 2420,
            status: "Valid",
            email: "Abe45@gmail.com",
            purchaseTimes: 43
          },
          {
            id: "derv1ws0",
            name: "Monserrat Robbie",
            amount: 2137,
            status: "Valid",
            email: "Monserrat44@gmail.com",
            purchaseTimes: 21
          },
          {
            id: "5kma53ae",
            name: "Silas Wayne",
            amount: 1874,
            status: "Valid",
            email: "Silas22@gmail.com",
            purchaseTimes: 30
          },
          {
            id: "bhqecj4p",
            name: "Carmella Moris",
            amount: 1721,
            status: "Valid",
            email: "carmella@hotmail.com",
            purchaseTimes: 28
          },
          {
            id: "m5gr84i9",
            name: "Kenny",
            amount: 3160,
            status: "Valid",
            email: "ken99@yahoo.com",
            purchaseTimes: 58
          },
          {
            id: "3u1reuv4",
            name: "Abe Dabby",
            amount: 2420,
            status: "Valid",
            email: "Abe45@gmail.com",
            purchaseTimes: 43
          },
          {
            id: "derv1ws0",
            name: "Monserrat Robbie",
            amount: 2137,
            status: "Valid",
            email: "Monserrat44@gmail.com",
            purchaseTimes: 21
          },
          {
            id: "5kma53ae",
            name: "Silas Wayne",
            amount: 1874,
            status: "Valid",
            email: "Silas22@gmail.com",
            purchaseTimes: 30
          },
          {
            id: "bhqecj4p",
            name: "Carmella Moris",
            amount: 1721,
            status: "Valid",
            email: "carmella@hotmail.com",
            purchaseTimes: 28
          },
    ]

    const [featuresReport, setFeaturesReport] = useState([]);

    const [report, setReport] = useState([10000000, 13004000, 9032440, 18432700, 10993211, 21630000, 18641000, 15998500, 10390000, 10030500, 21091000, 13554000]);

    return (
        <div className="flex flex-col gap-8">
            <div className="grid grid-cols-3 gap-72">
                <UserGreeting user={user} />
                <TotalUser userList={userList} />
            </div>
            <div className="grid grid-cols-3 gap-72">
                <div className="flex flex-col gap-3">
                    <PaymentReport transactions={report} />
                    <FeaturesPie transactions={report} />
                </div>
                <div className="flex flex-col min-w-full">
                {/* <DataTable data={tableData} columns={columns} /> */}
                    <DataTable data={data} columns={columns}/>
                </div>
                

            </div>


        </div>
    )
}