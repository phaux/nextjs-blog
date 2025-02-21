import { cookies } from "next/headers";
import { PostCard } from "./PostCard";
import { PostListToolbar } from "./PostListToolbar";
import { getPosts } from "@/api/getPosts";

export async function PostList(props: { className?: string }) {
  const { className = "" } = props;
  const cookie = await cookies();
  const posts = await getPosts(1);
  return (
    <section className={"flex flex-col gap-8 lg:gap-16 " + className}>
      <div className="flex flex-wrap align-center gap-8 lg:gap-16">
        <h1 className="flex-1 text-2xl font-bold">Wpisy</h1>
        <PostListToolbar />
      </div>
      <div className="grid gap-8 lg:gap-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
