import MyImage from "../Image/Image";

const Post = ({ post }) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "10px 20px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>{post.fields.text}</h2>
      <MyImage
        width={300}
        height={200}
        priority
        src={post.fields.picture.fields.file.url}
        alt={post.fields.picture.fields.title}
      />
    </div>
  );
};

export { Post };
