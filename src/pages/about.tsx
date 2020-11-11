import { FC } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "../components/Layout";

const AboutPage: FC = () => {
  const { locale, asPath, pathname } = useRouter();
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          {`asPath: ${asPath}  pathname: ${pathname}  locale: ${locale}`}
        </Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
