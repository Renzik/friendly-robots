import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";
import { prisma } from "@/db/client";

const Home: NextPage = (props: any) => {
  const { data, isLoading } = trpc.useQuery(["getAllRobots"]);

  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <div className="text-2xl font-bold">
      <div>{data[0]?.name}</div>
    </div>
  );
};

export default Home;
