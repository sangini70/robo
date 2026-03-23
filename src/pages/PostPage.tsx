import { useParams } from "react-router-dom";
import { posts } from "./index";

export default function PostPage() {
  const { slug } = useParams();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main style={{ padding: "40px 20px" }}>
        <h1>글을 찾을 수 없습니다.</h1>
      </main>
    );
  }

  return (
    <main style={{ padding: "40px 20px" }}>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}
