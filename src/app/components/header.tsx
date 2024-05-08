import { Bell, ChevronDown, MessageCircleMore, Search } from "lucide-react";
import Image from "next/image";
import user_image from "@/assets/img/user.jpeg";

function Header() {
    return (
        <header className="sticky top-0 z-999 bg-base border-lavender border-[3px] rounded-3xl flex flex-grow items-center justify-between px-4 py-2">
            <div>
                <div className="flex items-center gap-2">
                    <Search className="text-flamingo" />
                    <input
                        type="text"
                        className="bg-transparent focus:ring-0 focus:outline-none text-pink text-lg"
                        placeholder="Find your Cat..."
                    />
                </div>
            </div>
            <ul className="flex items-center gap-8">
                <li className="relative">
                    <span className="inline-block bg-red h-2 w-2 rounded-full absolute top-0 right-0"></span>
                    <Bell className="text-yellow" />
                </li>
                <li className="relative">
                    <span className="inline-block bg-red h-2 w-2 rounded-full absolute top-0 right-0"></span>
                    <MessageCircleMore className="text-mauve" />
                </li>
                <li className="flex items-center gap-2">
                    <div className="text-right">
                        <h2 className="text-text font-bold">Mehedi Hasan</h2>
                        <p className="text-xs text-subtext-1">Web Developer</p>
                    </div>
                    <Image
                        className="rounded-full"
                        src={user_image}
                        height={40}
                        width={40}
                        alt="Mehedi Hasan"
                    />
                    <ChevronDown className="text-teal w-5 -ml-1" />
                </li>
            </ul>
        </header>
    );
}

export default Header;
