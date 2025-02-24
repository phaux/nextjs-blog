import { cookies } from "next/headers";
import { PostCard } from "./PostCard";
import { PostListToolbar } from "./PostListToolbar";
import { categoryData, getPosts, PostCategory } from "@/api/getPosts";
import { XIcon } from "lucide-react";
import Link from "next/link";

export async function PostList(props: {
  className?: string;
  favOnly: boolean;
  categories?: string[];
  order?: string;
}) {
  const { className = "", favOnly, categories, order } = props;
  const cookie = await cookies();
  const liked = cookie.get("likes")?.value.split(",") ?? [];
  const posts = await getPosts(1);
  const orderedPosts =
    order === "title"
      ? posts.sort((a, b) => a.title.localeCompare(b.title))
      : posts.sort((a, b) => Number(b.date) - Number(a.date));
  const filteredPosts = orderedPosts
    .filter((post) => (favOnly ? liked.includes(post.id.toString()) : true))
    .filter((post) => (categories ? categories.includes(post.category) : true));

  return (
    <section className={"flex flex-col gap-8 lg:gap-16 " + className}>
      <div className="flex flex-wrap items-center gap-8 lg:gap-16">
        <div className="flex-1 flex flex-wrap items-center gap-8 lg:gap-16">
          <h1 className="text-2xl font-bold">Wpisy</h1>
          {categories && categories.length > 0 && (
            <ClearCategoriesButton categories={categories} />
          )}
        </div>
        <PostListToolbar className="flex-1" />
      </div>
      {filteredPosts.length === 0 ? (
        <p className="text-center text-lg text-zinc-400">
          Brak wpisów do wyświetlenia
        </p>
      ) : (
        <div className="grid gap-8 lg:gap-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}

function ClearCategoriesButton({ categories }: { categories: string[] }) {
  const category = categories[categories.length - 1]; // Only display one category name
  const label =
    category in categoryData
      ? categoryData[category as PostCategory].name.pl
      : category;
  return (
    <Link
      href="/"
      className="flex gap-2 items-center uppercase decoration-2 cursor-pointer hover:underline"
    >
      <XIcon /> {label}
    </Link>
  );
}
