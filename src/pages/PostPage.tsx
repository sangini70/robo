import roboAdvisorHtml from "../posts/robo-advisor";

export default function PostPage() {
  return (
    <main style={{ padding: "40px 20px" }}>
      <div dangerouslySetInnerHTML={{ __html: roboAdvisorHtml }} />
    </main>
  );
}
