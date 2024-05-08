import Header from "@/app/components/header";

export default function DashLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex">
            <aside className="absolute left-0 top-0 z-9999 flex h-screen w-72 flex-col overflow-y-hidden bg-base border-peach border-[3px] rounded-r-3xl border-l-0 duration-300 ease-linear lg:static lg:translate-x-0 -translate-x-full"></aside>
            <div className="p-8 w-full">
                <Header />
                {children}
            </div>
        </div>
    );
}
