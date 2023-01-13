import { createClient } from "contentful";
import { Post } from "../../components/Post";
import { GetStaticProps } from "next";

export default function Index({ blog }) {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{blog.text}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {blog.posts.map((post) => (
          <Post key={post.fields.text} post={post} />
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <a
          href={"/"}
          style={{ padding: "20px 30px", border: "1px solid white" }}
        >
          Back to Home!
        </a>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "blog",
  });

  return {
    props: {
      blog: res.items[0].fields,
    },
  };
};
