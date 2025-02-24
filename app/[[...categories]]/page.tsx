import { CategoryList } from "@/components/CategoryList";
import { PostList } from "@/components/PostList";
import { AppHeader } from "@/components/AppHeader";

export default async function HomePage(props: {
  searchParams: Promise<{ filter?: string | string[]; order?: string }>;
  params: Promise<{ categories?: string[] }>;
}) {
  const { filter, order } = await props.searchParams;
  const { categories } = await props.params;

  return (
    <>
      <AppHeader className="container mx-auto px-8 lg:px-16" />
      <main className="flex flex-col gap-8 lg:gap-16">
        <h1 className="container mx-auto text-3xl font-bold px-8 lg:px-16">
          Blog edukacyjny
        </h1>
        <div className="bg-zinc-100 dark:bg-zinc-900 py-8 lg:py-16">
          <CategoryList
            className="container mx-auto px-8 lg:px-16"
            activeCategories={categories}
          />
        </div>
        <PostList
          className="container mx-auto px-8 lg:px-16"
          categories={categories}
          favOnly={
            typeof filter == "string"
              ? filter === "favorite"
              : filter?.includes("favorite") ?? false
          }
          order={order}
        />
      </main>
    </>
  );
}
