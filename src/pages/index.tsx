import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = ({ locale, locales }) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      {locale}
    </p>
  </Layout>
);

export const getStaticProps = ({ locale, locales }) => {
  return {
    props: {
      locale,
      locales,
    },
  };
};

export default IndexPage;
