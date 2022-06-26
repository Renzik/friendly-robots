import AppLayout from "@/components/layouts/AppLayout";
import { trpc } from "@/utils/trpc";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  const { data, isLoading } = trpc.useQuery(["robots.getAll"]);

  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <div className="text-2xl font-bold">
      <div>{data[0]?.name}</div>
    </div>
  );
};

Home.layout = AppLayout;

export default Home;
