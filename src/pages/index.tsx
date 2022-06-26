import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";
import { prisma } from "@/db/client";

const Home: NextPage = (props: any) => {
  const { data, isLoading } = trpc.useQuery(["hello"]);

  // if (isLoading || !data) return <div>Loading...</div>;

  return <div className="text-2xl font-bold">{props.robots}</div>;
};

export default Home;

export const getServerSideProps = async () => {
  const robots = await prisma.robot.findMany();

  return {
    props: {
      robots: JSON.stringify(robots),
    },
  };
};
