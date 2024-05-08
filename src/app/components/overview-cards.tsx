import {
    ArrowDown,
    ArrowUp,
    Eye,
    ShoppingBag,
    ShoppingCartIcon,
    Users2,
} from "lucide-react";

export default function OverviewCards() {
    return (
        <div className="pt-8 grid gap-8 grid-cols-1 lg:grid-cols-4">
            <div className="border-green border-[3px] rounded-3xl bg-base p-6">
                <div className="h-12 w-12 flex justify-center items-center bg-green rounded-full">
                    <Eye className="text-5xl" />
                </div>
                <div className="mt-4 flex items-end justify-between">
                    <div>
                        <h4 className="text-2xl font-bold text-green">
                            $3.456K
                        </h4>
                        <span className="text-sm font-medium text-subtext-1">
                            Total views
                        </span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-medium text-green">
                        0.43%
                        <ArrowUp />
                    </span>
                </div>
            </div>
            <div className="border-sapphire border-[3px] rounded-3xl bg-base p-6">
                <div className="h-12 w-12 flex justify-center items-center bg-sapphire rounded-full">
                    <ShoppingCartIcon className="text-5xl" />
                </div>
                <div className="mt-4 flex items-end justify-between">
                    <div>
                        <h4 className="text-2xl font-bold text-sapphire">
                            $45,2K
                        </h4>
                        <span className="text-sm font-medium text-subtext-1">
                            Total Profit
                        </span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-medium text-green">
                        4.35%
                        <ArrowUp />
                    </span>
                </div>
            </div>
            <div className="border-peach border-[3px] rounded-3xl bg-base p-6">
                <div className="h-12 w-12 flex justify-center items-center bg-peach rounded-full">
                    <ShoppingBag className="text-5xl" />
                </div>
                <div className="mt-4 flex items-end justify-between">
                    <div>
                        <h4 className="text-2xl font-bold text-peach">2,450</h4>
                        <span className="text-sm font-medium text-subtext-1">
                            Total products
                        </span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-medium text-green">
                        30%
                        <ArrowUp />
                    </span>
                </div>
            </div>
            <div className="border-pink border-[3px] rounded-3xl bg-base p-6">
                <div className="h-12 w-12 flex justify-center items-center bg-pink rounded-full">
                    <Users2 className="text-5xl" />
                </div>
                <div className="mt-4 flex items-end justify-between">
                    <div>
                        <h4 className="text-2xl font-bold text-pink">3660</h4>
                        <span className="text-sm font-medium text-subtext-1">
                            Total customers
                        </span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-medium text-red">
                        0.93%
                        <ArrowDown />
                    </span>
                </div>
            </div>
        </div>
    );
}
