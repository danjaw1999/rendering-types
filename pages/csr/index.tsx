import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { Post } from "../../components/Post";

const getBlockApi = async () => {
  const client = createClient({
    space: "ewbbedzpiizf",
    accessToken: "KzzUJNETRJxmHmAobO0l98N_d4pnarv55OM-ity-bqE",
  });
  return await client.getEntries({
    content_type: "blog",
  });
};

const Index = () => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    getBlockApi().then((res) => {
      setBlog(res.items[0].fields);
    });
  }, []);

  return blog ? (
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
  ) : (
    <span>Loading...</span>
  );
};

export default Index;
