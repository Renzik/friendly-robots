import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello"]);

  if (isLoading || !data) return <div>Loading...</div>;

  return <div className="text-2xl font-bold">{data.greeting}</div>;
};

export default Home;
