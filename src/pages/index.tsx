import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello"]);

  if (isLoading || !data) return <div>Loading...</div>;

  return <div className="text-2xl font-bold">Hello world!</div>;
};

export default Home;
