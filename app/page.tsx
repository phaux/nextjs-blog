import { CategoryList } from "@/components/CategoryList";
import { PostList } from "@/components/PostList";
import { AppHeader } from "@/components/AppHeader";

export default function HomePage() {
  return (
    <>
      <AppHeader className="container mx-auto" />
      <main className="flex flex-col gap-8 lg:gap-16">
        <h1 className="container mx-auto text-3xl font-bold">
          Blog edukacyjny
        </h1>
        <div className="bg-zinc-100 dark:bg-zinc-900 py-8 lg:py-16">
          <CategoryList className="container mx-auto" />
        </div>
        <PostList className="container mx-auto" />
      </main>
    </>
  );
}
