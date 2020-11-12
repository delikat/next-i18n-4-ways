import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { StoreItem } from "../interfaces";

type Props = {
  storeItem: StoreItem;
};

const StoreItemCard = ({ storeItem }: Props) => (
  <div>
    <h2>{storeItem.title}</h2>
    <p>{storeItem.content}</p>
  </div>
);

export default StoreItemCard;
