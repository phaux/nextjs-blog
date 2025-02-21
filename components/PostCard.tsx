import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { categoryData, PostData } from "@/api/getPosts";

export function PostCard(props: { className?: string; post: PostData }) {
  const { className = "", post } = props;
  return (
    <article
      className={
        "row-span-4 grid grid-rows-subgrid gap-6 p-6 rounded-tl-4xl rounded-br-4xl bg-zinc-100 dark:bg-zinc-900" +
        className
      }
    >
      <header className="flex flex-col gap-3">
        <span
          className="text-sm uppercase underline italic decoration-2"
          style={{ color: categoryData[post.category].bg }}
        >
          {post.category}
        </span>
        <h1 className="text-xl font-serif font-bold leading-6 text-balance">
          {post.title}
        </h1>
      </header>
      <time
        className="font-serif text-sm font-bold"
        dateTime={post.date.toISOString()}
      >
        {post.date.toLocaleDateString()}
      </time>
      <p className="flex-1 text-sm leading-6">{post.body}</p>
      <Link
        href={`/posts/${post.id}`}
        className="-m-4 p-4 flex gap-2 items-center font-bold text-sm hover:underline"
      >
        zobacz więcej <ArrowRightIcon />
      </Link>
    </article>
  );
}
