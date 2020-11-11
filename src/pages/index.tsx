import Link from "next/link";
import Layout from "../components/Layout";

import { StoreItem } from "../interfaces";
import { getAllStoreItems } from "../utils/db";

type Props = {
  allStoreItems: StoreItem[];
};

const IndexPage = ({ allStoreItems }: Props) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Welcome to KittenMittens 🐈🧤</h1>
    <ul>
      {allStoreItems.map((storeItem: StoreItem) => (
        <li>
          <p>{storeItem.title}</p>
        </li>
      ))}
    </ul>
  </Layout>
);

export const getStaticProps = () => {
  const allStoreItems = getAllStoreItems();
  return {
    props: {
      allStoreItems,
    },
  };
};

export default IndexPage;
