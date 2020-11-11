import { GetStaticProps, GetStaticPaths } from "next";

import { Post } from "../../interfaces";
import { samplePostData } from "../../utils/sampleData";
import Layout from "../../components/Layout";

type Props = {
  item: Post;
  errors?: string;
};

const PostDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | My Blog">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={`${item ? item.title : "Blog Post"} | My Blog`}>
      <h1>{item.title}</h1>
      <p>{item.content}</p>
    </Layout>
  );
};

export default PostDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = samplePostData.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.slug;
    const item = samplePostData.find((post: Post) => post.slug === slug);
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
