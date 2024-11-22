import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
export default function UserItem () {
    return (
        <div className="p-4">
                
                <div className="flex items-center justify-center gap-2 rounded-md border text-slate-50 border-slate-300 p-4 hover:bg-cyan-200 hover:text-slate-800 cursor-pointer transform transition-transform duration-300 hover:scale-105">
                <Avatar className="flex justify-center items-center rounded-full min-h-14 min-w-14 font-[700]  border-solid border-slate-800">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-bold text-[16px]">Htet Aung</p>
                    <p className=" text-sm">admin.amuze@gmail.com</p>
                </div>
                </div>
            </div>
    );
}