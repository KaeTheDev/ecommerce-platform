import StatsCard from "../StatsCard/StatsCard";
import RecentActivity from "../RecentActivity/RecentActivity";

const DashboardOverview = () => (
    <>
    <p className="text-3xl mb-3 5">Dashboard Overview</p>
    <p className="text-sm mb-7">Welcome to your store management dashboard</p>
    <StatsCard />
    <RecentActivity />
    </>
);
export default DashboardOverview;