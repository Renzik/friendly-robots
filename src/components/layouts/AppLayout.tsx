import Head from "next/head";
import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

type AppLayoutProps = {
  title?: string;
  header?: React.ReactNode;
  navbar?: React.ReactNode;
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({
  header,
  navbar = <Navbar />,
  title = "Friendly Robots",
  children,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {navbar && navbar}
      {header && header}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
