import Image from "next/image";
import logo from "./images/logo.png";
import { CategoryList } from "./CategoryList";
import { PostList } from "./PostList";

export default function HomePage() {
  return (
    <div className="flex flex-col items-stretch gap-8 lg:gap-16 py-8 lg:py-16">
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
    </div>
  );
}

function AppHeader(props: { className?: string }) {
  const { className = "" } = props;
  return (
    <header className={"flex flex-col gap-8 lg:gap-16 " + className}>
      <Image className="dark:invert" src={logo} alt="Logo" priority />
      <h1 className="hidden lg:block text-sm font-bold uppercase pb-4 border-b-1 border-b-slate-300 dark:border-b-slate-700">
        - Blog
      </h1>
    </header>
  );
}
