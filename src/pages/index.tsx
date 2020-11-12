import Link from "next/link";
import Layout from "../components/Layout";
import StoreItemCard from "../components/StoreItemCard";

import { StoreItem } from "../interfaces";
import { getAllStoreItems } from "../utils/db";

type Props = {
  allStoreItems: StoreItem[];
};

const IndexPage = ({ allStoreItems }: Props) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Welcome to our store</h1>
    <ul>
      {allStoreItems.map((storeItem: StoreItem) => (
        <StoreItemCard storeItem={storeItem} />
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
