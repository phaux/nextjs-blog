import { PostCard } from "./PostCard";
import { PostListToolbar } from "./PostListToolbar";

export function PostList(props: { className?: string }) {
  const { className = "" } = props;
  return (
    <section className={"flex flex-col gap-8 lg:gap-16 " + className}>
      <div className="flex flex-wrap align-center gap-8 lg:gap-16">
        <h1 className="flex-1 text-2xl font-bold">Wpisy</h1>
        <PostListToolbar />
      </div>
      <div className="grid gap-8 lg:gap-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <PostCard
          id="1"
          category="Wiedza"
          title="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
          date={new Date("2025-02-19")}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquet, nunc nisl aliquet nisl, eget aliquam nisl nisl eget nisl. Sed euismod, nisl eget aliquam aliquet, nunc nisl aliquet nisl, eget aliquam nisl nisl eget nisl."
        />
      </div>
    </section>
  );
}
