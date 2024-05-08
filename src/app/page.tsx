import DashLayout from "@/app/dash-layout";
import OverviewCards from "@/app/components/overview-cards";
import LineChart from "@/app/components/charts/line-chart";
import BarChart from "@/app/components/charts/bar-chart";

export default function Home() {
    return (
        <DashLayout>
            <OverviewCards />
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mt-8">
                <div className="col-span-2">
                    <LineChart />
                </div>
                <div>
                    <BarChart />
                </div>
            </div>
        </DashLayout>
    );
}
