import { AppHeader } from "@/components/AppHeader";
import { getPost } from "@/api/getPosts";
import { ArrowLeftIcon, StarIcon, StarOffIcon } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import utensilsImage from "@/public/images/utensils.jpg";

export default async function PostPage(props: {
  params: Promise<{ postId: string }>;
}) {
  const params = await props.params;
  const cookie = await cookies();
  const liked =
    cookie.get("likes")?.value.split(",").includes(params.postId) ?? false;
  const likeUnlikeThisPost = likeUnlikePost.bind(null, params.postId, !liked);
  const post = await getPost(Number(params.postId));

  return (
    <>
      <AppHeader className="container mx-auto px-8 lg:px-16" />
      <main className="container mx-auto flex flex-col gap-8 lg:gap-16 px-8 lg:px-16">
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 lg:gap-16">
          <h1 className="text-3xl font-bold">
            <Link
              href="/"
              className="flex gap-8 items-center hover:underline -m-4 p-4"
            >
              <ArrowLeftIcon /> Blog edukacyjny
            </Link>
          </h1>
          <button
            className="-m-4 p-4 flex gap-4 items-center font-bold cursor-pointer hover:underline"
            onClick={likeUnlikeThisPost}
          >
            {liked ? (
              <>
                <StarOffIcon /> usuń z ulubionych
              </>
            ) : (
              <>
                <StarIcon /> dodaj do ulubionych
              </>
            )}
          </button>
        </div>
        <article className="flex flex-col items-stretch gap-8 lg:gap-16">
          <h2 className="text-3xl font-serif font-bold leading-6 text-balance">
            {post.title}
          </h2>
          <p>{post.body}</p>
          <Image
            className="rounded-tl-4xl rounded-br-4xl bg-zinc-100 dark:bg-zinc-900"
            src={utensilsImage}
            alt="Utensils"
          />
        </article>
      </main>
    </>
  );
}

async function likeUnlikePost(id: string, like: boolean) {
  "use server";
  const cookie = await cookies();
  let likes = cookie.get("likes")?.value.split(",") ?? [];
  if (like) {
    likes.push(id);
  } else {
    likes = likes.filter((likeId) => likeId !== id);
  }
  cookie.set("likes", likes.join(","));
}
