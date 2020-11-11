import { StoreItem } from "../interfaces";

const sampleData: StoreItem[] = [
  { id: 1, title: "Lovely Mittens", content: "woot", slug: "lovely-mittens" },
  { id: 2, title: "Nice Mittens", content: "woot", slug: "nice-mittens" },
  {
    id: 3,
    title: "Cashmere Mittens",
    content: "woot",
    slug: "cashmere-mittens",
  },
  { id: 4, title: "Discount", content: "woot", slug: "discount" },
];

export const getAllStoreItems = (): StoreItem[] => sampleData;

export const getStoreItemBySlug = (slug: String): StoreItem | undefined =>
  sampleData.find((storeItem) => storeItem.slug === slug);
